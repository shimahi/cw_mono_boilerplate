import { createId } from '@paralleldrive/cuid2'
import type { InferModel } from 'drizzle-orm'
import { eq, sql } from 'drizzle-orm'

import { users } from '../schemas'
import type { User } from '../schemas/type'
import { generateString } from '../utils'
import { RepositoryBase } from './_repositoryBase'

type UserInsert = InferModel<typeof users, 'insert'>
type UserUpdate = Partial<UserInsert>

export class UserRepository extends RepositoryBase {
  // ユーザーのレコードを新規作成する
  private createUser(input: UserInsert) {
    return this.drizzle.insert(users).values(input).returning().get()
  }

  async getUser(id: User['id']) {
    return this.drizzle.select().from(users).where(eq(users.id, id)).get()
  }

  async getUsers() {
    return this.drizzle.select().from(users).all()
  }

  // ユーザーの総数を返す
  async getUsersCount() {
    const result = await this.drizzle
      .select({ count: sql<number>`count(*)` })
      .from(users)
      .all()

    return result[0].count
  }

  // ユーザーのレコードを更新する
  async updateUser(id: User['id'], input: UserUpdate) {
    return this.drizzle.update(users).set(input).where(eq(users.id, id)).returning().get()
  }

  // ProfileIdに一致するユーザーを取得する
  async getUserByProfileId(profileId: User['profileId']) {
    return this.drizzle
      .select()
      .from(users)
      .where(eq(users.profileId, String(profileId)))
      .get()
  }

  // profileの情報からユーザーを新規作成する。すでに存在する場合はそのユーザーを返す。
  async findOrCreateUser(profile: { provider: string; id: string; displayName: string; photos: { value: string }[] }) {
    const existing = await this.getUserByProfileId(profile.id)
    if (existing) return existing

    const user = await this.createUser({
      id: createId(),
      profileId: profile.id,
      accountId: generateString(),
      displayName: profile.displayName,
      avatarUri: profile.photos?.[0].value,
      provider: profile.provider,
      createdAt: new Date(),
    })

    return {
      provider: user.provider,
      profileId: user.profileId,
    }
  }
}

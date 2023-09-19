import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest'

import { domainArgsMock, userFixture } from '../__tests__'
import { users } from '../schemas'
import { UserRepository } from './user'

// =============================
// テスト環境のセットアップ
// =============================

let db: InstanceType<typeof Database>
let subject: UserRepository

// テスト用の仮想DBを用意し、drizzleプロパティをモックしたuserRepositoryインスタンスを作成
beforeAll(() => {
  db = new Database(':memory:')
  db.exec(`
    CREATE TABLE users (
      id TEXT PRIMARY KEY NOT NULL,
      accountId TEXT NOT NULL UNIQUE,
      displayName TEXT NOT NULL,
      introduction TEXT,
      isDeactivated INT DEFAULT false,
      avatarUri TEXT NOT NULL,
      profileId TEXT NOT NULL,
      createdAt INT NOT NULL,
      provider TEXT NOT NULL,
      isProfileRegistered INT DEFAULT false
    );
  `)

  vi.mock('drizzle-orm/d1', () => ({
    drizzle: vi.fn().mockImplementation(() => drizzle(db)),
  }))

  subject = new UserRepository(domainArgsMock)
})

// 各テスト終了時にテーブルの中身を空にする
afterEach(() => {
  db.prepare('DELETE FROM users').run()
})

// 全テスト終了後、メモリ内の仮想DBを削除
afterAll(() => {
  db.prepare('DROP TABLE users').run()
  db.close()
})

// =============================
// テストケースの実装
// =============================

describe('#getUser', () => {
  const userData = userFixture.build()
  beforeAll(() => {
    drizzle(db).insert(users).values(userData).run()
  })

  test('IDを指定したを取得できる', async () => {
    const user = await subject.getUser(userData.id)
    expect(user?.id).toBe(userData.id)
  })
})

describe('#getUsersCount', () => {
  const userData1 = userFixture.build()
  const userData2 = userFixture.build()
  const userData3 = userFixture.build()

  beforeAll(async () => {
    Promise.all([
      drizzle(db).insert(users).values(userData1).run(),
      drizzle(db).insert(users).values(userData2).run(),
      drizzle(db).insert(users).values(userData3).run(),
    ])
  })

  test('ユーザーの総数が取得できること', async () => {
    expect(await subject.getUsersCount()).toBe(3)
  })
})

describe('#updateUser', () => {
  const userData = userFixture.build()

  beforeAll(() => {
    drizzle(db).insert(users).values(userData).run()
  })

  test('ユーザーの情報を更新できる', async () => {
    const { displayName, introduction, avatarUri } = userFixture.build()
    const input = { displayName, introduction, avatarUri }
    const result = await subject.updateUser(userData.id, input)

    expect(result.displayName).toBe(input.displayName)
    expect(result.introduction).toBe(input.introduction)
    expect(result.avatarUri).toBe(input.avatarUri)
    expect(result.id).toBe(userData.id)
    expect(result.provider).toBe(userData.provider)
  })
})

describe('getUserByProfileId', () => {
  const userData = userFixture.build()
  beforeAll(() => {
    drizzle(db).insert(users).values(userData).run()
  })

  test('ProfileIdを指定したユーザーを取得できる', async () => {
    const user = await subject.getUserByProfileId(userData.profileId)

    expect(user?.id).toBe(userData.id)
  })
})

describe('#findOrCreateUser', () => {
  const userData1 = userFixture.build()

  beforeAll(() => {
    // userData1のみユーザーを作成する
    drizzle(db).insert(users).values(userData1).run()
  })

  test('ユーザーが存在する場合、そのユーザーが返される', async () => {
    const profile = {
      id: userData1.profileId,
      provider: userData1.provider,
      displayName: userData1.displayName,
      photos: [{ value: userData1.avatarUri }],
    }
    const user = await subject.findOrCreateUser(profile)

    expect(user.profileId).toBe(userData1.profileId)
  })

  test('ユーザーが存在しない場合、新規作成される', async () => {
    const userData2 = userFixture.build({
      profileId: 'profileId',
    })
    const profile = {
      id: userData2.profileId,
      provider: userData2.provider,
      displayName: userData2.displayName,
      photos: [{ value: userData2.avatarUri }],
    }

    const user = await subject.findOrCreateUser(profile)

    expect(user.profileId).toBe(profile.id)
  })
})

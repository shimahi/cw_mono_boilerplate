/**
 * @description
 * fisheryを使ったデータジェネレーター
 * テスト用データに利用する。
 * https://github.com/thoughtbot/fishery
 */

import { faker } from '@faker-js/faker'
import { createId } from '@paralleldrive/cuid2'
import { Factory } from 'fishery'

import type { User } from '../../schemas/type'

export const userFixture = Factory.define<User>(() => {
  return {
    id: createId(),
    accountId: faker.string.alphanumeric(12),
    displayName: faker.person.firstName(),
    introduction: faker.lorem.paragraph(1),
    isDeactivated: false,
    avatarUri: faker.image.avatar(),
    createdAt: faker.date.past(),
    profileId: createId(),
    provider: 'google',
    isProfileRegistered: false,
  }
})

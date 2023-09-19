import { faker } from '@faker-js/faker'
import { parse, ValiError } from 'valibot'
import { describe, expect, test } from 'vitest'

import { userValidator } from './user'

describe('#update', () => {
  describe('アカウントID・ユーザー名・サムネイルが指定されている場合', () => {
    const input = {
      accountId: faker.string.alphanumeric(10),
      displayName: faker.person.firstName(),
      avatarUri: faker.image.avatar(),
    }
    test('バリデーションが通ること', () => {
      const result = parse(userValidator.update, input)
      expect(result).toEqual(input)
    })
  })
  describe('アカウントIDに半角英数字とアンダースコア以外の文字列が含まれる場合', () => {
    const input = {
      id: 'userId',
      accountId: 'アカウントID',
      displayName: faker.person.firstName(),
    }
    const input2 = {
      id: 'userId',
      accountId: 'account-id@',
      displayName: faker.person.firstName(),
    }
    test('バリデーションに失敗すること(全角文字)', () => {
      expect(() => parse(userValidator.update, input)).toThrow(ValiError)
    })
    test('バリデーションに失敗すること(特殊文字)', () => {
      expect(() => parse(userValidator.update, input2)).toThrow(ValiError)
    })
  })
  describe('自己紹介文が140文字を超える場合', () => {
    const input = {
      id: 'userId',
      accountId: faker.string.alphanumeric(10),
      displayName: faker.person.firstName(),
      introduction: faker.lorem.sentence(50),
    }
    test('バリデーションに失敗すること', () => {
      expect(() => parse(userValidator.update, input)).toThrow(ValiError)
    })
  })
})

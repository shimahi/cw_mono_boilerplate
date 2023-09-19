import { describe, expect, test } from 'vitest'

import { generateString, nullishToNull } from './'

describe('#generateString', () => {
  test('指定した文字数で文字列が形成されること', () => {
    const length = 10
    const result = generateString(length)
    expect(result).toHaveLength(length)
  })

  test('半角英数のみの文字列が形成されること', () => {
    const result = generateString(20)
    const alphanumericRegex = /^[a-z0-9]+$/
    expect(alphanumericRegex.test(result)).toBeTruthy()
  })
})

describe('nullishToNull', () => {
  test('オブジェクトのプロパティのうち、値がundefinedであるものをnullに変換する', () => {
    const input = {
      id: 'userId',
      accountId: 'accountId',
      name: 'name',
      introduction: undefined,
    }
    const expected = {
      id: 'userId',
      accountId: 'accountId',
      name: 'name',
      introduction: null,
    }

    expect(nullishToNull(input)).toEqual(expected)
  })
})

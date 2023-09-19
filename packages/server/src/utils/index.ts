/**
 * 半角英数字でランダムな文字列を生成する
 * 初期のaccountId形成に利用する
 * @param length 文字数
 * @returns
 */
export function generateString(length = 13) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

  return Array.from({ length })
    .map(() => {
      const randomIndex = Math.floor(Math.random() * characters.length)

      return characters.charAt(randomIndex)
    })
    .join('')
}

/**
 * オブジェクトのプロパティのうち、値がundefinedであるものをnullに変換する関数
 * valibotのnullishバリデーションとdrizzleのスキーマを合わせるために用いる
 * @param {Object} input
 */
export function nullishToNull<T>(input: Nullish<T>): T {
  return Object.fromEntries(Object.entries(input).map(([key, value]) => [key, value === undefined ? null : value])) as T
}

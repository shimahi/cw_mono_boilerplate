/**
 * @note validatorはモジュールはアプリのクライアントサイドで実行するため、'server'モジュールから直接importすると、drizzleなどのモジュールがクライアントにバンドルされ、アプリに不具合を引き起こす。
 * そのため、フロントから呼び出す際は server/dist/validators ディレクトリを指定する。
 */

import type { UserValidator } from './user'
import { userValidator } from './user'

export const validator = {
  user: userValidator,
}

export type Validator = {
  user: UserValidator
}

import type { Output } from 'valibot'
import { object } from 'valibot'

/**
 * valibotでバリデーションオブジェクトを作成する際に用いる。
 * ジェネリクスで指定したスキーマでキーを補完するobjectバリデータを返すヘルパー関数。
 */
export function createValidator<T>() {
  return function <K extends { [key in keyof T]?: Output<any> }>(config: K) {
    return object(config)
  }
}

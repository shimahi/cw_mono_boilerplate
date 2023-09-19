/**
 * @description
 * DBのスキーマをTypeScriptで型定義したもの
 * DBフィールドに対する型注釈は基本的にこれを利用する
 */

import type { InferModel } from 'drizzle-orm'

import type { users } from '.'

export type User = InferModel<typeof users, 'select'>

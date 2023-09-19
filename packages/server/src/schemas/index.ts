/**
 * @description
 * DBのスキーマ定義ファイル
 * マイグレーション実行時にこのスキーマを指定する
 */

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  /** ユーザーのID、登録時にCUIDをランダム生成する */
  id: text('id').primaryKey().notNull(),
  /** ユーザーの表示用アカウントID、ユニークな半角英数 */
  accountId: text('accountId').notNull().unique(),
  /** ユーザーのアカウント名 */
  displayName: text('displayName').notNull(),
  /** ユーザーのプロフィール文 */
  introduction: text('introduction'),
  /** ユーザーが退会しているかどうか。 */
  isDeactivated: integer('isDeactivated', { mode: 'boolean' }).default(false),
  /** アカウントのアバターURL */
  avatarUri: text('avatarUri').notNull(),
  /** ユーザーのOAuthプロファイルID */
  profileId: text('profileId').notNull(),
  /** ログインプロバイダー */
  provider: text('provider').notNull(),
  /** 作成日 */
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  /** ユーザーが初回のプロフィール更新を行なったかどうか */
  isProfileRegistered: integer('isProfileRegistered', { mode: 'boolean' }).default(false),
})

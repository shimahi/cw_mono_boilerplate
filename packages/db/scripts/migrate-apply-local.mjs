#!/usr/bin/env zx
import 'zx/globals'

/**
 * ローカルのD1環境を用意する
 * ローカルにマイグレーションを適用、.wranglerファイルを作成し、各種クライアント(apps/)にコピーする
 * pnpm run setup
 */

// apps下のクライアントに.wranglerがあれば削除
await $`rm -rf ../../apps/**/.wrangler`

// マイグレーションを実行し、.wranglerを作成
await $`pnpm wrangler d1 migrations apply sample-app-db --local`

// マイグレーションファイルをapps下のクライアントのディレクトリにコピー
await $`cp -r .wrangler ../../apps/web/.wrangler`

// .wranglerファイルを削除
await $`rm -rf .wrangler`

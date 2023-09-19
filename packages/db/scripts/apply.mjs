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
// @setup {{}}で囲われているD1プロジェクトの名前をアプリのCloudflare環境のものに書き換えてください
await $`pnpm wrangler d1 migrations apply {{your-d1-development-project}} --local`

// マイグレーションファイルをapps下のクライアントのディレクトリにコピー
await $`cp -r .wrangler ../../apps/web/.wrangler`

// .wranglerファイルを削除
await $`rm -rf .wrangler`

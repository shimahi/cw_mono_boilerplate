#!/usr/bin/env zx
import 'zx/globals'

/**
 * 新しいページとテンプレートを作成する
 * pnpm page xxxx
 */

const name = argv['_'][0]

const namePascal = name.charAt(0).toUpperCase() + name.slice(1)

if (!name) {
  console.log('ページ名を半角英数字で入力して下さい')
  process.exit(0)
}

// hygenでページ生成
await $`pnpm hygen page new --name ${name} --namePascal ${namePascal}`

// 生成ファイルをフォーマット
await $`pnpm prettier --write src/routes/${name}/**/*.{tsx,ts}`

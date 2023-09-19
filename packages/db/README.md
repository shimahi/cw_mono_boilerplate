# DB (Cloudflare D1 Database)

Cloudflareの環境のDBマイグレーション・シードを管理するディレクトリです。
ローカル開発や、リモートDBへのマイグレーション適用などのCIに使用します

### ディレクトリ構成

- **migrations** データベース(Cloudflare D1)のマイグレーションファイル。`server`パッケージで`migrate:gen`コマンドで実行されたファイルがここに生成される。
- **scripts** CIを実行するスクリプトファイルを記述する
- **wrangler.toml** Workersの設定ファイル。D1のマイグレーションを行う際に用いる。

### ローカル環境でのDBマイグレーション

以下のコマンドでローカルのwrangler環境に対してマイグレーションを適用できる。
最初に`setup`コマンドでセットアップを行うときに自動実行されるので、`server`パッケージでDBスキーマ更新・マイグレーションファイル作成を行なった時にコマンドを実行すること

```bash
$ pnpm migrate:apply-local
```

### リモート環境のDBマイグレーション

```bash
# 開発環境
$ pnpm migrate:apply-dev
# 本番環境
$ pnpm migrate:apply-prod
```

### リファレンス

- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [Migrations - Cloudflare D1](https://developers.cloudflare.com/d1/platform/migrations/)

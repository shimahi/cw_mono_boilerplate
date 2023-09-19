# Workers Remix Boilerplate

### 実行環境

Node.js 18.16.1

pnpm 8.6.5

### ディレクトリ構成

- .github GitHub Actionsの設定
- .husky コミット前に自動で走る処理の設定
- **apps** サービスのクライアントアプリを記述する。Webアプリのみならず、OpenAPIやバッチ処理、Cron Jobなど、Workers・CI環境で実行されるクライアント。
  - **web** Remixで立ち上げるWebアプリ Cloudflare Workers にデプロイする
- **packages** appsが依存するパッケージを記述する
  - **db** データベースのマイグレーション・シーディングに関するCIを管理する
  - **server** サービスのバックエンドのロジックをパッケージ化したもの
- package.json モノレポ全体で扱うパッケージとコマンドの管理
- pnpm-lock.yaml パッケージの依存関係のロックファイル
- pnpm-workspace.yaml モノレポの設定ファイル
- turbo.json モノレポライブラリのturborepoの設定

### 事前準備

Cloudflareのアカウントを作成し、チームのプロジェクトに招待を受けてください。

その後、CLIでCloudflareへのログインを行い、プロジェクトに対するwragnlerコマンドを有効にします。

```bash
$ wrangler login
```

### 開発環境構築

1. ローカル環境変数の設定

`apps/web` 下の `.dev.vars.sample` を複製し、 `.dev.vars` を `apps/web` 下に配置する。ここにローカルで必要な環境変数を設定する。

2. パッケージのセットアップ

以下コマンドでパッケージの依存関係を設定し、 `server` パッケージをビルドする

```bash
$ pnpm run setup
```

### パッケージの追加

新規のnpmライブラリを追加する際は、ワークスペースを指定してパッケージを追加する

```bash
$ pnpm {ワークスペース名} add {パッケージ名} (-D)

# e.g.
# $ pnpm web add dayjs
```

ルートにnpmライブラリを追加する場合、 -w オプションをつけてインストールする

```bash
# ルートディレクトリにインストール
$ pnpm add {パッケージ名} -D -w
```

---

### リファレンス

- [pnpm](https://pnpm.io/ja/motivation)
- [GitHub Actions](https://docs.github.com/ja/actions)
- [Turborepo](https://turbo.build/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)

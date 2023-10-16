# Server

サービスのバックエンド処理を記述するディレクトリです。 tscでビルドしたパッケージをクライアントのサーバーサイドで実行することができます。

### ディレクトリ構成

- **migrations** データベース(Cloudflare D1)のマイグレーションファイル。drizzleのコマンドで自動生成し、CLIでマイグレーションを適用する。
- **src** モジュールの実装を行うディレクトリ
  - **\_\_tests\_\_** テストコードで利用するモックデータや処理を記述する。
  - **@types** 各モジュールの型拡張やグローバルで扱う型ファイルを記述する。
  - **domains** ドメインロジックの実態、スキーマ単位でクラスを作り、ユーティリティベースのメソッドを書く。
    - クライアント側でインスタンスを生成する際、コンストラクタ引数としてWorkersの実行環境を渡してあげる。
  - **repositories** DBを操作する処理を書く。domainsのメンバとして用いる。
  - **schemas**
    - **index.ts** DBのスキーマ定義ファイル。DrizzleのCLIコマンドでこれを読み取り、マイグレーションファイルとスキーマ型を生成する。
    - **type.ts** スキーマ型を扱いやすい形にしたもの。
  - **services** 外部サービスに接続する処理を管理する。domainsのメンバとして用いる。
  - **validators** Valibotを用いて入力バリデーションを定義する。
  - **index.ts** パッケージをエクスポートするためのファイル。ドメイン処理・スキーマ型・バリデーション

### アーキテクチャ

ドメインロジックは基本的に `domains` から呼び出す。

repositoriesとservicesはアプリのCloudflare Workers実行環境に依存するため、クライアントサイドでdomainsのインスタンスを生成する際に コンストラクタ引数として `context` を渡す。 これにより、D1をはじめとするCloudflareのデータや各サービスの環境変数にアクセスできる。

```ts
import { UserDomain } from 'server'

// context はWorkersの実行環境
const userDomain = new UserDomain({ context })
```

### DBスキーマの更新方法

./src/schemas/index.ts にDrizzle ORMライブラリを使ってSQLiteのスキーマを定義する。  
その後、`migrate:gen`コマンドを実行することでDrizzle CLIによってマイグレーションファイルが生成される。

これにより生成されたマイグレーションファイルは packages/db/migrations/ に保存され、同ディレクトリ内でWranglerを実行することでローカル・リモート各種へのマイグレーションを行うことができる。

```bash
# ./src/schemas/index.tsの内容を元に、にマイグレーションファイルを生成する
$ pnpm migrate:gen

# →→→ packages/db/migrations に生成されたマイグレーションファイルを使って、各種クライアントに適用する作業を行う
```

cf [SQL schema declaration - Drizzle](https://orm.drizzle.team/docs/sql-schema-declaration)

### リファレンス

- [Vitest](https://vitest.dev/) Vite製テストランナー
- [Drizzle](https://orm.drizzle.team/) D1に対応したJavaScriptのORM
- [Valibot](https://valibot.dev/) 軽量なバリデーションライブラリ

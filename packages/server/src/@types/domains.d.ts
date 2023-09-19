/// <reference types="@cloudflare/workers-types" />

/**
 * ドメインクラスのコンストラクタ引数
 * D1 DatabaseなどのWorkers実行環境のコンテキストはクライアントから渡す必要がある
 *
 * @param context Workers実行環境のコンテキスト、D1クライアントの DB プロパティを持つ
 * @param request Workers実行環境のリクエスト
 */
interface DomainArgs {
  context: {
    env: {
      DB: D1Database
      SESSION_KV: KVNamespace
      NODE_ENV: string
      SESSION_SECRET: string
      GOOGLE_AUTH_CALLBACK_URL: string
      GOOGLE_AUTH_CLIENT_ID: string
      GOOGLE_AUTH_CLIENT_SECRET: string
      TWITTER_AUTH_CALLBACK_URL: string
      TWITTER_AUTH_CLIENT_ID: string
      TWITTER_AUTH_CLIENT_SECRET: string
    }
  }
  request: Request
}

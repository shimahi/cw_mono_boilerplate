export * from '@remix-run/cloudflare'
declare module '@remix-run/cloudflare' {
  export interface AppLoadContext {
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
}

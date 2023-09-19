export * from './fixtures'
export const domainArgsMock = {
  context: {
    env: {
      DB: undefined as unknown as D1Database,
      SESSION_KV: undefined as unknown as KVNamespace,

      NODE_ENV: undefined as unknown as string,
      SESSION_SECRET: undefined as unknown as string,
      GOOGLE_AUTH_CALLBACK_URL: undefined as unknown as string,
      GOOGLE_AUTH_CLIENT_ID: undefined as unknown as string,
      GOOGLE_AUTH_CLIENT_SECRET: undefined as unknown as string,
      TWITTER_AUTH_CALLBACK_URL: undefined as unknown as string,
      TWITTER_AUTH_CLIENT_ID: undefined as unknown as string,
      TWITTER_AUTH_CLIENT_SECRET: undefined as unknown as string,
    },
  },
  request: {} as Request,
}

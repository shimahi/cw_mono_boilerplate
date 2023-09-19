import { createCookie, createWorkersKVSessionStorage } from '@remix-run/cloudflare'
import type { AuthenticateOptions } from 'remix-auth'
import { Authenticator } from 'remix-auth'
import { GoogleStrategy } from 'remix-auth-google'
import { Twitter2Strategy } from 'remix-auth-twitter'

import type { User } from '..'

type AuthUser = Pick<User, 'profileId' | 'provider'>

type TwitterProfile = { id: string; name: string; username: string; profile_image_url: string }

export class AuthService {
  private readonly context
  private readonly request
  private readonly authenticator

  constructor({ context, request }: DomainArgs) {
    this.context = context
    this.request = request
    this.authenticator = this.createAuthenticator()
  }

  /**
   * cookieとKVに保存された認証情報をもとにAuthenticatorインスタンスを作成して返す。
   */
  private createAuthenticator() {
    const cookie = createCookie('__session__', {
      secrets: [this.context.env.SESSION_SECRET],
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      secure: this.context.env.NODE_ENV == 'production',
    })

    const sessionStorage = createWorkersKVSessionStorage({
      kv: this.context.env.SESSION_KV,
      cookie,
    })

    return new Authenticator<AuthUser>(sessionStorage)
  }

  /**
   * 現在のユーザー認証情報を取得する。
   * リクエストのcookie情報とKVを照合し、認証ユーザー情報を返す。
   */
  async getAuthUser() {
    return this.authenticator.isAuthenticated(this.request)
  }

  /**
   * ログアウト処理
   * @param {{redirectTo: string}} options ログアウト後のリダイレクト先をredirectToパラメータに指定する。
   */
  async logout(options: { redirectTo: string }) {
    return this.authenticator.logout(this.request, options)
  }

  /**
   * Googleアカウントで認証を行う
   * @param callback 認証時に実行されるコールバック関数。ユーザーの作成やユーザー情報の取得を行う。
   * @param options リダイレクトURLの指定
   */
  async authenticateWithGoogle(
    callback: ConstructorArgs<typeof GoogleStrategy<AuthUser>>[1],
    options: Pick<AuthenticateOptions, 'successRedirect' | 'failureRedirect' | 'throwOnError' | 'context'>,
  ) {
    const googleAuth = new GoogleStrategy<AuthUser>(
      {
        clientID: this.context.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: this.context.env.GOOGLE_AUTH_CLIENT_SECRET,
        callbackURL: this.context.env.GOOGLE_AUTH_CALLBACK_URL,
      },
      callback,
    )
    this.authenticator.use(googleAuth, 'google')

    return this.authenticator.authenticate('google', this.request, options)
  }

  /**
   * Twitterアカウントで認証を行う
   * @param callback 認証時に実行されるコールバック関数。ユーザーの作成やユーザー情報の取得を行う。
   * @param options リダイレクトURLの指定
   */
  async authenticateWithTwitter(
    callback: ConstructorArgs<typeof Twitter2Strategy<AuthUser>>[1],
    options: Pick<AuthenticateOptions, 'successRedirect' | 'failureRedirect' | 'throwOnError' | 'context'>,
  ) {
    const twitterAuth = new Twitter2Strategy<AuthUser>(
      {
        clientID: this.context.env.TWITTER_AUTH_CLIENT_ID,
        clientSecret: this.context.env.TWITTER_AUTH_CLIENT_SECRET,
        callbackURL: this.context.env.TWITTER_AUTH_CALLBACK_URL,
        scopes: ['users.read', 'tweet.read'],
      },
      callback,
    )
    this.authenticator.use(twitterAuth, 'twitter')

    return this.authenticator.authenticate('twitter', this.request, options)
  }

  /**
   * Twitter APIからアクセストークンに適合するアカウント情報を取得する
   * @param accessToken Twitter認証で取得したユーザーのアクセストークン
   */
  async getTwitterProfile(accessToken: string) {
    /** Twitterログインユーザー情報を取得するエンドポイント https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me */
    const apiUrl = 'https://api.twitter.com/2/users/me?user.fields=profile_image_url'

    const data = (
      await ((): Promise<{ data: TwitterProfile }> =>
        fetch(apiUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }).then(async (res) => res.json()))()
    ).data

    // データをOAuth2Profile型にキャストする
    return {
      provider: 'twitter',
      id: data.id,
      displayName: data.name,
      photos: [{ value: data.profile_image_url }],
    }
  }
}

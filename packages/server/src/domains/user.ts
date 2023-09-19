import type { AuthenticateOptions } from 'remix-auth'
import { parse } from 'valibot'

import { UserRepository } from '../repositories/user'
import { AuthService } from '../services/auth'
import { nullishToNull } from '../utils'
import type { Validator } from '../validators'
import { validator } from '../validators'

export class UserDomain {
  private readonly repository
  private readonly authService

  constructor(domainArgs: DomainArgs) {
    this.repository = new UserRepository(domainArgs)
    this.authService = new AuthService(domainArgs)
  }

  /**
   * 現在ログインしている操作ユーザーの情報を返す。
   */
  async currentUser() {
    const authUser = await this.authService.getAuthUser()

    return authUser ? this.repository.getUserByProfileId(authUser.profileId) : null
  }

  /**
   * ユーザーを取得する
   * @param id ユーザーID
   */
  async getUser(id: string) {
    return this.repository.getUser(id)
  }

  /**
   * ユーザーをすべて取得する
   */
  async getUsers() {
    return this.repository.getUsers()
  }

  /**
   * ユーザーの総数を取得する
   */
  async getUsersCount() {
    return this.repository.getUsersCount()
  }

  /**
   * ユーザー情報を更新する
   */
  async updateUser(input: Validator['user']['update']) {
    // 認証チェック
    const user = await this.currentUser()
    if (!user) throw new Error('ログインしていません。')

    // バリデーションチェック
    parse(validator.user.update, input)

    return this.repository.updateUser(
      user.id,
      nullishToNull({
        // 初回プロフィール更新フラグをONにする
        isProfileRegistered: true,
        ...input,
      }),
    )
  }

  /**
   * Googleアカウントでログインする。新規の場合はユーザーを作成する。
   * @param {AuthenticateOptions} option 認証成功・失敗時のリダイレクト先をsuccessRedirect・failureRedirectで指定する。
   */
  async loginWithGoogle(
    options: Pick<AuthenticateOptions, 'successRedirect' | 'failureRedirect' | 'throwOnError' | 'context'>,
  ) {
    return this.authService.authenticateWithGoogle(async ({ profile }) => {
      if (!profile || !profile.id) throw new Error('認証情報の取得に失敗しました。')

      // アカウント情報からユーザーを取得/作成する
      return this.repository.findOrCreateUser(profile)
    }, options)
  }

  /**
   * Twitterアカウントでログインする。新規の場合はユーザーを作成する。
   * @param {AuthenticateOptions} option 認証成功・失敗時のリダイレクト先をsuccessRedirect・failureRedirectで指定する。
   */
  async loginWithTwitter(
    options: Pick<AuthenticateOptions, 'successRedirect' | 'failureRedirect' | 'throwOnError' | 'context'>,
  ) {
    return this.authService.authenticateWithTwitter(async ({ accessToken }) => {
      if (!accessToken) throw new Error('アカウント認証に失敗しました。')
      // 取得したアクセストークンからアカウント情報を取得する
      const profile = await this.authService.getTwitterProfile(accessToken)

      if (!profile || !profile.id) throw new Error('アカウント情報の取得に失敗しました。')

      // アカウント情報からユーザーを取得/作成する
      return this.repository.findOrCreateUser(profile)
    }, options)
  }

  /**
   * ログアウト処理
   * @param {Request} request リクエスト情報
   * @param {{redirectTo: string}} options ログアウト後のリダイレクト先をredirectToパラメータに指定する。
   */
  logout(options: { redirectTo: string }) {
    return this.authService.logout(options)
  }
}

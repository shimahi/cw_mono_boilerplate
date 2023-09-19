import type { DataFunctionArgs } from '@remix-run/cloudflare'
import { redirect } from '@remix-run/cloudflare'
import { UserDomain } from 'server'

/**
 * @description
 * Google認証を行うためのAPIエンドポイント
 * remix-authの内部処理のためparseRequestが使えないため、actionのエンドポイントを独自で用意している。
 */
export const action = async (args: DataFunctionArgs) => {
  const userDomain = new UserDomain(args)

  return userDomain.loginWithGoogle({
    successRedirect: '/',
    failureRedirect: '/',
  })
}

export const loader = () => redirect('/')

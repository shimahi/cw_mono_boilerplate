import type { DataFunctionArgs } from '@remix-run/cloudflare'
import { UserDomain } from 'server'

/**
 * Twitter認証後のリダイレクトURL
 */
export const loader = async (LoaderArgs: DataFunctionArgs) => {
  const userDomain = new UserDomain(LoaderArgs)

  return await userDomain.loginWithTwitter({
    successRedirect: '/',
    failureRedirect: '/',
  })
}

import type { DataFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { UserDomain } from 'server'

import { createAction, createActions } from '@/core/architecture/server'
import type { Validator } from '@/core/form'

export type Loader = typeof loader
export type Action = typeof actions
export const action = async (args: DataFunctionArgs) => createAction(args, actions)

export const loader = async (args: DataFunctionArgs) => {
  const userDomain = new UserDomain(args)
  const currentUser = await userDomain.currentUser()

  return json({
    currentUser: currentUser,
    env: {
      // フロント側で使用してよいenvのみここに書く
      NODE_ENV: args.context.env.NODE_ENV,
    },
  })
}

const actions = createActions({
  async logout(args) {
    const userDomain = new UserDomain(args)

    return userDomain.logout({
      redirectTo: '/',
    })
  },
  async updateUser(args, payload: { inputs: Validator['user']['update'] }) {
    const userDomain = new UserDomain(args)

    return userDomain.updateUser(payload.inputs)
  },
})

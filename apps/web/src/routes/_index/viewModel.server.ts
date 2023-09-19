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

  return json({
    users: await userDomain.getUsers(),
    usersCount: await userDomain.getUsersCount(),
  })
}

export const actions = createActions({
  async updateUser(args, payload: { inputs: Validator['user']['update'] }) {
    const userDomain = new UserDomain(args)

    return userDomain.updateUser(payload.inputs)
  },
})

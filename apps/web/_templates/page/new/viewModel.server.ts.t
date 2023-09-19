---
to: src/routes/<%= name %>/viewModel.server.ts
unless_exists: true
---
import type { DataFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'

import { createAction, createActions } from '@/core/architecture/server'

export type Loader = typeof loader
export type Action = typeof actions
export const action = async (args: DataFunctionArgs) => createAction(args, actions)

export const loader = async (args: DataFunctionArgs) => {
  return json({ message: 'Hello Wolrd!' })
}

export const actions = createActions({
  greet(_, payload: { name: string }) {
    return json({ status: 'ok', message: `Hello, ${payload.name}!` })
  },
})

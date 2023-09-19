---
to: src/routes/<%= name %>/viewModel.ts
unless_exists: true
---
import type { Data, Mutation } from '@/core/architecture/client'
import { useViewModelContext } from '@/core/architecture/viewModel'

import type { Action, Loader } from './viewModel.server'

export const viewModel = (data: Data<Loader>, { mutate }: Mutation<Action>) => {
  return {
    state: {
      message: data.message,
    },
    dispatch: {
      async greet () {
        mutate({
          type: 'greet',
          payload: {
            name: 'Alice!',
          },
        })
      },
    },
  }
}

export const useViewModel = () => useViewModelContext<typeof viewModel>()

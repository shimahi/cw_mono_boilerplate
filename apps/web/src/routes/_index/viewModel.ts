import { useToast } from '@/components/ui'
import type { Data, Mutation } from '@/core/architecture/client'
import { useViewModelContext } from '@/core/architecture/viewModel'

import type { Action, Loader } from './viewModel.server'

export const viewModel = (data: Data<Loader>, { mutate }: Mutation<Action>) => {
  const { toast } = useToast()

  return {
    state: {
      users: data.users,
      userCount: data.usersCount,
    },
    dispatch: {
      async updateUser(inputs: Parameters<Action['updateUser']>[1]['inputs']) {
        return mutate({
          type: 'updateUser',
          payload: { inputs },
        }).catch((error) => {
          toast({
            variant: 'destructive',
            title: 'エラーが発生しました。',
            description: error.message,
          })

          throw error
        })
      },
    },
  }
}

export const useViewModel = () => useViewModelContext<typeof viewModel>()

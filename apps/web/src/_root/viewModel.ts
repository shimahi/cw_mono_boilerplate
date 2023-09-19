import { useToast } from '@/components/ui'
import type { Data, Mutation } from '@/core/architecture/client'
import { useRootViewModelContext } from '@/core/architecture/viewModel.root'
import { useAppTheme } from '@/core/theme'

import type { Action, Loader } from './viewModel.server'

export const viewModel = (data: Data<Loader>, { mutate }: Mutation<Action>) => {
  const { theme, toggleColorMode } = useAppTheme()
  const { toast } = useToast()

  return {
    currentUser: data.currentUser,
    env: data.env,
    theme,
    toggleColorMode,
    async loginWithGoogle() {
      mutate(null, {
        action: '/auth/google/action',
      })
    },
    async loginWithTwitter() {
      mutate(null, {
        action: '/auth/twitter/action',
      })
    },
    async logout() {
      mutate({ type: 'logout' })
    },
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
      })
    },
  }
}

export const useRootViewModel = () => useRootViewModelContext<typeof viewModel>()

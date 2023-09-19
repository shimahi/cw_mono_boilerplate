import { useLoaderData } from '@remix-run/react'
import type { FC } from 'react'
import { createContext, useContext } from 'react'

import { useMutation } from './client'

type RootViewModel = unknown
type ContextType<T extends RootViewModel> = T

const Context = createContext<RootViewModel>({})

/**
 * useRootViewModelを使えるようにするフック
 * rootで設定したviewModelに対して、templateからcontextを用いてアクセスできるようにする
 *
 * @param viewModel Rootの状態管理オブジェクト
 */
export const useRootViewModelContext = <T extends (...args: any[]) => any>() =>
  useContext(Context) as ContextType<ReturnType<T>>

/**
 * Rootのテンプレートを Context Provider でラップし、
 * コンポーネント内でuseRootViewModelを通してデータを使用できるようにするためのハイドレーションを行う。
 * @param RootTemplate Rootテンプレートのコンポーネント
 * @param viewModel loaderデータを引数に、state, dispatch を返すコールバック関数
 *
 * @returns JSX.Element
 */
export const hydrateRootViewModel = (
  RootTemplate: FC,
  viewModel: (data: ReturnType<typeof useLoaderData<unknown>>, mutation: ReturnType<typeof useMutation>) => unknown,
) => {
  const data = useLoaderData<unknown>()
  const mutation = useMutation()

  return (
    <Context.Provider value={viewModel(data, mutation)}>
      <RootTemplate />
    </Context.Provider>
  )
}

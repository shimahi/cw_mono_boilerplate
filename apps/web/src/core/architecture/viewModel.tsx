import { useLoaderData } from '@remix-run/react'
import type { FC } from 'react'
import { createContext, useContext } from 'react'

import type { LayoutType } from '@/_root/layouts'
import { Layout } from '@/_root/layouts'

import { useMutation } from './client'

type ViewModel = { state: unknown; dispatch: unknown }
type ContextType<T extends ViewModel> = T

const Context = createContext<ViewModel>({
  state: {},
  dispatch: {},
})

/**
 * useViewModelを使えるようにするフック
 * 各ページで設定したviewModelに対して、templateからcontextを用いてアクセスできるようにする
 * @param viewModel ページの状態管理オブジェクト
 */
export const useViewModelContext = <T extends (...args: any[]) => any>() =>
  useContext(Context) as ContextType<ReturnType<T>>
/**
 * hydrateViewModel
 * ページ(routes)ごとのテンプレートを Context Provider でラップし、
 * コンポーネント内で useViewModel を通してデータを使用できるようにするためのハイドレーションを行う。
 * @param Template ページテンプレートのコンポーネント
 * @param viewModel loaderデータを引数に、state, dispatch を返すコールバック関数
 * @param option
 *  - {LayoutType} layout ページのレイアウトを指定する
 *
 * @returns JSX.Element
 */
export const hydrateViewModel = (
  Template: FC,
  viewModel: (
    loaderData: ReturnType<typeof useLoaderData<unknown>>,
    mutation: ReturnType<typeof useMutation>,
  ) => {
    state: unknown
    dispatch: unknown
  },
  option?: {
    layout?: LayoutType
  },
) => {
  const loaderData = useLoaderData<unknown>()
  const mutation = useMutation()

  return (
    <Context.Provider value={viewModel(loaderData, mutation)}>
      <Layout layoutType={option?.layout ?? 'none'}>
        <Template />
      </Layout>
    </Context.Provider>
  )
}

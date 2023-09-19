import type { FC, PropsWithChildren } from 'react'

import { BasicLayout } from './BasicLayout'

export type LayoutType = 'basic' | 'none'

/**
 * 画面のレイアウトを指定する。
 * routesでハイドレーションを行う際にレイアウトを指定することで、指定したレイアウトでページをラップする。
 * cf @/core/architecture/viewModel.tsx hydrateViewModel
 *
 * @props layoutType ページのレイアウトを指定する。基本は"none"
 */
export const Layout: FC<
  PropsWithChildren<{
    layoutType: LayoutType
  }>
> = ({ children, layoutType }) => {
  switch (layoutType) {
    case 'basic':
      return <BasicLayout>{children}</BasicLayout>
    case 'none':
    default:
      return <>{children}</>
  }
}

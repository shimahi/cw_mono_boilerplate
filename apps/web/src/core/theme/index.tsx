import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

export const initialTheme = {
  name: 'default',
  colorMode: 'light',
} as ThemeType

export type ThemeType = {
  name: 'default'
  colorMode: 'light' | 'dark'
}

const Context = createContext<[ThemeType, Dispatch<SetStateAction<ThemeType>>]>([initialTheme, () => {}])

const useContextFunc = () => useContext(Context)

/**
 * @description
 * アプリのテーマやカラーモードを取得・更新するカスタムフック
 */
export const useAppTheme = () => {
  const [theme, setTheme] = useContextFunc()

  const toggleColorMode = () =>
    setTheme((state) => ({
      name: 'default',
      colorMode: state.colorMode === 'light' ? 'dark' : 'light',
    }))

  useEffect(() => {
    if (!(window && document)) return
    /**
     * @description
     * テーマが変更された時にhtmlタグのclassNameを変更する
     * cf _documnt.page.tsx
     */
    document?.querySelector('html')?.setAttribute('data-theme', theme.name)
    document?.querySelector('html')?.setAttribute('data-color-mode', theme.colorMode)
  }, [theme])

  return { theme, toggleColorMode }
}

export const AppThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  return <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
}

import * as ToolbarPrimitive from '@radix-ui/react-toolbar'

import { styled } from '@/styled-system/jsx'
import type { SystemStyleObject } from '@/styled-system/types'

const itemStyles: SystemStyleObject = {
  flex: '0 0 auto',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  _hover: { backgroundColor: 'accentAlpha', color: 'accentForeground' },
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'focus',
    outlineOffset: '2px',
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
}

/**
 * @description
 * ボタン、トグルグループ、ドロップダウンメニューなどのセットをグループ化するためのコンテナ
 * https://www.radix-ui.com/docs/primitives/components/toolbar
 */
export const Toolbar = {
  Root: styled(ToolbarPrimitive.Root, {
    base: {
      display: 'flex',
      padding: 10,
      width: '100%',
      minWidth: 'max-content',
      borderRadius: 6,
      backgroundColor: 'background',
    },
  }),
  Separator: styled(ToolbarPrimitive.Separator, {
    base: {
      width: 1,
      backgroundColor: 'accent',
      mx: '10px',
    },
  }),
  Button: styled(ToolbarPrimitive.Button, {
    base: {
      ...itemStyles,
      px: '12px',
      backgroundColor: 'primary',
      borderColor: 'primary',
      color: 'primaryForeground',
      _hover: {
        backgroundColor: 'primaryAlpha',
        borderColor: 'primaryAlpha',
      },
    },
  }),
  Link: styled(ToolbarPrimitive.Link, {
    base: {
      ...itemStyles,
      backgroundColor: 'transparent',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      _hover: {
        backgroundColor: 'none',
        color: 'primary',
        cursor: 'pointer',
      },
    },
  }),
  ToggleGroup: styled(ToolbarPrimitive.ToggleGroup, {
    base: {
      display: 'inline-flex',
      borderRadius: 4,
    },
  }),
  ToggleItem: styled(ToolbarPrimitive.ToggleItem, {
    base: {
      ...itemStyles,
      boxShadow: '0',
      backgroundColor: 'white',
      marginLeft: 2,
      '&:first-child': { marginLeft: 0 },
      '&[data-state=on]': {
        backgroundColor: 'accent',
        color: 'accentForeground',
      },
    },
  }),
}

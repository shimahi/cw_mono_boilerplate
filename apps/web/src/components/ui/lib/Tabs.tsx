import * as TabsPrimitive from '@radix-ui/react-tabs'

import { styled } from '@/styled-system/jsx'

/**
 * @description
 * 複数タブで表示する要素
 * https://www.radix-ui.com/docs/primitives/components/tabs
 */
export const Tabs = {
  Root: styled(TabsPrimitive.Root),
  List: styled(TabsPrimitive.List, {
    base: {
      display: 'inline-flex',
      height: '40px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'md',
      backgroundColor: 'muted',
      color: 'mutedForeground',
      padding: '4px',
    },
  }),
  Trigger: styled(TabsPrimitive.Trigger, {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      borderRadius: 'sm',
      px: '12px',
      py: '6px',
      fontSize: 'sm',
      fontWeight: 'medium',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '150ms',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      '&[data-state="active"]': {
        backgroundColor: 'background',
        color: 'foreground',
        boxShadow: 'sm',
      },
    },
  }),
  Content: styled(TabsPrimitive.Content, {
    base: {
      marginTop: '8px',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
    },
  }),
}

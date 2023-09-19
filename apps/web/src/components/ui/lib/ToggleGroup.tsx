import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { styled } from '@/styled-system/jsx'

/**
 * @description
 * Toggleをグループ化したもの
 * https://www.radix-ui.com/docs/primitives/components/toggle-group
 */
export const ToggleGroup = {
  Root: styled(ToggleGroupPrimitive.Root, {
    base: {
      display: 'inline-flex',
    },
  }),
  Item: styled(ToggleGroupPrimitive.Item, {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'medium',
      transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '150ms',
      '&[data-state=on]': {
        backgroundColor: 'accent',
        color: 'accentForeground',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
      _hover: {
        backgroundColor: 'muted',
        color: 'mutedForeground',
        cursor: 'pointer',
      },
      '&:first-child': {
        marginLeft: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
      },
      '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
    },
    variants: {
      variant: {
        default: {
          backgroundColor: 'transparent',
        },
        outline: {
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: 'accent',
          _hover: {
            backgroundColor: 'accent',
            color: 'accentForeground',
          },
        },
      },
      size: {
        default: {
          height: '40px',
          px: '12px',
        },
        sm: {
          height: '36px',
          px: '10px',
        },
        lg: {
          height: '44px',
          px: '20px',
        },
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }),
}

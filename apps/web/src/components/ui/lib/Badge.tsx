import { styled } from '@/styled-system/jsx'

/**
 * @description
 * タグなど表示するバッジ
 * https://ui.shadcn.com/docs/components/badge
 */
export const Badge = styled('div', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'accent',
    borderRadius: '9999px',
    px: '10px',
    py: '2px',
    fontSize: 'xs',
    lineHeight: 1.5,
    fontWeight: 'semibold',
    transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '150ms',
    _focus: {
      outline: '2px solid',
      outlineColor: 'focus',
      outlineOffset: '2px',
    },
  },

  variants: {
    variant: {
      default: {
        backgroundColor: 'primary',
        color: 'primaryForeground',
        borderColor: 'transparent',
        _hover: {
          backgroundColor: 'primaryAlpha',
        },
      },
      secondary: {
        backgroundColor: 'secondary',
        color: 'secondaryForeground',
        borderColor: 'transparent!important',
        _hover: {
          backgroundColor: 'secondaryAlpha',
        },
      },
      destructive: {
        backgroundColor: 'destructive',
        color: 'destructiveForeground',
        borderColor: 'transparent',
        _hover: {
          backgroundColor: 'destructiveAlpha',
        },
      },
      outline: {
        color: 'foreground',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

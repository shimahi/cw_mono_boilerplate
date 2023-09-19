/**
 * @description
 * ピュアなHTML要素をStyledで拡張したコンポーネントを定義する
 */
import * as LabelPrimitive from '@radix-ui/react-label'

import { styled } from '@/styled-system/jsx'

export const Text = styled('p')
export const Span = styled('span')
export const Button = styled('button', {
  base: {
    d: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    br: 'sm',
    fz: 'sm',
    fw: 'bold',
    miw: 10,
    td: 'none',
    bw: 0.5,
    bs: 'solid',
    ta: 'center',
    transition: 'transform 0.1s ease-in-out',
    cursor: 'pointer',
    outline: 'none',
    md: {
      _focusVisible: {
        outline: '1px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
    },
    _disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
      userSelect: 'none',
    },
    _active: {
      transform: 'scale(0.96)',
    },
  },
  variants: {
    variant: {
      default: {
        bgc: 'primary',
        bc: 'primary',
        c: 'primaryForeground',
        _hover: {
          bgc: 'primaryAlpha',
          bc: 'primaryAlpha',
        },
      },
      destructive: {
        bgc: 'destructive',
        bc: 'destructive',
        c: 'destructiveForeground',
        _hover: {
          bgc: 'destructiveAlpha',
          bc: 'destructiveAlpha',
        },
      },
      secondary: {
        bgc: 'secondary',
        bc: 'secondary',
        c: 'secondaryForeground',
        _hover: {
          bgc: 'secondaryAlpha',
          bc: 'secondaryAlpha',
        },
      },
      outline: {
        bc: 'accent',
        c: 'foreground',
        _hover: {
          c: 'accentForeground',
          bc: 'accent',
          bgc: 'accent',
        },
      },
      ghost: {
        bc: 'transparent',
        c: 'foreground',
        _hover: {
          bgc: 'accent',
          bc: 'accent',
          c: 'accentForeground',
        },
      },
      vanilla: {
        c: 'foreground',
        minWidth: 'initial',
        minHeight: 'initial',
        padding: 'initial',
        width: 'initial',
        textDecoration: 'initial',
        d: 'block',
        justifyContent: 'initial',
        alignItems: 'initial',
        radius: 'initial',
        borderWidth: 'initial',
        borderStyle: 'initial',
        ta: 'center',
        transition: 'initial',
        cursor: 'pointer',
      },
    },
    size: {
      default: {
        px: 4,
        py: 2,
        mih: 10,
      },
      sm: {
        px: 3,
        py: 1,
        mih: 9,
      },
      lg: {
        px: 8,
        py: 3,
        mih: 11,
      },
    },
  },
  defaultVariants: { size: 'default', variant: 'default' },
})
export const A = styled('a', {
  base: {
    _hover: {
      cursor: 'pointer',
    },
  },
})

export const Img = styled('img')
export const Form = styled('form')
export const Fieldset = styled('fieldset')
/**
 * ラベル要素はradixのコンポーネントを用いる
 * https://www.radix-ui.com/docs/primitives/components/label
 */
export const Label = styled(LabelPrimitive.Root, {
  base: {
    userSelect: 'none',
    fontSize: 'sm',
    fontWeight: 'medium',
    lineHeight: 'none',
  },
})
export const Input = styled('input', {
  base: {
    d: 'flex',
    h: 10,
    w: '100%',
    br: 'md',
    b: 'solid 1px',
    bc: 'accent',
    bgc: 'transparent',
    px: 3,
    py: 2,
    fz: 'sm',
    _file: { b: 'none', fz: 'medium' },
    _placeholder: {
      c: 'mutedForeground',
    },
    _focusVisible: {
      outline: '1px solid',
      outlineColor: 'focus',
      outlineOffset: '2px',
    },
    _disabled: { opacity: 0.5, cursor: 'not-allowed' },
  },
})
export const Textarea = styled('textarea', {
  base: {
    d: 'flex',
    h: 20,
    w: '100%',
    br: 'md',
    b: 'solid 1px',
    bc: 'accent',
    bgc: 'transparent',
    px: 4,
    py: 2,
    fz: 'sm',
    _placeholder: {
      c: 'mutedForeground',
    },
    _focusVisible: {
      outline: '1px solid',
      outlineColor: 'focus',
      outlineOffset: '2px',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
})
export const Table = styled('table')
export const Ul = styled('ul')
export const Li = styled('li')

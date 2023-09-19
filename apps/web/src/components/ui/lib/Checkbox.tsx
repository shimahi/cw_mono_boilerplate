import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const CheckboxPrimitiveRoot = styled(CheckboxPrimitive.Root)
const CheckboxPrimitiveIndicator = styled(CheckboxPrimitive.Indicator)

/**
 * @description
 * チェックボックスUI
 * https://www.radix-ui.com/docs/primitives/components/checkbox
 * https://ui.shadcn.com/docs/components/checkbox
 */
export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitiveRoot>
>(({ css, ...props }, ref) => (
  <CheckboxPrimitiveRoot
    ref={ref}
    css={{
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 'sm',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      _hover: { borderColor: 'primaryAlpha', cursor: 'pointer' },
      height: '16px',
      width: '16px',
      '&:active': {
        transform: 'scale(0.98)',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
        '& ~ label': {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
      },
      '&[data-state="checked"]': {
        color: 'primaryForeground',
        backgroundColor: 'primary',
        borderColor: 'primary',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
      ...css,
    }}
    {...props}
  >
    <CheckboxPrimitiveIndicator css={{ pt: '4px', '& > .lucide-check': { stroke: 'currentColor' } }}>
      <Check size="16px" />
    </CheckboxPrimitiveIndicator>
  </CheckboxPrimitiveRoot>
))

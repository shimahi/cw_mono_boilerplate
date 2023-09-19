import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const RadioGroupPrimitiveItem = styled(RadioGroupPrimitive.Item)
const RadioGroupPrimitiveIndicator = styled(RadioGroupPrimitive.Indicator)

/**
 * @description
 * radio要素のグループ
 * https://www.radix-ui.com/docs/primitives/components/radio-group
 */
export const RadioGroup = {
  Root: styled(RadioGroupPrimitive.Root, {
    base: {
      display: 'grid',
      gap: '8px',
    },
  }),
  Item: forwardRef<
    ElementRef<typeof RadioGroupPrimitiveItem>,
    ComponentPropsWithoutRef<typeof RadioGroupPrimitiveItem>
  >(({ css, ...props }, ref) => {
    return (
      <RadioGroupPrimitiveItem
        ref={ref}
        css={{
          display: 'grid',
          pi: 'center',
          height: '16px',
          width: '16px',
          borderRadius: '9999px',
          border: 'solid 1px',
          borderColor: 'primary',
          color: 'primary',
          _disabled: {
            cursor: 'not-allowed',
            opacity: 0.5,
          },
          _focusVisible: {
            outline: 'solid 2px',
            outlineColor: 'focus',
            outlineOffset: '2px',
          },
          ...css,
        }}
        {...props}
      >
        <RadioGroupPrimitiveIndicator
          css={{
            display: 'grid',
            pi: 'center',
            width: 'fit-content',
            height: 'fit-content',
            color: 'primary',
            '& > svg': {
              fill: 'currentColor',
              color: 'currentColor',
              m: 0,
              padding: 0,
            },
          }}
        >
          <Circle size="10px" />
        </RadioGroupPrimitiveIndicator>
      </RadioGroupPrimitiveItem>
    )
  }),
}

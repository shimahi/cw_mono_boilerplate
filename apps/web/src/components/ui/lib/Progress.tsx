import * as ProgressPrimitive from '@radix-ui/react-progress'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const ProgressPrimitiveRoot = styled(ProgressPrimitive.Root)
const ProgressPrimitiveIndicator = styled(ProgressPrimitive.Indicator)

/**
 * @description
 * プログレスバー
 * https://www.radix-ui.com/docs/primitives/components/progress
 */
export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof ProgressPrimitiveRoot>
>(({ value, css, ...props }, ref) => {
  return (
    <ProgressPrimitiveRoot
      ref={ref}
      css={{
        position: 'relative',
        height: '16px',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '9999px',
        backgroundColor: 'secondary',
        ...css,
      }}
      {...props}
    >
      <ProgressPrimitiveIndicator
        // pandaは動的スタイルを探知しないので、style propsでスタイルの依存を渡す
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
        }}
        css={{
          backgroundColor: 'primary',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      />
    </ProgressPrimitiveRoot>
  )
})

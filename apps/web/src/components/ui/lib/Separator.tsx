import * as SeparatorPrimitive from '@radix-ui/react-separator'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const SeparatorPrimitiveRoot = styled(SeparatorPrimitive.Root)

/**
 * @description
 * コンテンツの視覚的分離線
 * https://www.radix-ui.com/docs/primitives/components/separator
 */

export const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitiveRoot>
>(({ css, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitiveRoot
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    css={{
      flexShrink: 0,
      backgroundColor: 'accent',
      height: orientation === 'horizontal' ? '1px' : '100%',
      width: orientation === 'horizontal' ? '100%' : '1px',
      ...css,
    }}
    {...props}
  />
))

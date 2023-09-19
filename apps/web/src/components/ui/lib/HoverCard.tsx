import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const HoverCardPrimitiveContent = styled(HoverCardPrimitive.Content)

/**
 * @description
 * トリガーの上でマウスをホバーすると表示される情報カード
 * https://www.radix-ui.com/docs/primitives/components/hover-card
 */
export const HoverCard = {
  Root: styled(HoverCardPrimitive.Root),
  Trigger: styled(HoverCardPrimitive.Trigger),
  Content: forwardRef<
    ElementRef<typeof HoverCardPrimitiveContent>,
    ComponentPropsWithoutRef<typeof HoverCardPrimitiveContent>
  >(({ css, align = 'center', sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitiveContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      css={{
        zIndex: 50,
        width: '256px',
        borderRadius: 'md',
        border: 'solid 1px',
        borderColor: 'accent',
        backgroundColor: 'background',
        color: 'foreground',
        boxShadow: 'md',
        outline: 'none',
        transitionProperty: 'opacity, transform',
        '@media (prefers-reduced-motion: no-preference)': {
          '&[data-state="open"]': {
            animation: 'scaleIn 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
          },
          '&[data-state="closed"]': {
            animation: 'scaleOut 50ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
          },
        },
        ...css,
      }}
      {...props}
    />
  )),
}

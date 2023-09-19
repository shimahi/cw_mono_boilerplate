import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ComponentProps, ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const TooltipPrimitiveRoot = styled(TooltipPrimitive.Root, {})
const TooltipPrimitiveContent = styled(TooltipPrimitive.Content)
const TooltipPrimitiveArrow = styled(TooltipPrimitive.Arrow)

/**
 * @description
 * ホバー・フォーカス時に、その要素に関連する情報を表示するポップアップ
 * https://www.radix-ui.com/docs/primitives/components/tooltip
 */
export const Tooltip = {
  Root: (props: ComponentProps<typeof TooltipPrimitiveRoot>) => {
    return (
      <TooltipPrimitive.Provider>
        <TooltipPrimitiveRoot {...props} />
      </TooltipPrimitive.Provider>
    )
  },
  Trigger: styled(TooltipPrimitive.Trigger, {
    base: {
      _focus: {
        outline: '2px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
    },
  }),
  Content: forwardRef<
    ElementRef<typeof TooltipPrimitiveContent>,
    ComponentPropsWithoutRef<typeof TooltipPrimitiveContent>
  >(({ css, sideOffset = 4, children, ...props }, ref) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitiveContent
        ref={ref}
        sideOffset={sideOffset}
        css={{
          zIndex: 50,
          borderRadius: 'md',
          border: '1px solid',
          borderColor: 'accent',
          backgroundColor: 'background',
          color: 'foreground',
          boxShadow: 'md',
          fontSize: 'sm',
          px: '12px',
          py: '6px',
          '@media (prefers-reduced-motion: no-preference)': {
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform, opacity',
            '&[data-state="delayed-open"]': {
              '&[data-side="top"]': { animationName: 'slideDownAndFade' },
              '&[data-side="right"]': { animationName: 'slideLeftAndFade' },
              '&[data-side="bottom"]': { animationName: 'slideUpAndFade' },
              '&[data-side="left"]': { animationName: 'slideRightAndFade' },
            },
          },
          ...css,
        }}
        {...props}
      >
        {children}
        <TooltipPrimitiveArrow
          css={{
            fill: 'background',
            backgroundColor: 'background',
            borderRight: 'solid 1px',
            borderRightColor: 'accent',
            borderBottom: 'solid 1px',
            borderBottomColor: 'accent',
            transform: 'rotate(45deg)',
            width: '8px',
            height: '8px',
            marginTop: '-4px',
          }}
        />
      </TooltipPrimitiveContent>
    </TooltipPrimitive.Portal>
  )),
}

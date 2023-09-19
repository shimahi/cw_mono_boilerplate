import * as PopoverPrimitive from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const PopoverPrimitiveContent = styled(PopoverPrimitive.Content)
const PopoverPrimitiveArrow = styled(PopoverPrimitive.Arrow)
const PopoverPrimitiveClose = styled(PopoverPrimitive.Close)

/**
 * @description
 * クリックをトリガーに浮かんでくる要素
 * https://www.radix-ui.com/docs/primitives/components/popover
 */
export const Popover = {
  Root: styled(PopoverPrimitive.Root),
  Anchor: styled(PopoverPrimitive.Anchor),
  Trigger: styled(PopoverPrimitive.Trigger, {
    base: {
      _hover: {
        cursor: 'pointer',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'focus',
        outlineOffset: '2px',
      },
    },
  }),
  Content: forwardRef<
    ElementRef<typeof PopoverPrimitiveContent>,
    ComponentPropsWithoutRef<typeof PopoverPrimitiveContent>
  >(({ css, align = 'center', sideOffset = 4, children, ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitiveContent
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        css={{
          zIndex: 50,
          width: '288px',
          borderRadius: 'md',
          backgroundColor: 'background',
          color: 'foreground',
          border: '1px solid',
          borderColor: 'accent',
          boxShadow: 'md',
          outline: 'none',
          position: 'relative',
          '@media (prefers-reduced-motion: no-preference)': {
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform, opacity',
            '&[data-state="open"]': {
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
        <PopoverPrimitiveClose
          aria-label="Close"
          css={{
            fontFamily: 'inherit',
            borderRadius: '100%',
            height: '32px',
            width: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary',
            position: 'absolute',
            top: '8px',
            right: '8px',
            cursor: 'pointer',
            _hover: { backgroundColor: 'accent' },
            _focus: { outline: '2px solid', outlineColor: 'focus', outlineOffset: '2px' },
          }}
        >
          <X size="16px" />
        </PopoverPrimitiveClose>
        <PopoverPrimitiveArrow
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
      </PopoverPrimitiveContent>
    </PopoverPrimitive.Portal>
  )),
}

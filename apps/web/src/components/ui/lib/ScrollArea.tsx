import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const ScrollAreaPrimitiveRoot = styled(ScrollAreaPrimitive.Root)
const ScrollAreaPrimitiveViewport = styled(ScrollAreaPrimitive.Viewport)
const ScrollAreaPrimitiveCorner = styled(ScrollAreaPrimitive.Corner)
const ScrollAreaPrimitiveScrollAreaScrollbar = styled(ScrollAreaPrimitive.ScrollAreaScrollbar)
const ScrollAreaPrimitiveScrollAreaThumb = styled(ScrollAreaPrimitive.ScrollAreaThumb)

/**
 * @description
 * エリア内でスクロールを行い表示するコンテンツ
 * https://www.radix-ui.com/docs/primitives/components/scroll-area
 */
export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitiveRoot> & {
    orientation?: 'horizontal' | 'vertical'
  }
>(({ css, children, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitiveRoot
    ref={ref}
    css={{
      position: 'relative',
      overflow: 'hidden',
      ...css,
    }}
    {...props}
  >
    <ScrollAreaPrimitiveViewport
      css={{
        height: '100%',
        width: '100%',
        borderRadius: 'inherit',
      }}
    >
      {children}
    </ScrollAreaPrimitiveViewport>
    <ScrollAreaPrimitiveScrollAreaScrollbar
      orientation={orientation}
      css={{
        display: 'flex',
        touchAction: 'none',
        userSelect: 'none',
        transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        padding: '1px',
        ...(orientation === 'vertical'
          ? {
              height: '100%',
              width: '10px',
              borderLeft: '1px solid transparent',
            }
          : {
              height: '10px',
              borderTop: '1px solid transparent',
            }),
      }}
    >
      <ScrollAreaPrimitiveScrollAreaThumb
        css={{
          position: 'relative',
          flex: 1,
          backgroundColor: 'accent',
          borderRadius: '9999px',
        }}
      />
    </ScrollAreaPrimitiveScrollAreaScrollbar>
    <ScrollAreaPrimitiveCorner />
  </ScrollAreaPrimitiveRoot>
))

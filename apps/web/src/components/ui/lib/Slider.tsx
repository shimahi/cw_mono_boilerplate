import * as SliderPrimitive from '@radix-ui/react-slider'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const SliderPrimitiveRoot = styled(SliderPrimitive.Root)
const SliderPrimitiveTrack = styled(SliderPrimitive.Track)
const SliderPrimitiveRange = styled(SliderPrimitive.Range)
const SliderPrimitiveThumb = styled(SliderPrimitive.Thumb)

/**
 * @description
 * スライダー・シークバー
 * https://www.radix-ui.com/docs/primitives/components/slider
 */
export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof SliderPrimitiveRoot>
>(({ css, ...props }, ref) => (
  <SliderPrimitiveRoot
    ref={ref}
    css={{
      position: 'relative',
      display: 'flex',
      width: '100%',
      touchAction: 'none',
      userSelect: 'none',
      alignItems: 'center',
      ...css,
    }}
    {...props}
  >
    <SliderPrimitiveTrack
      css={{
        position: 'relative',
        height: '8px',
        width: '100%',
        flexGrow: 1,
        overflow: 'hidden',
        borderRadius: '9999px',
        backgroundColor: 'secondary',
      }}
    >
      <SliderPrimitiveRange
        css={{
          position: 'absolute',
          height: '100%',
          backgroundColor: 'primary',
        }}
      />
    </SliderPrimitiveTrack>
    <SliderPrimitiveThumb
      css={{
        display: 'block',
        height: '20px',
        width: '20px',
        borderRadius: '9999px',
        border: '2px solid',
        borderColor: 'primary',
        backgroundColor: 'background',
        cursor: 'pointer',
        transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        _focus: {
          outline: 'none',
        },
        _focusVisible: {
          outline: 'solid 2px',
          outlineColor: 'focus',
          outlineOffset: '2px',
        },
        _disabled: {
          pointerEvents: 'none',
          opacity: 0.5,
        },
      }}
    />
  </SliderPrimitiveRoot>
))

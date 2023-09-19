import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from '@/components/ui/layouts'
import { css as styledCSS } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import type { SystemStyleObject } from '@/styled-system/types'

const SelectPrimitiveTrigger = styled(SelectPrimitive.Trigger)
const SelectPrimitiveIcon = styled(SelectPrimitive.Icon)
const SelectPrimitiveViewport = styled(SelectPrimitive.Viewport)
const SelectPrimitiveItem = styled(SelectPrimitive.Item)

/**
 * @description
 * Select要素をスタイルしたもの
 * https://www.radix-ui.com/docs/primitives/components/select
 */
export const Select = {
  Root: styled(SelectPrimitive.Root),
  Group: styled(SelectPrimitive.Group),
  Value: styled(SelectPrimitive.Value),
  Trigger: forwardRef<
    ElementRef<typeof SelectPrimitiveTrigger>,
    ComponentPropsWithoutRef<typeof SelectPrimitiveTrigger>
  >(({ css, children, ...props }, ref) => (
    <SelectPrimitiveTrigger
      ref={ref}
      css={{
        display: 'flex',
        height: '40px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'between',
        borderRadius: 'md',
        border: '1px solid',
        borderColor: 'accent',
        backgroundColor: 'transparent',
        px: '12px',
        py: '8px',
        fontSize: 'sm',
        _hover: {
          cursor: 'pointer',
        },
        _placeholder: {
          color: 'mutedForeground',
        },
        _disabled: {
          cursor: 'not-allowed',
          opacity: 0.5,
        },
        _focus: {
          outline: '2px solid',
          outlineColor: 'focus',
          outlineOffset: '2px',
        },
        ...css,
      }}
      {...props}
    >
      {children}
      <SelectPrimitiveIcon asChild css={{ opacity: 0.5, marginLeft: 'auto' }}>
        <ChevronDown size="16px" />
      </SelectPrimitiveIcon>
    </SelectPrimitiveTrigger>
  )),
  Content: forwardRef<
    ElementRef<typeof SelectPrimitive.Content>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
      css?: SystemStyleObject
    }
  >(({ css, children, position = 'popper', ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        // Radix-UI Selectと position props がバッティングするため、ClassNameで対応
        position={position}
        className={styledCSS({
          pos: 'relative',
          zIndex: 50,
          miw: '128px',
          overflow: 'hidden',
          borderRadius: 'md',
          border: '1px solid',
          borderColor: 'accent',
          backgroundColor: 'background',
          color: 'foreground',
          boxShadow: 'md',
          transform: position === 'popper' ? 'translateY(4px)' : 'none',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'all',
            '&[data-state="open"]': { animation: `animateIn 200ms ease` },
            '&[data-state="closed"]': { animation: `animateOut 200ms ease` },
          },
          ...css,
        })}
        {...props}
      >
        <SelectPrimitiveViewport
          css={{
            padding: '4px',
            ...(position === 'popper'
              ? {
                  height: 'var(--radix-select-trigger-height)',
                  width: '100%',
                  miw: 'var(--radix-select-trigger-width)',
                }
              : {}),
          }}
        >
          {children}
        </SelectPrimitiveViewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )),
  Label: styled(SelectPrimitive.Label, {
    base: {
      py: '6px',
      paddingLeft: '32px',
      paddingRight: '8px',
      fontSize: 'sm',
      fontWeight: 'semibold',
    },
  }),
  Item: forwardRef<ElementRef<typeof SelectPrimitiveItem>, ComponentPropsWithoutRef<typeof SelectPrimitiveItem>>(
    ({ css, children, ...props }, ref) => (
      <SelectPrimitiveItem
        ref={ref}
        css={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          cursor: 'default',
          userSelect: 'none',
          alignItems: 'center',
          borderRadius: 'sm',
          py: '6px',
          paddingLeft: '32px',
          paddingRight: '8px',
          fontSize: 'sm',
          outline: 'none',
          _focus: {
            backgroundColor: 'accent',
            color: 'accentForeground',
          },
          '&[data-disabled]': {
            opacity: 0.5,
            pointerEvents: 'none',
          },
          ...css,
        }}
        {...props}
      >
        <Box
          as="span"
          css={{
            position: 'absolute',
            left: '8px',
            display: 'flex',
            height: '14px',
            width: '14px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SelectPrimitive.ItemIndicator>
            <Check size="16px" />
          </SelectPrimitive.ItemIndicator>
        </Box>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitiveItem>
    ),
  ),
  Separator: styled(SelectPrimitive.Separator, {
    base: {
      mx: '-4px',
      my: '4px',
      height: '1px',
      backgroundColor: 'muted',
    },
  }),
}

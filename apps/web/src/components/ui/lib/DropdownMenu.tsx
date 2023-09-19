import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { Box } from '@/components/ui/layouts'
import { styled } from '@/styled-system/jsx'

const DropdownMenuPrimitivePortal = styled(DropdownMenuPrimitive.Portal)
const DropdownMenuPrimitiveContent = styled(DropdownMenuPrimitive.Content)
const DropdownMenuPrimitiveSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)
const DropdownMenuPrimitiveItem = styled(DropdownMenuPrimitive.Item)
const DropdownMenuPrimitiveCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)
const DropdownMenuPrimitiveRadioItem = styled(DropdownMenuPrimitive.RadioItem)
const DropdownMenuPrimitiveLabel = styled(DropdownMenuPrimitive.Label)
const DropdownMenuPrimitiveSubContent = styled(DropdownMenuPrimitive.SubContent)

/**
 * @description
 * ドロップダウンメニュー
 * クリックをトリガーに表示されるメニュー
 * https://www.radix-ui.com/docs/primitives/components/dropdown-menu
 */
export const DropdownMenu = {
  Root: styled(DropdownMenuPrimitive.Root),
  Trigger: styled(DropdownMenuPrimitive.Trigger),
  Content: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveContent>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveContent>
  >(({ css, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitivePortal>
      <DropdownMenuPrimitiveContent
        ref={ref}
        sideOffset={sideOffset}
        css={{
          zIndex: 50,
          miw: '128px',
          overflow: 'hidden',
          borderRadius: 'md',
          padding: '4px',
          backgroundColor: 'background',
          color: 'foreground',
          boxShadow: 'md',
          '@media (prefers-reduced-motion: no-preference)': {
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            animationFillMode: 'forwards',
            willChange: 'transform, opacity',
            '&[data-state="open"]': {
              '&[data-side="top"]': {
                animationName: 'fadeInUp',
              },
              '&[data-side="right"]': {
                animationName: 'fadeInRight',
              },
              '&[data-side="bottom"]': {
                animationName: 'fadeInDown',
              },
              '&[data-side="left"]': {
                animationName: 'fadeInLeft',
              },
            },
          },
          ...css,
        }}
        {...props}
      />
    </DropdownMenuPrimitivePortal>
  )),
  Item: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveItem>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveItem> & {
      inset?: boolean
    }
  >(({ css, inset, ...props }, ref) => (
    <DropdownMenuPrimitiveItem
      ref={ref}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: inset ? '32px' : '8px',
        fontSize: 'xs',
        outline: 'none',
        transition: 'background-color 100ms ease, color 100ms ease',
        '&[data-disabled]': {
          pointerEvents: 'none',
          opacity: 0.5,
        },
        '&[data-highlighted]': {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        ...css,
      }}
      {...props}
    />
  )),
  CheckboxItem: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveCheckboxItem>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveCheckboxItem>
  >(({ css, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitiveCheckboxItem
      ref={ref}
      checked={!!checked}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'sm',
        py: '6px',
        paddingLeft: '32px',
        paddingRight: '8px',
        fontSize: 'xs',
        outline: 'none',
        transition: 'background-color 100ms ease, color 100ms ease',
        _focus: {
          borderColor: 'accent',
          color: 'accentForeground',
        },
        '&[data-disabled]': {
          pointerEvents: 'none',
          opacity: 0.5,
        },
        '&[data-highlighted]': {
          backgroundColor: 'accent',
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
        <DropdownMenuPrimitive.ItemIndicator>
          <Check size="16px" />
        </DropdownMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </DropdownMenuPrimitiveCheckboxItem>
  )),
  RadioItem: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveRadioItem>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveRadioItem>
  >(({ css, children, ...props }, ref) => (
    <DropdownMenuPrimitiveRadioItem
      ref={ref}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'sm',
        py: '6px',
        paddingLeft: '32px',
        paddingRight: '8px',
        fontSize: 'xs',
        outline: 'none',
        transition: 'background-color 100ms ease, color 100ms ease',
        '&[data-disabled]': {
          pointerEvents: 'none',
          opacity: 0.5,
        },
        '&[data-highlighted]': {
          backgroundColor: 'accent',
          color: 'accentForeground',
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
          '& .circle': {
            fill: 'currentColor',
          },
        }}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle size="8px" className="circle" />
        </DropdownMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </DropdownMenuPrimitiveRadioItem>
  )),
  Label: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveLabel>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveLabel> & {
      inset?: boolean
    }
  >(({ css, inset, ...props }, ref) => (
    <DropdownMenuPrimitiveLabel
      ref={ref}
      css={{
        py: '6px',
        paddingRight: '8px',
        paddingLeft: inset ? '32px' : '8px',
        fontSize: 'xs',
        fontWeight: 'semibold',
        ...css,
      }}
      {...props}
    />
  )),
  Separator: styled(DropdownMenuPrimitive.Separator, {
    base: {
      mx: '-4px',
      my: '4px',
      height: '1px',
      backgroundColor: 'accent',
    },
  }),
  Shortcut: styled('span', {
    base: {
      marginLeft: 'auto',
      fontSize: 'xs',
      lts: 'widest',
      opacity: 0.6,
    },
  }),
  Group: styled(DropdownMenuPrimitive.Group),
  Sub: styled(DropdownMenuPrimitive.Sub),
  SubContent: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveSubContent>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveSubContent>
  >(({ css, ...props }, ref) => (
    <DropdownMenuPrimitivePortal>
      <DropdownMenuPrimitiveSubContent
        ref={ref}
        css={{
          color: 'foreground',
          zIndex: 50,
          miw: '128px',
          overflow: 'hidden',
          borderRadius: 'sm',
          backgroundColor: 'background',
          padding: '4px',
          boxShadow: 'md',
          '@media (prefers-reduced-motion: no-preference)': {
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            animationFillMode: 'forwards',
            willChange: 'transform, opacity',
            '&[data-state="open"]': {
              '&[data-side="top"]': {
                animationName: 'fadeInUp',
              },
              '&[data-side="right"]': {
                animationName: 'fadeInRight',
              },
              '&[data-side="bottom"]': {
                animationName: 'fadeInDown',
              },
              '&[data-side="left"]': {
                animationName: 'fadeInLeft',
              },
            },
          },
          ...css,
        }}
        {...props}
      />
    </DropdownMenuPrimitivePortal>
  )),
  SubTrigger: forwardRef<
    ElementRef<typeof DropdownMenuPrimitiveSubTrigger>,
    ComponentPropsWithoutRef<typeof DropdownMenuPrimitiveSubTrigger> & {
      inset?: boolean
    }
  >(({ css, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitiveSubTrigger
      ref={ref}
      css={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: inset ? '32px' : '8px',
        fontSize: 'xs',
        outline: 'none',
        _focus: {
          backgroundColor: 'accent',
        },
        '&[data-state="open"]': {
          backgroundColor: 'accent',
        },
        '&[data-highlighted]': {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        '& .ChevronRight': {
          marginLeft: 'auto',
        },
        ...css,
      }}
      {...props}
    >
      {children}
      <ChevronRight size="16px" />
    </DropdownMenuPrimitiveSubTrigger>
  )),
  RadioGroup: styled(DropdownMenuPrimitive.RadioGroup),
}

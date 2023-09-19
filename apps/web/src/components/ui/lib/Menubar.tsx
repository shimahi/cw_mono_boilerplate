import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'
import { Box } from '@/components/ui/layouts'

const MenubarPrimitivePortal = styled(MenubarPrimitive.Portal)
const MenubarPrimitiveContent = styled(MenubarPrimitive.Content)
const MenubarPrimitiveLabel = styled(MenubarPrimitive.Label)
const MenubarPrimitiveItem = styled(MenubarPrimitive.Item)
const MenubarPrimitiveCheckboxItem = styled(MenubarPrimitive.CheckboxItem)
const MenubarPrimitiveRadioItem = styled(MenubarPrimitive.RadioItem)
const MenubarPrimitiveItemIndicator = styled(MenubarPrimitive.ItemIndicator)
const MenubarPrimitiveSubTrigger = styled(MenubarPrimitive.SubTrigger)

/**
 * @description
 * ヘッダー状のUIで、要素をクリックするとメニューが表示されるもの
 * https://www.radix-ui.com/docs/primitives/components/menubar
 */
export const Menubar = {
  Root: styled(MenubarPrimitive.Root, {
    base: {
      display: 'flex',
      height: '40px',
      alignItems: 'center',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'accent',
      backgroundColor: 'background',
      padding: '4px',
      '& > * + *': {
        marginLeft: '4px',
      },
    },
  }),
  Menu: styled(MenubarPrimitive.Menu),
  Trigger: styled(MenubarPrimitive.Trigger, {
    base: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none',
      alignItems: 'center',
      borderRadius: 'sm',
      px: '12px',
      py: '6px',
      fontSize: 'xs',
      fontWeight: 'medium',
      outline: 'none',
      _focus: {
        backgroundColor: 'accent',
        color: 'accentForeground',
      },
      '&[data-state="open"]': {
        backgroundColor: 'accent',
        color: 'accentForeground',
      },
    },
  }),
  SubTrigger: forwardRef<
    ElementRef<typeof MenubarPrimitiveSubTrigger>,
    ComponentPropsWithoutRef<typeof MenubarPrimitiveSubTrigger> & {
      inset?: boolean
    }
  >(({ css, inset, children, ...props }, ref) => (
    <MenubarPrimitiveSubTrigger
      ref={ref}
      css={{
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'sm',
        py: '6px',
        paddingRight: '8px',
        paddingLeft: inset ? '8' : '8px',
        fontSize: 'xs',
        outline: 'none',
        _focus: {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        '&[data-state="open"]': {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        '& .lucide-chevron-right': { marginLeft: 'auto' },
        ...css,
      }}
      {...props}
    >
      {children}
      <ChevronRight size="16px" />
    </MenubarPrimitiveSubTrigger>
  )),
  Sub: styled(MenubarPrimitive.Sub),
  SubContent: styled(MenubarPrimitive.SubContent, {
    base: {
      zIndex: 50,
      miw: '160px',
      borderRadius: 'md',
      border: '1px solid',
      borderColor: 'accent',
      backgroundColor: 'background',
      color: 'foreground',
      padding: '4px',
      position: 'absolute',
      top: 0,
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
    },
  }),
  Content: forwardRef<
    ElementRef<typeof MenubarPrimitiveContent>,
    ComponentPropsWithoutRef<typeof MenubarPrimitiveContent>
  >(({ css, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
    <MenubarPrimitivePortal>
      <MenubarPrimitiveContent
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        css={{
          zIndex: 50,
          miw: '384px',
          borderRadius: 'md',
          border: '1px solid',
          borderColor: 'accent',
          backgroundColor: 'background',
          color: 'foreground',
          padding: '4px',
          boxShadow: 'md',
          '@media (prefers-reduced-motion: no-preference)': {
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            animationFillMode: 'forwards',
            willChange: 'transform, opacity',
            animationName: 'fadeInUp',
          },
          ...css,
        }}
        {...props}
      />
    </MenubarPrimitivePortal>
  )),
  Item: forwardRef<
    ElementRef<typeof MenubarPrimitiveItem>,
    ComponentPropsWithoutRef<typeof MenubarPrimitiveItem> & {
      inset?: boolean
    }
  >(({ css, inset, ...props }, ref) => (
    <MenubarPrimitiveItem
      ref={ref}
      css={{
        position: 'relative',
        display: 'flex',
        cursor: 'default',
        userSelect: 'none',
        alignItems: 'center',
        borderRadius: 'sm',
        py: '6px',
        paddingLeft: inset ? '8' : '8px',
        paddingRight: '8px',
        fontSize: 'xs',
        outline: 'none',
        _focus: {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        '&[data-disabled]': {
          pointerEvents: 'none',
          opacity: '0.5',
        },
        ...css,
      }}
      {...props}
    />
  )),
  CheckboxItem: forwardRef<
    ElementRef<typeof MenubarPrimitiveCheckboxItem>,
    ComponentPropsWithoutRef<typeof MenubarPrimitiveCheckboxItem>
  >(({ css, children, checked, ...props }, ref) => (
    <MenubarPrimitiveCheckboxItem
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
        _focus: {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        '&[data-disabled]': {
          pointerEvents: 'none',
          opacity: '0.5',
        },
        ...css,
      }}
      {...props}
    >
      <>
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
          <MenubarPrimitiveItemIndicator>
            <Check size="12px" />
          </MenubarPrimitiveItemIndicator>
        </Box>
        {children}
      </>
    </MenubarPrimitiveCheckboxItem>
  )),
  RadioItem: forwardRef<
    ElementRef<typeof MenubarPrimitiveRadioItem>,
    ComponentPropsWithoutRef<typeof MenubarPrimitiveRadioItem>
  >(({ css, children, ...props }, ref) => (
    <MenubarPrimitiveRadioItem
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
        _focus: {
          backgroundColor: 'accent',
          color: 'accentForeground',
        },
        '&[data-disabled]': {
          pointerEvents: 'none',
          opacity: '0.5',
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
        <MenubarPrimitiveItemIndicator>
          <Circle size="12px" />
        </MenubarPrimitiveItemIndicator>
      </Box>
      {children}
    </MenubarPrimitiveRadioItem>
  )),
  Label: forwardRef<
    ElementRef<typeof MenubarPrimitiveLabel>,
    ComponentPropsWithoutRef<typeof MenubarPrimitiveLabel> & {
      inset?: boolean
    }
  >(({ css, inset, ...props }, ref) => (
    <MenubarPrimitiveLabel
      ref={ref}
      css={{
        paddingLeft: inset ? '8' : '8px',
        paddingRight: '8px',
        py: '6px',
        fontSize: 'xs',
        fontWeight: 'semibold',
        ...css,
      }}
      {...props}
    />
  )),
  Separator: styled(MenubarPrimitive.Separator, {
    base: {
      mx: '-4px',
      my: '4px',
      height: '1px',
      backgroundColor: 'muted',
    },
  }),
  Group: styled(MenubarPrimitive.Group),
  RadioGroup: styled(MenubarPrimitive.RadioGroup),
  Shortcut: styled('span', {
    base: {
      marginLeft: 'auto',
      fontSize: 'xs',
      lts: 'widest',
      color: 'mutedForeground',
    },
  }),
}

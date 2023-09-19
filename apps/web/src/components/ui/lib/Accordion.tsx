import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'
import { Box } from '@/components/ui/layouts'

const AccordionPrimitiveHeader = styled(AccordionPrimitive.Header)
const AccordionPrimitiveTrigger = styled(AccordionPrimitive.Trigger)
const AccordionPrimitiveContent = styled(AccordionPrimitive.Content)

/**
 * @description アコーディオン
 * https://www.radix-ui.com/docs/primitives/components/accordion
 * https://ui.shadcn.com/docs/components/accordion
 */
export const Accordion = {
  /** アコーディオン要素のコンテナ */
  Root: styled(AccordionPrimitive.Root),
  /** アコーディオンのトリガーと内容をラップする要素 */
  Item: styled(AccordionPrimitive.Item, {
    base: {
      borderBottom: '1px solid',
      borderColor: 'accent',
    },
  }),
  /** アコーディオン開閉のトリガー */
  Trigger: forwardRef<
    ElementRef<typeof AccordionPrimitiveTrigger>,
    ComponentPropsWithoutRef<typeof AccordionPrimitiveTrigger>
  >(({ css, children, ...props }, ref) => (
    <AccordionPrimitiveHeader css={{ display: 'flex' }}>
      <AccordionPrimitiveTrigger
        ref={ref}
        css={{
          display: 'flex',
          flex: '1 1 0%',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: '16px',
          fontWeight: 'medium',
          fontSize: 'sm',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
          cursor: 'pointer',
          _hover: {
            textDecoration: 'underline',
          },
          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'focus',
            outlineOffset: '2px',
          },
          '& > svg': {
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '200ms',
          },
          '&[data-state=open] > svg': {
            transform: 'rotate(180deg)',
          },
          ...css,
        }}
        {...props}
      >
        {children}
        <ChevronDown size="16px" />
      </AccordionPrimitiveTrigger>
    </AccordionPrimitiveHeader>
  )),
  /** アコーディオンが開かれた時に表示される要素 */
  Content: forwardRef<
    ElementRef<typeof AccordionPrimitiveContent>,
    ComponentPropsWithoutRef<typeof AccordionPrimitiveContent>
  >(({ css, children, ...props }, ref) => (
    <AccordionPrimitiveContent
      ref={ref}
      css={{
        fontSize: 'sm',
        overflow: 'hidden',
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        '&[data-state=closed]': {
          animation: 'slideUp 0.2s ease-out',
        },
        '&[data-state=open]': {
          animation: 'slideDown 0.2s ease-out',
        },
        ...css,
      }}
      {...props}
    >
      <Box css={{ pb: '16px', pt: 0 }}>{children}</Box>
    </AccordionPrimitiveContent>
  )),
}

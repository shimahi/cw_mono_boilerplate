import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { styled } from '@/styled-system/jsx'

const AlertDialogPrimitivePortal = styled(AlertDialogPrimitive.Portal)
const AlertDialogPrimitiveOverlay = styled(AlertDialogPrimitive.Overlay)
const AlertDialogPrimitiveContent = styled(AlertDialogPrimitive.Content)

/**
 * @description アラートダイアログ
 * モーダルUIのうち、外部をクリックしても閉じず。アクションまたはキャンセルを強制的に行わせる場合に使用する。
 * https://www.radix-ui.com/docs/primitives/components/alert-dialog
 * https://ui.shadcn.com/docs/components/alert-dialog
 */
export const AlertDialog = {
  /** アラートダイアログ全体のラッパー open, onOpenChangeなどのpropsによって開閉を担う */
  Root: styled(AlertDialogPrimitive.Root),
  /** アラートダイアログONのトリガー */
  Trigger: styled(AlertDialogPrimitive.Trigger),
  /** ダイアログの表示コンテンツの親要素、オーバーレイも担当 */
  Content: forwardRef<
    ElementRef<typeof AlertDialogPrimitiveContent>,
    ComponentPropsWithoutRef<typeof AlertDialogPrimitiveContent>
  >(({ css, ...props }, ref) => (
    <AlertDialogPrimitivePortal
      css={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        sm: { alignItems: 'center' },
      }}
    >
      <AlertDialogPrimitiveOverlay
        css={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          backdropFilter: 'blur(4px)',
          backgroundColor: 'backgroundAlpha',
          '&[data-state="open"]': {
            opacity: 1,
          },
          '&[data-state="closed"]': {
            opacity: 0,
          },
          '@media (prefers-reduced-motion: no-preference)': {
            animation: `animateIn 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          },
        }}
      />
      <AlertDialogPrimitiveContent
        ref={ref}
        css={{
          position: 'fixed',
          zIndex: 50,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          display: 'grid',
          width: '95%',
          maxWidth: '512px',
          gap: '16px',
          border: '1px solid',
          borderColor: 'accent',
          backgroundColor: 'background',
          padding: '24px',
          opacity: 1,
          boxShadow: 'lg',
          sm: {
            maxWidth: '512px',
          },
          md: {
            width: '100%',
            borderRadius: 'lg',
          },
          '@media (prefers-reduced-motion: no-preference)': {
            animation: `fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          },
          ...css,
        }}
        {...props}
      />
    </AlertDialogPrimitivePortal>
  )),
  /** 表示コンテンツ上部のコンテナ */
  Header: styled('div', {
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      textAlign: 'center',
      sm: {
        textAlign: 'left',
      },
    },
  }),
  /** コンテンツのタイトル Header内部で利用する */
  Title: styled(AlertDialogPrimitive.Title, {
    base: {
      fontSize: 'lg',
      fontWeight: 'semibold',
    },
  }),
  /** コンテンツの説明 Header内部で利用する */
  Description: styled(AlertDialogPrimitive.Description, {
    base: {
      fontSize: 'sm',
      color: 'mutedForeground',
    },
  }),
  /** 表示コンテンツ下のコンテナ */
  Footer: styled('div', {
    base: {
      display: 'flex',
      flexDirection: 'column-reverse',
      sm: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: '8px',
      },
    },
  }),
  /** ダイアログのアクションのトリガー、Footer内部で利用する */
  Action: styled(AlertDialogPrimitive.Action, {
    base: {
      d: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      br: 'sm',
      fz: 'sm',
      fw: 'bold',
      miw: 10,
      td: 'none',
      bw: 0.5,
      bs: 'solid',
      ta: 'center',
      transition: 'transform 0.1s ease-in-out',
      cursor: 'pointer',
      outline: 'none',
      bgc: 'primary',
      bc: 'primary',
      c: 'primaryForeground',
      px: 4,
      py: 2,
      mih: 10,
      _hover: {
        bgc: 'primaryAlpha',
        bc: 'primaryAlpha',
      },
      _active: {
        transform: 'scale(0.96)',
      },
      _disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
      },
      md: {
        _focusVisible: {
          outline: '1px solid',
          outlineColor: 'focus',
          outlineOffset: '2px',
        },
      },
    },
  }),
  /** 操作をキャンセルしダイアログを閉じるトリガー、Footer内部で利用する */
  Cancel: styled(AlertDialogPrimitive.Cancel, {
    base: {
      d: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      br: 'sm',
      fz: 'sm',
      fw: 'bold',
      miw: 10,
      td: 'none',
      bw: 0.5,
      bs: 'solid',
      ta: 'center',
      transition: 'transform 0.1s ease-in-out',
      cursor: 'pointer',
      outline: 'none',
      marginTop: '8px',
      px: 4,
      py: 2,
      mih: 10,
      sm: {
        marginTop: 0,
        _focusVisible: {
          outline: '1px solid',
          outlineColor: 'focus',
          outlineOffset: '2px',
        },
      },
      _disabled: {
        opacity: 0.5,
        pointerEvents: 'none',
        userSelect: 'none',
      },
      _active: {
        transform: 'scale(0.96)',
      },
      bc: 'accent',
      _hover: {
        c: 'accentForeground',
        bc: 'accent',
        bgc: 'accent',
      },
    },
  }),
}

import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react'
import { forwardRef, useEffect, useState } from 'react'

import { Grid } from '@/components/ui/layouts'
import { styled } from '@/styled-system/jsx'

const ToastPrimitiveAction = styled(ToastPrimitive.Action)
const ToastPrimitiveClose = styled(ToastPrimitive.Close)

/**
 * @description
 * 通知トースト
 * https://www.radix-ui.com/docs/primitives/components/toast
 */
const Toast = {
  Provider: styled(ToastPrimitive.Provider),
  Viewport: styled(ToastPrimitive.Viewport, {
    base: {
      position: 'fixed',
      top: 0,
      zIndex: 100,
      display: 'flex',
      mah: '100dvh',
      width: '100%',
      flexDirection: 'column-reverse',
      padding: '16px',
      '& > * + *': {
        mt: '-16px',
      },
      sm: {
        bottom: 0,
        right: 0,
        top: 'auto',
        flexDirection: 'column',
        maxWidth: '420px',
      },
    },
  }),
  Root: styled(ToastPrimitive.Root, {
    base: {
      position: 'relative',
      display: 'flex',
      pointerEvents: 'auto',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      borderRadius: 'md',
      border: '2px solid',
      padding: '24px',
      paddingRight: '32px',
      boxShadow: 'lg',
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '200ms',
      '@media (prefers-reduced-motion: no-preference)': {
        '&[data-state="open"]': {
          animation: `slideInFromTop 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
          sm: {
            animation: `slideInFromBottom 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
        },
        '&[data-state="closed"]': {
          animation: `swipeOut 100ms ease-in`,
        },
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
          animation: `swipeOut 100ms ease-out`,
        },
      },
      _hover: {
        '& .toast-close': {
          opacity: 1,
        },
      },
    },
    variants: {
      variant: {
        default: {
          backgroundColor: 'background',
          borderColor: 'accent',
        },
        destructive: {
          borderColor: 'destructive',
          backgroundColor: 'destructive',
          color: 'destructiveForeground',
          '.toast-action': {
            _hover: {
              color: 'destructive',
            },
          },
        },
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }),
  Title: styled(ToastPrimitive.Title, {
    base: {
      fontSize: 'sm',
      fontWeight: 'semibold',
    },
  }),
  Description: styled(ToastPrimitive.Description, {
    base: {
      fontSize: 'xs',
      opacity: 0.9,
    },
  }),
  Action: forwardRef<ElementRef<typeof ToastPrimitiveAction>, ComponentPropsWithoutRef<typeof ToastPrimitiveAction>>(
    ({ css, ...props }, ref) => {
      return (
        <ToastPrimitiveAction
          ref={ref}
          className="toast-action"
          css={{
            display: 'inline-flex',
            height: '32px',
            flexShrink: 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'md',
            border: '2px solid',
            borderColor: 'accent',
            backgroundColor: 'transparent',
            px: '12px',
            fontSize: 'sm',
            fontWeight: 'medium',
            transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150ms',
            cursor: 'pointer',
            _hover: {
              backgroundColor: 'secondary',
            },
            _focus: {
              outline: '2px solid',
              outlineColor: 'focus',
              outlineOffset: '2px',
            },
            _disabled: {
              opacity: 0.5,
              pointerEvents: 'none',
            },
            ...css,
          }}
          {...props}
        />
      )
    },
  ),
  Close: forwardRef<ElementRef<typeof ToastPrimitiveClose>, ComponentPropsWithoutRef<typeof ToastPrimitiveClose>>(
    ({ css, ...props }, ref) => (
      <ToastPrimitiveClose
        className="toast-close"
        ref={ref}
        toast-close=""
        css={{
          position: 'absolute',
          right: '8px',
          top: '8px',
          borderRadius: '9999px',
          padding: '2px',
          color: 'foregroundAlpha',
          transition: 'opacity 0.3s ease-in-out',
          cursor: 'pointer',
          display: 'grid',
          pi: 'center',
          opacity: 0.8,
          _hover: {
            color: 'foreground',
          },
          '[data-variant="destructive"] &': {
            color: 'destructiveForeground',
            _hover: {
              color: 'destructiveForeground',
            },
          },
          _focus: { opacity: 1 },
          _focusVisible: {
            outline: '2px solid',
            outlineColor: 'focus',
            outlineOffset: '2px',
          },
          ...css,
        }}
        {...props}
      >
        <X size={16} />
      </ToastPrimitiveClose>
    ),
  ),
}

/**
 * @description Toaster
 * アプリにトーストを表示するためのコンポーネント
 * _appに設置する
 */
export const Toaster = () => {
  const { toasts } = useToast()

  return (
    <Toast.Provider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast.Root key={id} {...props} data-variant={props.variant}>
            <Grid gap="1">
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && <Toast.Description>{description}</Toast.Description>}
            </Grid>
            {action && <Toast.Action altText={typeof action === 'string' ? action : 'OK'}>{action}</Toast.Action>}
            <Toast.Close />
          </Toast.Root>
        )
      })}
      <Toast.Viewport />
    </Toast.Provider>
  )
}

/**
 * useToastの初期化処理
 */

/** 一度に表示できるトーストの数 */
const TOAST_LIMIT = 6
/** トーストが自動消滅するまでの時間(ミリ秒) */
const TOAST_REMOVE_DELAY = 100 * 1000

const listeners: Array<(state: State) => void> = []
// トーストID
let idCount = 0
let memoryState: State = { toasts: [] }

type ToasterToast = ComponentPropsWithoutRef<typeof Toast.Root> & {
  title?: ReactNode
  description?: ReactNode
  action?: ReactNode
}
type State = {
  toasts: ToasterToast[]
}
type Action =
  | {
      type: 'ADD_TOAST'
      toast: ToasterToast
    }
  | {
      type: 'UPDATE_TOAST'
      toast: Partial<ToasterToast>
    }
  | {
      type: 'DISMISS_TOAST'
      toastId?: ToasterToast['id']
    }
  | {
      type: 'REMOVE_TOAST'
      toastId?: ToasterToast['id']
    }

function dispatch(action: Action) {
  const addToRemoveQueue = (toastId: string) => {
    const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

    if (toastTimeouts.has(toastId)) {
      return
    }

    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId)
      dispatch({
        type: 'REMOVE_TOAST',
        toastId: toastId,
      })
    }, TOAST_REMOVE_DELAY)

    toastTimeouts.set(toastId, timeout)
  }

  const reducer = (state: State, _action: Action): State => {
    switch (_action.type) {
      case 'ADD_TOAST':
        return {
          ...state,
          toasts: [_action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
        }

      case 'UPDATE_TOAST':
        return {
          ...state,
          toasts: state.toasts.map((t) => (t.id === _action.toast.id ? { ...t, ..._action.toast } : t)),
        }

      case 'DISMISS_TOAST': {
        const { toastId } = _action

        // ! Side effects ! - This could be extracted into a dismissToast() action,
        // but I'll keep it here for simplicity
        if (toastId) {
          addToRemoveQueue(toastId)
        } else {
          state.toasts.forEach((_toast) => {
            addToRemoveQueue(_toast?.id ?? '')
          })
        }

        return {
          ...state,
          toasts: state.toasts.map((t) =>
            t.id === toastId || toastId === undefined
              ? {
                  ...t,
                  open: false,
                }
              : t,
          ),
        }
      }
      case 'REMOVE_TOAST':
        if (_action.toastId === undefined) {
          return {
            ...state,
            toasts: [],
          }
        }

        return {
          ...state,
          toasts: state.toasts.filter((t) => t.id !== _action.toastId),
        }
    }
  }

  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

/**
 * @description useToast
 * トーストを表示するためのフック
 * 戻り値の { toast } 関数を実行することで、トーストを表示することができる
 */
export function useToast() {
  const [state, setState] = useState<State>(memoryState)

  useEffect(() => {
    listeners.push(setState)

    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    /**
     * トーストを表示する処理
     * @param {ReactNode} title トーストに表示するタイトル文
     * @param {ReactNode} description トーストの文章
     * @param {ReactNode} action トーストのボタンとなるコンポーネント。onClick時の挙動も設定する。文字列の場合はボタンのテキストとなる。
     * @param {ToasterToast["variant"]} variant トーストの種類。'destructive'の場合、トーストの背景色が赤になる。
     * @param {ToasterToast["css"]} css トーストのスタイル調整
     */
    toast: (props: Omit<ToasterToast, 'id'>) => {
      // idをインクリメント
      idCount = (idCount + 1) % Number.MAX_VALUE
      const id = idCount.toString()

      const update = (_props: ToasterToast) =>
        dispatch({
          type: 'UPDATE_TOAST',
          toast: { ..._props, id, variant: 'destructive' },
        })
      const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

      dispatch({
        type: 'ADD_TOAST',
        toast: {
          ...props,
          id,
          open: true,
          onOpenChange: (open) => {
            if (!open) dismiss()
          },
        },
      })

      return {
        id,
        dismiss,
        update,
      }
    },
    /** 指定したトーストを非表示にする */
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
    toasts: state.toasts,
  }
}

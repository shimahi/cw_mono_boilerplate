import { Text } from '@/components/ui/primitives'
import { styled } from '@/styled-system/jsx'

/**
 * @description カード型UI
 * ヘッダー(タイトル・説明)・コンテンツ・フッターを持つ
 * https://ui.shadcn.com/docs/components/card
 */
export const Card = {
  Root: styled('div', {
    base: {
      borderRadius: 'lg',
      border: '1px solid',
      borderColor: 'accent',
      backgroundColor: 'background',
      color: 'foreground',
      boxShadow: 'sm',
    },
  }),
  Header: styled('div', {
    base: {
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      '& > * + *': {
        mt: '6px',
      },
    },
  }),
  Title: styled(Text, {
    base: {
      fontSize: 'lg',
      fontWeight: 'semibold',
      lineHeight: 1,
      lts: 'sm',
    },
  }),
  Description: styled(Text, {
    base: {
      fontSize: 'sm',
      color: 'mutedForeground',
    },
  }),
  Content: styled('div', {
    base: {
      padding: '24px',
      pt: 0,
    },
  }),
  Footer: styled('div', {
    base: {
      display: 'flex',
      alignItems: 'center',
      padding: '24px',
      pt: 0,
    },
  }),
}

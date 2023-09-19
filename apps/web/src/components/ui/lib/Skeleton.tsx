import { styled } from '@/styled-system/jsx'

/**
 * @description
 * ローディング中に表示するスケルトン要素
 * https://ui.shadcn.com/docs/components/skeleton
 */
export const Skeleton = styled('div', {
  base: {
    backgroundColor: 'accent',
    borderRadius: 'md',
    animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  },
})

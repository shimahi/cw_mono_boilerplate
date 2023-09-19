import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import { styled } from '@/styled-system/jsx'

/**
 * @description Collapsible
 * パネルの展開・縮小を行える表示コンポーネント
 * https://www.radix-ui.com/docs/primitives/components/collapsible
 */
export const Collapsible = {
  /** Collapsible要素のコンテナ */
  Root: styled(CollapsiblePrimitive.Root),
  /** 開閉のトリガーとなる要素 */
  Trigger: styled(CollapsiblePrimitive.Trigger),
  /** 表示・非表示を制御される要素 */
  Content: styled(CollapsiblePrimitive.Content),
}

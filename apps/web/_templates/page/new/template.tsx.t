---
to: src/routes/<%= name %>/template/index.tsx
unless_exists: true
---
import { Box, Text } from '@/components/ui'

import { useViewModel } from '../viewModel'

export const Template = () => {
  const { state } = useViewModel()

  return (
    <Box>
      <Text as="h1">Inu Page</Text>
      <Text>{state.message}</Text>
    </Box>
  )
}

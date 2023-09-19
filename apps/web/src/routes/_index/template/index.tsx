import { Container, Flex, Text } from '@/components/ui'

import { useViewModel } from '../viewModel'
import { UserForm } from './UserForm'

export const Template = () => {
  const { state } = useViewModel()

  return (
    <Container px={4} py={3} p={{ md: 12 }} css={{}}>
      <Flex jc="space-between" ai="center" mb="3">
        <Text as="h2" c="primary">
          Home
        </Text>
        <Text fz="sm">現在の登録ユーザー数: {state.userCount}</Text>
      </Flex>

      <UserForm />
    </Container>
  )
}

import { useState } from 'react'

import { useRootViewModel } from '@/_root/viewModel'
import { Avatar, Box, Button, Flex, Input, Stack, Text, Textarea } from '@/components/ui'
import { useForm, validator } from '@/core/form'

import { useViewModel } from '../viewModel'

export const UserForm = () => {
  const { currentUser } = useRootViewModel()
  const { dispatch } = useViewModel()
  const [isEditing, setIsEditing] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    validator: validator.user.update,
    defaultValues: {
      accountId: currentUser?.accountId ?? '',
      displayName: currentUser?.displayName ?? '',
      introduction: currentUser?.introduction ?? '',
      avatarUri: currentUser?.avatarUri ?? '',
    },
  })

  const handleClickButton = isEditing
    ? handleSubmit((inputs) =>
        dispatch
          .updateUser(inputs)
          .then(() => setIsEditing(false))
          .catch(null),
      )
    : () => {
        setIsEditing(true)
      }

  if (!currentUser) return null

  return (
    <Flex
      jc="space-between"
      bgc="accent"
      maw="breakpoint-sm"
      fd={{
        base: 'column',
        sm: 'row',
      }}
      px={{ base: 4, md: 8 }}
      py={{ base: 2, md: 4 }}
    >
      <Stack px={3} flex="1" gap={0}>
        <Flex ai="center" gap={3}>
          <Avatar.Root>
            <Avatar.Image src={currentUser?.avatarUri} />
            <Avatar.Fallback />
          </Avatar.Root>
          <Stack gap={0} mt={5} flex="1">
            <Box>
              {!isEditing && (
                <Text color="mutedForeground" fz="xs">
                  @{currentUser?.accountId}
                </Text>
              )}
              {isEditing && (
                <Flex ai="center" gap={1}>
                  @<Input bgc="background" {...register('accountId')} placeholder="アカウントIDを入力" />
                </Flex>
              )}
              <Text c="destructive" fz="xs" h={0} mt={0.5}>
                {errors.accountId?.message}
              </Text>
            </Box>
            <Stack fd={{ base: 'column', md: 'row' }} gap={{ base: 0, md: 4 }} flex="1">
              <Box mb={4} w="full">
                {!isEditing && <Text fw="bold">{currentUser?.displayName}</Text>}
                {isEditing && <Input {...register('displayName')} bgc="background" placeholder="ニックネームを入力" />}
                <Text c="destructive" fz="xs" h={0} mt={0.5}>
                  {errors.displayName?.message}
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Flex>
        <Stack fd={{ base: 'column', md: 'row' }} gap={{ base: 0, md: 4 }} flex="1">
          <Box w="full">
            {!isEditing && <Text>{currentUser?.introduction}</Text>}
            {isEditing && <Textarea {...register('introduction')} bgc="background" placeholder="自己紹介文を入力" />}
            <Text c="destructive" fz="xs" h={0} mt={0.5}>
              {errors.introduction?.message}
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Box mt={8}>
        <Button w={{ base: 'full', sm: 'inherit' }} onClick={handleClickButton}>
          {isEditing ? '保存' : '編集'}
        </Button>
      </Box>
    </Flex>
  )
}

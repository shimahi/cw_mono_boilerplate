import { useRootViewModel } from '@/_root/viewModel'
import { AlertDialog, Box, Button, Fieldset, Flex, Form, Input, Label, Stack, Text, Textarea } from '@/components/ui'
import { useForm, validator } from '@/core/form'

/**
 * @description
 * 強制プロフィール登録モーダル
 * ログインユーザーがプロフィールを登録していない場合に表示する
 */
export const ForceProfileRegisterModal = () => {
  const { currentUser, updateUser } = useRootViewModel()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    validator: validator.user.update,
    defaultValues: {
      accountId: currentUser?.accountId ?? '',
      displayName: currentUser?.displayName ?? '',
      introduction: currentUser?.introduction ?? '',
      avatarUri: currentUser?.avatarUri ?? '',
    },
  })

  const open = currentUser && !currentUser?.isProfileRegistered

  if (!open) return null

  return (
    <AlertDialog.Root defaultOpen={open} open={true}>
      <AlertDialog.Content>
        <AlertDialog.Title mb={2} as="h4">
          アカウント情報を登録してください
        </AlertDialog.Title>
        <Form
          onSubmit={handleSubmit((inputs) => {
            updateUser(inputs)
          })}
        >
          <Stack gap={5}>
            <Fieldset>
              <Label mb={1} htmlFor="name">
                アカウント名
              </Label>
              <Box>
                <Box mb={1}>
                  <Input {...register('displayName')} />
                </Box>
                {errors?.displayName && (
                  <Text fz="xs" c="destructive" h={0}>
                    {errors.displayName.message}
                  </Text>
                )}
              </Box>
            </Fieldset>
            <Fieldset>
              <Label mb={1} htmlFor="username">
                アカウントID
              </Label>
              <Box>
                <Box mb={1}>
                  <Flex ai="center" gap={2}>
                    @<Input bgc="background" {...register('accountId')} />
                  </Flex>
                </Box>
                {errors?.accountId && (
                  <Text fz="xs" c="destructive" h={0}>
                    {errors.accountId.message}
                  </Text>
                )}
              </Box>
            </Fieldset>
            <Fieldset>
              <Label mb={1} htmlFor="introduction">
                プロフィール
              </Label>
              <Box>
                <Textarea placeholder="あなたのプロフィールを記入してください" {...register('introduction')} />
                {errors?.introduction && (
                  <Text fz="xs" mt={1} c="destructive" h={0}>
                    {errors.introduction.message}
                  </Text>
                )}
              </Box>
            </Fieldset>
          </Stack>
          <Flex mt={6} jc="flex-end">
            <AlertDialog.Action asChild>
              <Button disabled={!isValid} type="submit">
                登録する
              </Button>
            </AlertDialog.Action>
          </Flex>
        </Form>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

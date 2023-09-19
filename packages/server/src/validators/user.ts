import type { Output } from 'valibot'
import { maxLength, minLength, nullish, regex, string } from 'valibot'

import type { User } from '../schemas/type'
import { createValidator } from '../utils/valibot'

const v = createValidator<User>()

export const userValidator = {
  update: v({
    accountId: string([
      minLength(1, '入力必須の項目です。'),
      regex(/^[a-zA-Z0-9_]*$/, '半角英数字で入力してください。'),
    ]),
    displayName: string([minLength(1, '入力必須の項目です。'), maxLength(30, '30文字以内で入力してください')]),
    introduction: nullish(string([maxLength(140, '140文字以内で入力してください。')])),
    avatarUri: string(),
  }),
}

export type UserValidator = {
  [key in keyof typeof userValidator]: Output<(typeof userValidator)[key]>
}

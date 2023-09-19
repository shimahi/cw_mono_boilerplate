import { valibotResolver } from '@hookform/resolvers/valibot'
import type { FieldValues, UseFormProps } from 'react-hook-form'
import { useForm as useReactHookForm } from 'react-hook-form'

/** validatorモジュールのエクスポート */
export { type Validator, validator } from 'server/dist/validators'

/**
 * @description useForm
 * react-hook-formのuseFormフックをvalibotの型でラップしたもの。
 *
 * @param validator フォームで扱うデータのスキーマ。useFormのresolverに渡す。
 * https://react-hook-form.com/docs/useform#resolver
 */
export const useForm = <TFieldValues extends FieldValues>(
  props: UseFormProps<TFieldValues> & {
    validator: Parameters<typeof valibotResolver>[0]
  },
) => {
  const result = useReactHookForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: valibotResolver(props.validator),
    ...props,
  })

  return result
}

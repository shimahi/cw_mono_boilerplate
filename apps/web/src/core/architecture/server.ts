import type { DataFunctionArgs } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'

export const ERROR_STATUS = 'error'

// actionに届いたリクエストからtype/payloadをパースして返す
const parseRequest = async <T extends Record<string, (...args: unknown[]) => unknown>>(
  request: DataFunctionArgs['request'],
) => {
  const formData = await request.formData()
  const type = formData.get('type')
  const payload = JSON.parse(formData.get('payload') as string)

  return { type, payload } as {
    [K in keyof T]: { type: K; payload: Parameters<T[K]>[1] }
  }[keyof T]
}

/**
 * @description createAction
 * Remixのactionを作成する。
 * リクエストのtypeキーに応じたactionsのメソッドをpayload値を用いて実行する関数を返す。
 * @param {DataFunctionArgs} args
 * @param {ActionsType} actions
 * @returns
 */
export const createAction = async (args: DataFunctionArgs, actions: any) => {
  const { type, payload } = await parseRequest<typeof actions>(args.request)

  if (!type || !actions[type])
    return json({ status: ERROR_STATUS, message: '定義されていないtypeキーが設定されました' })

  return actions[type as keyof typeof actions](args, payload)
}

/**
 * @description createActions
 * actionsを定義するためのヘルパー関数
 * 定義時にargs,payloadの補完を効かせつつ、typeof actionsの型を実装に基づいたものにする。
 * また、action実行時にサーバー側でエラーが投げられた場合は {status: 'error'} のオブジェクトとしてクライアントに渡す。
 */
export const createActions = <T extends ActionsType>(actions: T): T => {
  return Object.entries(actions).reduce<T>((acc: any, [key, action]) => {
    const actionKey = key as keyof T

    const handleError = (error: any) => {
      return { status: ERROR_STATUS, name: error.name, message: error.message }
    }

    // actionの処理が非同期の場合、actionの実行をawaitしてエラーをキャッチする
    if (action.constructor.name === 'AsyncFunction') {
      acc[actionKey] = async (...args: Parameters<typeof action>) => {
        try {
          return await action(...args)
        } catch (e) {
          return handleError(e)
        }
      }
    } else {
      // actionが非同期処理ではない場合、awaitせずにキャッチする
      acc[actionKey] = (...args: Parameters<typeof action>) => {
        try {
          return action(...args)
        } catch (e) {
          return handleError(e)
        }
      }
    }

    return acc
  }, {} as T)
}

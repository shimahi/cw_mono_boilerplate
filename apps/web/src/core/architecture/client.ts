import type { TypedResponse } from '@remix-run/cloudflare'
import type { SubmitFunction, useLoaderData } from '@remix-run/react'
import { useFetcher } from '@remix-run/react'
import { useCallback, useEffect, useRef } from 'react'

import { ERROR_STATUS } from './server'

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type UnwrapTypedResponse<T> = T extends TypedResponse<infer U> ? U : T

/**
 * @description useMutation
 * { type: payloadを引数とする関数 } という形で定義されたactionsの実行するmutate関数を呼び出すためのフック。Remixのfetcherを元にしている。
 * mutate関数にtype・payloadのデータを渡すことで、actionsに定義されたactionの処理を呼び出すことができる。
 * actionの実行結果はmutateの戻り値としてPromiseで返却されるため、actionのレスポンスをクライアント側でハンドリングできる。
 *
 * https://gist.github.com/samselikoff/510c020e4c9ec17f1cf76189ce683fa8
 *
 * @typePraram TActions actionsの型
 */
export const useMutation = <TActions extends Record<string, (...args: any) => any>>() => {
  type ActionTypes = keyof TActions
  type HasPayload<K extends keyof TActions> = Parameters<TActions[K]> extends [any, any] ? true : false
  type ExpectedActionPayload<K extends keyof TActions> = Parameters<TActions[K]>[1]
  type ExpectedSubmitReturnType<K extends keyof TActions> = ReturnType<TActions[K]>

  const { Form: _, submit, ...fetcher } = useFetcher()
  const resolveRef = useRef<((data: unknown) => void) | null>(null)
  const promiseRef = useRef<Promise<unknown> | null>(null)

  // promiseRefオブジェクトで管理しているPromiseを新しいPromiseで再初期化し、そのresolve関数をresolveRefオブジェクトに設定する処理
  const resetResolver = useCallback(() => {
    promiseRef.current = new Promise((resolve) => {
      resolveRef.current = resolve
    })
  }, [promiseRef, resolveRef])

  if (!promiseRef.current) {
    resetResolver()
  }

  // fetcherの状態が変わった際に、新しいPromiseをセットアップする
  useEffect(() => {
    if (fetcher.data && fetcher.state === 'idle' && !!resolveRef?.current) {
      resolveRef.current(fetcher.data)
      resetResolver()
    }
  }, [fetcher, resetResolver])

  /**
   * actionを実行する
   * @param
   *   type 送信するアクションの識別子
   *   payload 送信するデータ
   * @param options
   * @returns {Promise<ExpectedSubmitReturnType<K>>}
   */
  const mutate = useCallback(
    async <K extends ActionTypes>(
      action: HasPayload<K> extends true ? { type: K; payload: ExpectedActionPayload<K> } : { type: K } | null,
      options?: SubmitOptions,
    ): Promise<UnwrapTypedResponse<UnwrapPromise<ExpectedSubmitReturnType<K>>>> => {
      // 引数メンバpayloadをJSON文字列に変換して送信する
      submit(
        (action
          ? {
              type: action.type,
              payload: 'payload' in action && action.payload ? JSON.stringify(action.payload) : null,
            }
          : null) as Parameters<SubmitFunction>[0],
        {
          // デフォルトのHTTPメソッドをPOSTにする
          method: options?.method ?? 'POST',
          ...options,
        },
      )

      const result = (await promiseRef.current) as { status: string; message: string }

      // mutateの実行結果をチェックし、 {status: 'error'} のオブジェクトが返ってきている場合にエラーを投げる。
      if (result.status === ERROR_STATUS) {
        throw new Error(result.message)
      }

      return result as any
    },
    [promiseRef, submit],
  )

  return { ...fetcher, mutate }
}

/**
 * viewModelで取得できるloaderの型
 * ジェネリクスにloaderの型を渡すことで、
 * loaderの型を元にuseLoaderDataの戻り値の型を推論できるようにする。
 * viewModelを定義する際、コールバックの第一引数に設定する。
 */
export type Data<Loader extends {}> = ReturnType<typeof useLoaderData<Loader>>

/**
 * viewModelで実行できるmutationの型
 * ジェネリクスにactionsの型を渡すことで、
 * actionsの型を元にmutate関数の引数の型を推論できるようにする。
 * viewModelを定義する際、コールバックの第二引数に設定する。
 */
export type Mutation<Action extends {}> = ReturnType<typeof useMutation<Action>>

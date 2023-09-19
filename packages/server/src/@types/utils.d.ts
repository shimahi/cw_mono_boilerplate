type NullableUndefined<T> = T extends null ? T | undefined : T

/**
 * nullを含むプロパティに対してundefinedも許容する型を生成する
 */
type Nullish<T> = {
  [P in keyof T]: NullableUndefined<T[P]>
}

/**
 * Genericsで指定したクラスのコンストラクタ引数の型を取得する
 */
type ConstructorArgs<T> = T extends new (...args: infer U) => unknown ? U : never

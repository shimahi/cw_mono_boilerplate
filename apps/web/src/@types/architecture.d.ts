/**
 * actionsオブジェクトの型
 * actionsのもつメソッドはargsとpayloadを引数にとる
 */
interface ActionsType {
  [key: string]: (args: DataFunctionArgs, payload?: any) => any
}
/**
 * mutateメソッドの第二引数
 */
interface SubmitOptions {
  /**
   * The HTTP method used to submit the form. Overrides `<form method>`.
   * Defaults to "GET".
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  /**
   * The action URL path used to submit the form. Overrides `<form action>`.
   * Defaults to the path of the current route.
   */
  action?: string
  /**
   * The action URL used to submit the form. Overrides `<form encType>`.
   * Defaults to "application/x-www-form-urlencoded".
   */
  encType?: 'application/x-www-form-urlencoded' | 'multipart/form-data'
  /**
   * Set `true` to replace the current entry in the browser's history stack
   * instead of creating a new one (i.e. stay on "the same page"). Defaults
   * to `false`.
   */
  replace?: boolean
  /**
   * Determines whether the form action is relative to the route hierarchy or
   * the pathname.  Use this if you want to opt out of navigating the route
   * hierarchy and want to instead route based on /-delimited URL segments
   */
  relative?: 'path' | 'route'
  /**
   * In browser-based environments, prevent resetting scroll after this
   * navigation when using the <ScrollRestoration> component
   */
  preventScrollReset?: boolean
}

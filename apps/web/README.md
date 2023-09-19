# Web App

Cloudflare Workers上で動かすWebアプリケーションのディレクトリです。

Remixのloader/actionからドメインロジックを呼び出し、VMMVアーキテクチャを取り扱うカスタムフックを通してReactフロントエンドに対してデータハイドレーションを行う設計が特徴です。

### ディレクトリ構成

- **\_templates** 新規ページを作る際に使う[hygen](https://github.com/jondot/hygen)テンプレート
- **.ladle** UIコンポーネントのカタログライブラリ[Ladle](https://ladle.dev/)のディレクトリ
- **public** 静的ファイルを配置する
- **scripts** CLI で実行する関数を記述する
- **src** アプリケーションの実装を行うディレクトリ
  - **\_root** Remixのルートコンポーネントを定義する。Remixのクライアントサイドのページを設計する。特に特にページ共通で用いるレイアウトとloader/actionの処理についての設計を行う。
    - **layouts** 画面全体を構成するコンポーネント。templateの外枠として機能する。
  - **@types** Remixで扱う環境変数や各モジュールの型拡張ファイルや自動生成した型ファイルを配置する。
  - **components** UIコンポーネント全般
    - **elements** ドメインに依存しない共通コンポーネント
    - **features** アプリケーションの機能に即した共通コンポーネント。
    - **ui** UIコンポーネント群。UIの最小単位としての役割を持ち、ドメインロジックに一切関心を持たない。
      - **lib** 汎用的な機能を持つUIコンポーネント。主に[Radix UI](https://www.radix-ui.com/)を用いて実装する。
      - **layouts** 要素の配置に用いる基本的なコンポーネント。Panda CSS の組み込みコンポーネントを利用する。
      - **primitive** プリミティブなHTMLのタグを styled component として扱えるようにしたもの。
  - **core** アプリ開発の基幹となるロジックを記述する(アーキテクチャ、フォーム、テーマ、エラーハンドリング、i18など)
  - **lib** 外部ライブラリの設定、初期化、ロジックを定義する。
  - **routes** Remixのルーティング定義とページの実装を行う cf) [Routig | Remix Doc](https://remix.run/docs/en/main/guides/routing)
  - **utils** ドメインに依存しないユーティリティロジックを記載する(計算系)
  - entry.client.tsx Remixのクライアントサイドでコンポーネントをレンダリングする際のベースファイル
  - entry.server.tsx Remixのサーバーサイドでコンポーネントをレンダリングする際のベースファイル
  - root.tsx \_rootを呼び出してエクスポートしているファイル。Remixではroot.tsxの配置が不可欠なので、形式的に配置する。
- **styled-system** - Panda CSS によって生成されたCSSファイルや styled component が配置される。自動生成され、これ自体はgitignoreする
- **.dev.vars** - ローカル実行環境で扱う環境変数
- **.env** - CIで扱う環境変数
- **panda.config.ts** - Panda CSS の設定ファイル、デザインテーマやグローバルスタイルを定義する
- **remix.config.js** Remixアプリの設定ファイル
- **remix.server.ts** Remixバックエンドの設定を行う
- **wrangler.toml** Cloudflare Workersの設定ファイル。デプロイするworkersプロジェクトやD1やKVなどのアプリで用いるサービスについてまとめる。

---

### ローカルサーバーの起動

```bash
$ pnpm dev
```

→ http://localhost:8787

---

### 新規ページの作成方法

`page`コマンドを実行することで`src/routes/`下に新しいページのフォルダが作られます。

```bash
# 新規ページのファイルを作成
$ pnpm page <新規ページ名>

# 例
$ pnpm page posts
# → routes/posts下に
# index.tsx, viewModel.ts, viewModel.server.ts, templates/index.tsxが出力される
```

cf ) [Remixのルーティング仕様](https://remix.run/docs/en/main/file-conventions/route-files-v2)

`/posts/$slug` のようなURLを作成したい場合は `posts\_.$slug` というフォルダ名を用意する

---

### アーキテクチャ解説

Remixの基本的なAPIはドキュメントを参照すること

https://remix.run/docs/en/main/route/loader

https://remix.run/docs/en/main/route/action

`src/routes`内にページごとのディレクトリがあり、index.ts, viewModel.ts, templateのファイルを用意する。

- **viewModel.server.ts** Remixのサーバーサイドを担う**loader**, **action**を実装する。

  - loaderはサーバーから返されたデータ、actionはインタラクティブなメソッドを受け取り発火する処理を担当する。
  - serverモジュールからドメインロジック処理をインポートし、これをリクエストに対して利用する。
  - Workersの実行環境に依存するデータ (例: D1のデータベース情報) をserverパッケージでコールするため、serverモジュールのドメインロジックを呼び出す際に引数でRemixのコンテキストを注入する
  - actionの実装を行う際はtype, payload キーを持つactionsオブジェクトを定義する。typeはactionの種類、payloadはactionをコールする際の引数を表す。
  - フロント側でミューテーションを実行する際、actionsのキーを指定することで、対応する処理を呼び出すことができる。

- **viewModel.ts** フロントで呼び出せるサーバーのデータを定義する。

  - loaderのデータを第1引数、actionを呼び出すmutationを第2引数にとり、template内で使えるstate(データ)とdispatch(操作によって呼ばれる処理)を返すviewModel関数を定義することで、テンプレート内部で**useViewModel**フックが使えるようになる。
  - mutationはRemixの[fetcher](https://remix.run/docs/en/main/hooks/use-fetcher)を扱ったオブジェクトで、mutation.mutateメソッドを実行することでactionの処理を呼び出すことができる。
  - Remixの form action (method=POSTでフォーム送信することでaction関数が発火する仕組み) は用いない。これはTemplate下がRemixのAPIになるべく依存しないようにするため。

- **index.ts** Remixの各ページのトップコンポーネント。

  - ページコンポーネントとloader,actionをエクスポートし、同時にtemplate内部にviewModelのコンテキストを注入するためのボイラープレート。
  - ハイドレーションを行う際、オプションを指定することでページのレイアウトを決定する

- **template/index.tsx** ページのUIを担うコンポーネント。useViewModelから取得したデータの表示を行う。

これらの仕組みで用いている処理やフックは `src/core/architecture` を参照

---

### フォームの取り扱い

当アプリは [react-hook-form](https://react-hook-form.com/)でフォームを取り扱い、フォームのバリデーションライブラリは[valibot](https://valibot.dev/)を使用します。

valibotを用いて定義したフォームのスキーマを`server/dist/validator`ディrクトリからインポートし、これとフォームのデフォルト値を @/core/form/下の `useForm`フックに渡します。これによりスキーマの型が設定されたreact-hook-formの各メソッドが使用できるようになるので、フォームの実装を行なってください。

```tsx
// 例
import { useForm, validator } from '@/core'

export const UserUpdateForm = () => {
  const {
    /** 入力コンポーネントに渡すオブジェクト群 */
    register,
    /** フォーム送信ハンドラ */
    handleSubmit,
    /** フォームの入力状態やエラー */
    formState,
    /** フォームを初期化する関数 */
    reset,
  } = useForm({
    validator: validator.user.update,
    defaultValues: {
      id: currentUser?.id ?? '',
      displayName: currentUser?.displayName ?? '',
      accountId: currentUser?.accountId,
      introduction: currentUser?.introduction,
    },
  })

  const onSubmit = handleSubmit(
    /** 第一引数にフォーム入力値を使ったコールバック */
    (input) => {
      dispatch.updateUser(input)
    },
    /** 第二引数にエラー時の処理 */
    (error) => {
      showError(error)
    },
  )
}
```

---

### UIのスタイリング

`panda.config.js` 下に、アプリで用いるデザインシステムが設定されています。ここでは、カラートークンとその値や、スタイリングのutilityプロパティ、グローバルCSSの定義などが行われています。

これを利用したコンポーネントが `src/components/ui` であり、アプリの基幹となるUIの実装が行われています。

デザインシステムの変更に応じて、デザイントークンやvariantの追加・修正やコンポーネント実装の修正を適切に行ってください。

[Panda CSS公式ドキュメント](https://panda-css.com/docs)

また、アプリのテーマをクライアントに反映するロジックは src/core/theme/index.tsx および src/root.tsx に記述されています。

##### UIのデザイン確認

[Ladle](https://ladle.dev/)というReactプレビューライブラリ利用し、コンポーネントのスタイルを確認することができます。

```bash
# apps/web ディレクトリで実行
$ pnpm web ladle serve
```

---

### マークアップ方法

`@/components/ui` からコンポーネントをインポートして、css props や variant を設定しスタイルを組んでください。

※ デザインテーマやUIコンポーネントの基礎スタイルを修正する場合は、元のUIコンポーネントコンポーネントやpanda.config.jsを修正してください。

```tsx
// 例
import { Box, Button, Container, Text } from '@/components/ui'

const Component = () => {
  return (
    <Container>
      {/* UIコンポーネントにcssやvariantをpropsとして渡しスタイルを調整する */}
      <Box
        css={{
          borderStyle: 'solid',
          borderColor: 'primary',
          borderWidth: 'px',
        }}
      >
        <Text c="primary">テキスト</Text>
        <Button mt={4} w={{ base: 24, md: 32 }}>
          ボタン
        </Button>
      </Box>
    </Container>
  )
}
```

---

### メタ情報の設定

各ページの `index.ts` ファイルにて、 `meta` 関数をエクスポートすることでページ内のメタ情報が設定可能です。

https://remix.run/docs/en/main/route/meta-v2

---

### リファレンス

- [Remix](https://remix.run/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Panda CSS](https://panda-css.com/)
- [Radix UI](https://www.radix-ui.com/)

import type { LinksFunction, V2_MetaFunction } from '@remix-run/cloudflare'

import styles from '@/index.css'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'The old sport' },
    {
      property: 'og:title',
      content: 'The old sport',
    },
    {
      name: 'description',
      content: `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, " just remember that all the people in this world haven't had the advantages that you've had."`,
    },
  ]
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'icon',
    sizes: '16x16',
    href: '/icon.png',
  },
]

import __STATIC_CONTENT_MANIFEST from '__STATIC_CONTENT_MANIFEST'
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import type { AppLoadContext, ServerBuild } from '@remix-run/cloudflare'
import { createRequestHandler, logDevReady } from '@remix-run/cloudflare'
import * as build from '@remix-run/dev/server-build'

const MANIFEST = JSON.parse(__STATIC_CONTENT_MANIFEST)
const handleRemixRequest = createRequestHandler(build as ServerBuild, process.env.NODE_ENV)

if (build.dev) {
  logDevReady(build as ServerBuild)
}

export default {
  async fetch(
    request: Request,
    env: AppLoadContext['env'] & {
      __STATIC_CONTENT: Fetcher
    },
    ctx: ExecutionContext,
  ): Promise<Response> {
    try {
      const url = new URL(request.url)
      const ttl = url.pathname.startsWith('/build/')
        ? 60 * 60 * 24 * 365 // 1 year
        : 60 * 5 // 5 minutes

      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        } as FetchEvent,
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: MANIFEST,
          cacheControl: {
            browserTTL: ttl,
            edgeTTL: ttl,
          },
        },
      )
    } catch (error) {}

    try {
      const loadContext: AppLoadContext = { env }

      return await handleRemixRequest(request, loadContext)
    } catch (error) {
      console.error(error)

      return new Response('An unexpected error occurred', { status: 500 })
    }
  },
}

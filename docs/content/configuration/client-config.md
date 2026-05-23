---
id: client-config
title: Client configuration
sidebar_position: 1
description: Every GraphQLClientConfig field.
---

# Client configuration

`createClient(config)` (and the backward-compatible `new GraphQLClient(config)`)
accept a `GraphQLClientConfig`:

| Field | Type | Default | Notes |
| --- | --- | --- | --- |
| `endpoint` | `string` | — | **Required.** Direct API URL or your proxy endpoint. |
| `securityMode` | `'proxy' \| 'direct'` | `'proxy'` | Use `'proxy'` in production. `'direct'` exposes API keys client-side. |
| `proxyEndpoint` | `string` | `endpoint` | Override for proxy URL when you want `endpoint` to point at the upstream. |
| `clientId` | `string` | — | Sent as `X-Client-ID` in proxy mode. |
| `apiKey` | `string` | — | **Direct mode only.** Ignored in proxy mode (with a warning). |
| `orderEditorApiKey` | `string` | — | Direct mode only. Used for the mutations in `orderEditorMutations`. |
| `orderEditorMutations` | `string[]` | `['orderSetStatus', 'passwordResetLink', 'triggerQuoteSendRequest', 'triggerOrderSendConfirm']` | Override to route additional mutations through `orderEditorApiKey`. |
| `headers` | `Record<string, string>` | — | Merged into every request. Also the right slot for application-level proxy cache transports (see [Caching recipes](/guides/caching)). |
| `timeout` | `number` | `30000` | Request timeout (ms). Triggers `AbortController`. |
| `debug` | `boolean` | `false` | Gates internal `[GraphQL Client]` logs. Config-validation warnings always fire. |
| `getAccessToken` | `() => string \| undefined \| Promise<string \| undefined>` | reads `localStorage['access_token']` in browser | Use this for SSR (`getServerSession`, HTTP-only cookies) or in-memory token stores. |
| `defaultLanguage` | `string` | — | ISO 639-1 tag (e.g. `'NL'`). Service methods that take an optional top-level `language` and don't receive one fall back to this value. An explicit `language` on the call always wins. |
| `throwOnPartialErrors` | `boolean` | `false` | On a partial response (`data` *and* `errors`), services return the data and debug-log the errors. Set `true` to throw `GraphQLOperationError` instead. `client.execute()` never throws regardless. |

The exact, generated type definition is in the
[API Reference](/api/).

See also: [Proxy contract](/configuration/proxy-contract) ·
[Authentication](/configuration/authentication) ·
[Per-operation cache hints](/configuration/cache-hints) ·
[Caching recipes](/guides/caching).

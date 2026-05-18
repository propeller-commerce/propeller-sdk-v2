---
id: proxy-contract
title: Proxy contract
sidebar_position: 2
description: What your proxy endpoint must do in proxy mode.
---

# Proxy contract

When `securityMode: 'proxy'`, the SDK posts to `proxyEndpoint || endpoint` with:

- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
  - `X-Client-ID: <clientId>` (if configured)
  - `Authorization: Bearer <token>` (if `getAccessToken()` returns a token)
  - Any `headers` you supplied in config
- **Body:** `{ query, variables, operationName }`

Your proxy is expected to:

1. Attach the upstream `apikey` header (and `orderEditorApiKey` for the
   operations you allow-list).
2. Forward the request to the upstream Propeller GraphQL endpoint.
3. Return the upstream JSON response untouched.

A minimal Node/Edge handler:

```ts
export async function handler(req: Request) {
  const upstream = await fetch('https://api.helice.cloud/v2/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: process.env.PROPELLER_API_KEY!,
    },
    body: await req.text(),
  });
  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
```

---
id: authentication
title: Authentication
sidebar_position: 3
description: Token resolution in proxy mode.
---

# Authentication

In proxy mode, every request runs `config.getAccessToken()` and attaches
`Authorization: Bearer <token>` when a token is returned. The provider may be
sync or async.

```typescript
// Browser (default): reads localStorage['access_token']
const client = createClient({ endpoint: '/api/graphql' });

// SSR (Next.js): read from cookies on each request
const client = createClient({
  endpoint: '/api/graphql',
  getAccessToken: async () => {
    const session = await getServerSession();
    return session?.accessToken;
  },
});

// In-memory store
let token: string | undefined;
const client = createClient({ endpoint: '/api/graphql', getAccessToken: () => token });
```

`client.setAccessToken(token)` and `client.clearAccessToken()` write to / clear
`localStorage` only when the default provider is in use; with a custom
`getAccessToken` you manage the storage yourself.

`client.isAuthenticated()` is async and resolves to `true` iff the configured
provider yields a token.

---
id: direct-graphql
title: Direct GraphQL access
sidebar_position: 3
description: Run ad-hoc queries not covered by a service.
---

# Direct GraphQL access

For ad-hoc queries that aren't covered by a service:

```typescript
import { GraphQLClient } from 'propeller-sdk-v2';

const client = new GraphQLClient({
  endpoint: 'https://api.propeller.com/graphql',
  securityMode: 'direct',
  apiKey: 'your-api-key',
});

// Object-form arguments (preferred):
const result = await client.execute({
  query: `query GetProducts($offset: Int!) {
    products(input: { offset: $offset }) {
      id
      name
    }
  }`,
  variables: { offset: 10 },
});

// Or higher-level helpers that throw on GraphQL errors:
const data = await client.query<{ viewer: { id: number } }>(
  `query Viewer { viewer { id } }`
);
```

`client.execute()` never throws and always returns the raw `{ data, errors }`.
The `query` / `mutate` helpers throw `GraphQLOperationError` on a hard failure —
see [Error handling](/guides/error-handling).

---
id: error-handling
title: Error handling
sidebar_position: 4
description: GraphQLOperationError and partial responses.
---

# Error handling

Services and the `query` / `mutate` / `queryByName` / `mutateByName` helpers
throw `GraphQLOperationError` **only when the response is a hard failure** —
the server returned errors *and no `data`*. When the server returns a partial
response (GraphQL's normal contract: `data` present *alongside* `errors`), the
data is returned and the errors are surfaced through the client's debug log
rather than thrown. If you need the raw `errors` array in the partial case,
call `client.execute()` directly — it never throws and always returns the raw
`{ data, errors }`.

```typescript
import { GraphQLOperationError } from '@propeller-commerce/propeller-sdk-v2';

try {
  const product = await productService.getProduct({ productId: 1 });
} catch (err) {
  if (err instanceof GraphQLOperationError) {
    // err.errors        — GraphQLErrorEntry[]
    // err.operationName — string | undefined
    // err.variables     — Record<string, any> | undefined
    // err.document      — the exact GraphQL query/mutation string that failed
    console.error('Operation failed:', err.operationName, err.errors);
    console.error('Query was:', err.document);
  } else {
    // Network, HTTP, or timeout error
    console.error('Request failed:', err);
  }
}
```

`err.document` carries the exact GraphQL document that produced the error —
useful for logging the failing query verbatim (e.g. when diagnosing schema
drift) without trawling the source.

HTTP errors (non-2xx) include the response body in the thrown message
(truncated to 500 chars) so upstream GraphQL parse errors surface clearly.

Set `throwOnPartialErrors: true` in
[client config](/configuration/client-config) to throw on partial responses
instead of debug-logging them.

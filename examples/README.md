# Propeller SDK v0.10.0 — Examples

Framework-integration and usage examples for `@propeller-commerce/propeller-sdk-v2`. These are
reference snippets to copy into your project, not a runnable app.

All examples use the v0.10.0 API:

- **`createClient(config)`** — create the client once, pass it explicitly to
  the tree-shakeable service factories (no global singleton). The legacy
  `initializeClient()` / `getClient()` still work but are deprecated.
- **Service factories** — `productService(client)`, `categoryService(client)`,
  etc. The `new XxxService(client)` class form remains as a thin wrapper.
- **Variables objects** — each service method takes a single object whose
  fields mirror the GraphQL operation's declared variables (including the
  schema-required `imageVariantFilters` on product/category/order operations).
  Methods that map 1:1 onto a single value keep their scalar signature
  (e.g. `loginService.login(input)`); zero-variable operations take no
  argument (e.g. `logoutService.logout()`).

## Files

| File | Shows |
| --- | --- |
| `react-example.tsx` | React: client + product/category/viewer with `getLocalized` |
| `vue-example.vue` | Vue 3 `<script setup>`: same flow + `createOrder` |
| `angular-example.ts` | Angular service wrapping the SDK with RxJS |
| `vanilla-js-example.js` / `.html` | Browser ES modules, no framework |
| `authentication-example.ts` | `loginService` login, token handling, async `isAuthenticated()` |
| `secure-proxy-example.ts` | Proxy vs. direct mode; inline `client.query` |
| `custom-graphql-example.ts` | `registerQuery`/`queryByName`, fragments, inline `execute` |

## Custom GraphQL operations

Filesystem auto-loading (`customQueriesPath`, `customFragmentsPath`,
`allowCustomOverride`, `reloadOperations()`) was **removed in v0.10.0**. To run
your own operations:

- Ad-hoc: `client.execute({ query, variables })` or `client.query(query, vars)`.
- Named/reusable: `client.registerQuery(name, str)` /
  `registerMutation` / `registerFragment`, then
  `client.queryByName(name, vars)` / `client.mutateByName(name, vars)`.
  Registered fragments are inlined into operations that spread them.

See `custom-graphql-example.ts` for working code.

## Install

```bash
npm install @propeller-commerce/propeller-sdk-v2
```

Then copy the relevant example into your project and adjust the endpoint /
credentials. See the [main README](../README.md) for the full API.

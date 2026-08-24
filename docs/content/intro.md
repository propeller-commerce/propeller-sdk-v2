---
id: intro
title: Propeller SDK v2
sidebar_label: Introduction
sidebar_position: 1
slug: /intro
description: TypeScript GraphQL SDK for the Propeller Commerce Platform.
---

# Propeller SDK v2

A TypeScript GraphQL client for the Propeller Commerce Platform. It ships a
typed service for every supported query and mutation — with the GraphQL
documents and fragments generated and bundled per operation, so you don't
write or maintain GraphQL yourself and only the operations you import are
pulled into your bundle.

- **Framework-agnostic.** Ships dual ESM + CJS builds. Works with Next.js,
  Vite, Webpack, Node, and bare browsers.
- **No runtime GraphQL parser.** Fragments are inlined at build time; the SDK
  does not depend on the `graphql` package at runtime.
- **Type-safe.** Full TypeScript definitions for every enum, input, and
  response type. (Types describe the entity's full shape; an operation
  populates only the fields it selects — see
  [Operation variables and return shapes](/guides/operation-variables).)
- **Secure-by-default config.** Defaults to proxy mode so API keys can stay
  server-side.

## Where to next

- New here? Start with [Installation](/getting-started/installation) then the
  [Quick start](/getting-started/quick-start).
- Building an app? Follow [Build a frontend](/getting-started/build-a-frontend).
- Need a specific type or service? Browse the
  [API Reference](/api/).

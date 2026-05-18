---
id: history
title: Spent one-shot codemods
sidebar_label: Codemod history
description: Provenance for the one-time AST transforms run during v0.10.0.
---

# docs/history — spent one-shot codemods

These scripts are **not part of the build or any npm script**. They are
one-time AST transforms that were run once during the v0.10.0 work; their
output is committed to the repo. They are kept for provenance — so the *how*
of a large mechanical change is reviewable — not because anything runs them.
Do not wire them into the pipeline.

| Script | What it did | Output committed in |
| --- | --- | --- |
| [`codemod-align-variables.js`](https://github.com/propeller-commerce/propeller-sdk-v2/blob/main/docs/scripts/history-codemods/codemod-align-variables.js) | Converted misaligned service methods to take a single `variables: <Op>Variables` object mirroring the GraphQL operation's declared variables (the alignment pass). | commit `45e9b8d` |
| [`codemod-typed-results.js`](https://github.com/propeller-commerce/propeller-sdk-v2/blob/main/docs/scripts/history-codemods/codemod-typed-results.js) | Threaded `runOperation<{ <rootField>: <ReturnType> }>` into every service `runOperation(...)` call so `result.data.<field>` is typed rather than `any`. | commit `23684c0` |

The shared classifier they used, `scripts/lib/align-classify.js`, **is** still
live — it's also imported by `scripts/build-graphql-bundle.js` (the kept-name
reservation for generated `<Op>Variables`). Only the codemod *drivers* are
spent; the classifier is not.

If a similar bulk transform is ever needed again, copy from here as a starting
point rather than resurrecting these in `scripts/`.

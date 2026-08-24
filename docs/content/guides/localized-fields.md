---
id: localized-fields
title: Localized fields
sidebar_position: 5
description: Reading localized arrays with getLocalized.
---

# Localized fields

For localized arrays (e.g. `product.names: LocalizedString[]`), use the
`getLocalized` helper:

```typescript
import { getLocalized } from '@propeller-commerce/propeller-sdk-v2';

const name = getLocalized(product.names, 'EN', 'NL');         // EN, fall back to NL, then first
const desc = getLocalized(product.descriptions, locale);      // no fallback
```

The exact signature is in the [API Reference](/api/).

# Branding assets — PLACEHOLDERS, replace before go-live

The files in this directory are **placeholders** so the site builds and the
layout is correct. Replace them with the real Propeller Commerce brand assets
before the site is considered production-ready.

| File | Used for | Required | Replace with |
| --- | --- | --- | --- |
| `propeller-logo.svg` | Navbar logo (light mode) | ~28px tall, transparent | The real light-mode Propeller logo. Canonical source on the main docs site is `https://docs.propeller-commerce.com/img/propeller-logo.png`. |
| `propeller-logo-dark.svg` | Navbar logo (dark mode) | ~28px tall, transparent | The real dark-mode Propeller logo (`.../img/propeller-logo-dark.png`). |
| `favicon_v2.png` | Browser favicon | 32×32 (or larger square) PNG | The real favicon (`.../img/favicon_v2.png`). Currently a 1×1 transparent placeholder. |
| `social-card.png` | Open Graph / social share image | 1200×630 PNG | The real social card. Currently a 1×1 transparent placeholder. |

If you replace the SVG logos with PNGs, update `logo.src` / `logo.srcDark` in
`docs/docusaurus.config.ts` accordingly.

The brand primary color is set to a placeholder Propeller-blue in
`docs/src/css/custom.css` (`--ifm-color-primary`). Update it to the exact
Propeller brand hex when known.

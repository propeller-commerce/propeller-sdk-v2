import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

// NOTE: The SDK API reference is generated as static Markdown by
// `docs/scripts/gen-api.js` (standalone TypeDoc) and made MDX-safe by
// `docs/scripts/sanitize-api-mdx.js` BEFORE this build runs (see package.json
// `predocgen`/`prebuild`). It is deliberately NOT wired as a build-time
// `docusaurus-plugin-typedoc` plugin — that plugin regenerates on every build
// and would clobber the sanitize pass, and MDX fails on the raw output before
// any remark transform can run.

const config: Config = {
  title: 'Propeller SDK v2',
  tagline: 'TypeScript GraphQL SDK for the Propeller Commerce Platform',
  favicon: 'img/favicon_v2.png',

  // GitHub Pages project site — keep the existing public URL unchanged.
  url: 'https://propeller-commerce.github.io',
  baseUrl: '/propeller-sdk-v2/',
  organizationName: 'propeller-commerce',
  projectName: 'propeller-sdk-v2',
  trailingSlash: false,

  // Generated TypeDoc cross-links are noisy; do not fail the whole CI build.
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'content', // docs live in docs/content (config files sit in docs/)
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
        sitemap: {changefreq: 'weekly', priority: 0.5},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Propeller',
        src: 'img/propeller-logo.png',
        srcDark: 'img/propeller-logo-dark.png',
        height: 30,
      },
      items: [
        {to: '/intro', label: 'Getting Started', position: 'left'},
        {to: '/guides/services', label: 'Guides', position: 'left'},
        {to: '/changelog', label: 'Changelog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/intro'},
            {label: 'Configuration', to: '/configuration/client-config'},
            {label: 'Guides', to: '/guides/services'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'API Reference', to: '/api/'},
            {label: 'Changelog', to: '/changelog'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/propeller-commerce/propeller-sdk-v2',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/@propeller-commerce/propeller-sdk-v2',
            },
            {
              label: 'Propeller Docs',
              href: 'https://docs.propeller-commerce.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Propeller Commerce. <a href="https://propeller-commerce.com/legal">Legal</a> · <a href="https://propeller-commerce.com/cookies">Cookie Policy</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'graphql'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        // Algolia DocSearch swap path: remove this plugin and add
        // `algolia: { appId, apiKey, indexName }` to themeConfig once
        // credentials are provisioned (preset-classic ships the component).
      },
    ],
  ],
};

export default config;

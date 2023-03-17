// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atala PRISM V2',
  tagline: 'Unlock the power of your identity with Atala PRISM V2',
  url: 'https://docs.atalaprism.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'input-output-hk',
  projectName: 'atala-prisim-docs',
  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./documentation/docs/sidebars.js'),
          path: './documentation/docs'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'atala-prism-building-blocks/prism-agent/service/api/http/prism-agent-openapi-spec.yaml',
            route: '/agent-api/',
          },
          {
            spec: "atala-prism-products/enterprise-services/api-spec/enterprise-services-spec.yml",
            route: "/enterprise-api/"
          }
        ]
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'atala-prism-building-blocks/docs/docusaurus',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./atala-prism-building-blocks/docs/docusaurus/sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wallet-sdk-ts',
        path: 'atala-prism-wallet-sdk-ts/docs',
        routeBasePath: 'wallet-sdk-ts',
        sidebarPath: require.resolve('./atala-prism-wallet-sdk-ts/docs/sidebars.js'),
      },
    ],
    require.resolve('docusaurus-lunr-search')
  ],

  themes: ["docusaurus-theme-openapi-docs", '@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Atala PRISM V2',
        logo: {
          alt: 'Atala PRISM logo',
          src: 'img/atala-prism-logo-suite-light.svg',
          srcDark: "img/atala-prism-logo-suite-dark.svg",
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/tutorials/',
            label: 'Tutorials',
            position: 'left',
            activeBaseRegex: `/tutorials/`
          },
          {
            type: 'dropdown',
            label: 'API',
            position: 'left',
            items: [
              {
                to: '/agent-api/',
                label: 'Agent API',
                activeBaseRegex: `/agent-api/`
              },
              {
                to: '/enterprise-api/',
                label: 'Enterprise API',
                activeBaseRegex: `/enterprise-api/`
              }
            ],
          },
          {
            type: 'dropdown',
            label: 'SDK',
            position: 'left',
            items: [
              {
                label: 'Swift Wallet SDK',
                href: 'https://swift-docs.atalaprism.io/',
              },
              {
                to: '/wallet-sdk-ts',
                label: 'Wallet SDK TypeScript',
                activeBaseRegex: `/wallet-sdk-ts/`
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'PRISM DID Spec',
                href: 'https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atala PRISM V2.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

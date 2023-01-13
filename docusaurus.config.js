// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Atala PRISM V2',
  tagline: 'Unlock the power of your identity with Atala PRISM V2',
  url: 'https://docs.atalaprism-v2.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'input-output-hk',
  projectName: 'atala-prisim-docs',

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
          sidebarPath: require.resolve('./docs-sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'docs-tutorials',
        routeBasePath: 'docs-tutorials',
        sidebarPath: require.resolve('./tutorials-sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-agent-api',
        path: 'docs-agent-api',
        routeBasePath: 'docs-agent-api',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-enterprise-api',
        path: 'docs-enterprise-api',
        routeBasePath: 'docs-enterprise-api',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-wallet-sdk',
        path: 'docs-wallet-sdk',
        routeBasePath: 'docs-wallet-sdk',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-enterprise-sdk',
        path: 'docs-enterprise-sdk',
        routeBasePath: 'docs-enterprise-sdk',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    require.resolve('docusaurus-lunr-search')
  ],

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
            to: '/docs-tutorials/',
            label: 'Tutorials',
            position: 'left',
            activeBaseRegex: `/docs-tutorials/`
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                to: '/docs-agent-api/agent-api-intro',
                label: 'PRISM Agent API',
                activeBaseRegex: `/docs-agent-api/`
              },
              {
                to: '/docs-wallet-sdk/wallet-sdk-intro',
                label: 'Wallet SDK',
                activeBaseRegex: `/docs-wallet-sdk/`
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Enterprise',
            position: 'left',
            items: [
              {
                to: '/docs-enterprise-api/enterprise-api-intro',
                label: 'Enterprise API',
                activeBaseRegex: `/docs-enterprise-api/`
              },
              {
                to: '/docs-enterprise-sdk/enterprise-sdk-intro',
                label: 'Enterprise SDK',
                activeBaseRegex: `/docs-enterprise-sdk/`
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Playground',
                href: 'Playground',
              },
              {
                label: 'PRISM DID Spec',
                href: 'https://hackmd.io/-i6On7_LTRamKhEzYA6Hcw?view',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

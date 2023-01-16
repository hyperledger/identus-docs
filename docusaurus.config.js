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
          sidebarPath: require.resolve('./documentation/docs/sidebars.js'),
          path: './documentation/docs'
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
        path: 'documentation/tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./documentation/tutorials/sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'agent-api',
        path: 'documentation/api/agent-api',
        routeBasePath: 'agent-api',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'enterprise-api',
        path: 'documentation/api/enterprise-api',
        routeBasePath: 'enterprise-api',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wallet-sdk',
        path: 'documentation/sdk/wallet-sdk',
        routeBasePath: 'wallet-sdk',
        sidebarPath: require.resolve('./documentation/sdk/wallet-sdk/sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'enterprise-sdk',
        path: 'documentation/sdk/enterprise-sdk',
        routeBasePath: 'enterprise-sdk',
        sidebarPath: require.resolve('./documentation/sdk/enterprise-sdk/sidebars.js'),
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
                to: '/agent-api/agent-api-intro',
                label: 'Agent API',
                activeBaseRegex: `/agent-api/`
              },
              {
                to: '/enterprise-api/enterprise-api-intro',
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
                to: '/wallet-sdk/wallet-sdk-intro',
                label: 'Wallet SDK',
                activeBaseRegex: `/wallet-sdk/`
              },
              {
                to: '/enterprise-sdk/enterprise-sdk-intro',
                label: 'Enterprise SDK',
                activeBaseRegex: `/enterprise-sdk/`
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
                href: 'https://hackmd.io/-i6On7_LTRamKhEzYA6Hcw?view',
              },
            ],
          },
          {
            label: 'Changelog',
            href: 'http://atala-prism-v2-changelog-page.io',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              // {
              //   label: 'Getting Started',
              //   to: '/docs/getting-started',
              // },
              // {
              //   label: 'Tutorials',
              //   to: '/tutorials/index',
              // },
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
        copyright: `Copyright © ${new Date().getFullYear()} Atala PRISM V2.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

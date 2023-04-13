// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const {useColorMode} = require('@docusaurus/theme-common');
// const {colorMode} = useColorMode()
// console.log(colorMode)
/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Unlock the power<br/>of your digital<br/> identity.',
    tagline: 'ATALA PRISM V2 Docs',
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

        /**
         * @type {import('redocusaurus').PresetEntry}
         */
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
                        route: "/enterprise-api/",
                    }
                ],
                theme: {
                    primaryColor: "#5559F2",
                    theme: {
                        codeBlock: {
                            backgroundColor: "#1D2939"
                        },
                        rightPanel: {
                            backgroundColor: "transparent"
                        }
                    },
                }
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

    themes: ["docusaurus-theme-openapi-docs", '@docusaurus/theme-mermaid', "docusaurus-theme-redoc"],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            navbar: {
                logo: {
                    alt: 'Atala PRISM logo',
                    src: 'img/logo-navbar-dark.png',
                    srcDark: "img/logo-navbar-light.png",
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
                                label: 'Wallet SDK Swift',
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
                copyright: `© ${new Date().getFullYear()} Atala PRISM. All rights reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },

        },

};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

const path = require('path')
// const {useColorMode} = require('@docusaurus/theme-common');
// const {colorMode} = useColorMode()
// console.log(colorMode)
/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Unlock the power of your digital identity.',
    tagline: 'IDENTUS Docs',
    // url: 'https://docs.atalaprism.io',
    url: 'https://hyperledger.github.io/identus-docs/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Hyperledger',
    projectName: 'identus-docs',
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
            })
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
                        spec: 'identus-cloud-agent/cloud-agent/service/api/http/cloud-agent-openapi-spec.yaml',
                        route: '/agent-api/',
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
                path: 'identus-cloud-agent/docs/docusaurus',
                routeBasePath: 'tutorials',
                sidebarPath: require.resolve('./identus-cloud-agent/docs/docusaurus/sidebars.js'),
            },
        ],
        require.resolve('docusaurus-lunr-search'),
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'identus-edge-agent-sdk-ts',
                path: 'identus-edge-agent-sdk-ts/docs',
                routeBasePath: 'identus-edge-agent-sdk-ts',
                sidebarPath: require.resolve('./identus-edge-agent-sdk-ts/docs/sidebars.js'),
            },
        ]
    ],

    themes: ["docusaurus-theme-openapi-docs", '@docusaurus/theme-mermaid', "docusaurus-theme-redoc"],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        {
            navbar: {
                logo: {
                    alt: ' Identus logo',
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
                            }
                        ]
                    },
                    {
                        type: 'dropdown',
                        label: 'SDK',
                        position: 'left',
                        items: [
                            {
                                label: 'Edge Agent SDK Swift',
                                href: 'https://hyperledger.github.io/identus-edge-agent-sdk-swift/documentation/edgeagentsdk/',
                            },
                            {
                                to: '/identus-edge-agent-sdk-ts/sdk',
                                label: 'Edge Agent SDK Typescript',
                                activeBaseRegex: `/identus-edge-agent-sdk-ts/sdk`
                            },
                            {
                                label: 'Edge Agent SDK Kotlin Multiplatform',
                                href: 'https://hyperledger.github.io/identus-edge-agent-sdk-kmp/',
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
                            {
                                label: 'Architecture Decision Records',
                                href: 'pathname:///adrs',
                            },
                        ],
                    },
                ],
            },
            footer: {
                copyright: `© ${new Date().getFullYear()} Identus. All rights reserved.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },

        },

};

module.exports = config;

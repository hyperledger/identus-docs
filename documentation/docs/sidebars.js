/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  docsSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Concepts',
        description: 'Learn about the most important SSI concepts!'
      },
      items: [
        'concepts/what-is-identity',
        'concepts/digital-wallets',
        'concepts/verifiable-data',
        'concepts/trust-frameworks',
      ],
    },
    {
      type: 'category',
      label: 'Atala PRISM V2',
      link: {
        type: 'generated-index',
        title: 'Atala PRISM V2',
        description: 'Learn about the Atala PRISM ecosystem!'
      },
      collapsed: false,
      items: [
        'atala-prism/overview',
        {
          type: 'category',
          label: 'PRISM Cloud Agent',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'PRISM Cloud Agent',
            description: 'Learn about the Atala PRISM Cloud Agent!'
          },
          items: [
            'atala-prism/prism-cloud-agent/overview',
            'atala-prism/prism-cloud-agent/building-blocks'
          ]
        },
        {
          type: 'category',
          label: 'PRISM Cloud Agent Enterprise',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'PRISM Cloud Agent Enterprise',
            description: 'Learn about the Atala PRISM Cloud Agent Enterprise Services!'
          },
          items: [
            'atala-prism/prism-cloud-agent-enterprise/overview',
            'atala-prism/prism-cloud-agent-enterprise/onboard',
            'atala-prism/prism-cloud-agent-enterprise/authenticate',
            {
              type: 'category',
              label: 'Manage',
              collapsed: true,
              link: {
                type: 'generated-index',
                title: 'Manage',
                description: 'Learn about the Manage product!'
              },
              items: [
                'atala-prism/prism-cloud-agent-enterprise/manage/overview',
                'atala-prism/prism-cloud-agent-enterprise/manage/definitions',
                'atala-prism/prism-cloud-agent-enterprise/manage/setup',
                'atala-prism/prism-cloud-agent-enterprise/manage/schemas',
                'atala-prism/prism-cloud-agent-enterprise/manage/policies',
              ]
            }
          ]
        },
        'atala-prism/prism-node',
        'atala-prism/prism-mediator',
        {
          type: 'category',
          label: 'Infrastructure',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: 'PRISM Infrastructure',
            description: 'Learn about the Atala PRISM Infrastructure!'
          },
          items: [
            'atala-prism/infrastructure/hosted-instances',
            'atala-prism/infrastructure/running-agent-locally'
          ]
        },
        'atala-prism/getting-help'
      ],
    },
  'concepts/glossary'
  ],
};

module.exports = sidebars;

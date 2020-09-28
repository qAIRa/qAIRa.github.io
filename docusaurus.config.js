module.exports = {
  title: 'Documentation for qAIRaMap and qAIRaMapAPI',
  tagline: 'Know your air, become the change.',
  url: 'https://qAIRa.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'qAIRa', // Usually your GitHub org/user name.
  projectName: 'qAIRa.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/qairito_buena.gif',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'APIresources/',
          activeBasePath: 'APIresources',
          label: 'API',
          position: 'left',
        },
        {
          to: 'WEBresources/',
          activeBasePath: 'WEBresources',
          label: 'WEB',
          position: 'left',
        },
        {
          href: 'https://github.com/qAIRa',
          label: 'GitHub',
          position: 'right',
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
              label: 'API Guide',
              to: 'APIresources/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/qaira_drones/',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/qaira-publico/shared_invite/zt-e49w6375-9_vVmPdf8nFvXWfIvkagxw',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/qAIRadrones/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/qAIRa',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} qAIRa, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/qAIRa/Documentation-OpenSource',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'companyMod',
        homePageId: 'companyMod',
        path:'./APIresources',
        routeBasePath: 'APIresources',
  //      include: ['**/*.md'],
        sidebarPath: require.resolve('./sidebarsResources.js'),
        disableVersioning: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'example',
        homePageId: 'example',
        path:'./WEBresources',
        routeBasePath: 'WEBresources',
      //  include: ['**/*.md'],
        sidebarPath: require.resolve('./sidebars2.js'),
        disableVersioning: true,
      },
    ],
  ],
};

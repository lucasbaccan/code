// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Code',
  tagline: 'Dicas, manhas, truques para o dia a dia',
  url: 'https://new.code.lucasbaccan.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lucasbaccan', // Usually your GitHub org/user name.
  projectName: 'code', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Não estou utilizando o docs do componente classic
        blog: false, // Não estou utilizando o blog do componente classic
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    // Adicionar componente docs - /docs
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs/docs',
        sidebarPath: require.resolve('./sidebarsDocs.js'),
        editUrl: 'https://github.com/lucasbaccan/code/tree/master/',
        routeBasePath: 'docs',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // Adicionar componente docs - /tutorial
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'docs/tutorial',
        sidebarPath: require.resolve('./sidebarsTutorial.js'),
        editUrl: 'https://github.com/lucasbaccan/code/tree/master/',
        routeBasePath: 'tutorial',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // Adicionar componente docs - /info
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'info',
        path: 'docs/info',
        sidebarPath: require.resolve('./sidebarsInfo.js'),
        editUrl: 'https://github.com/lucasbaccan/code/tree/master/',
        routeBasePath: 'info',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // Adicionar componente docs - /off
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'off',
        path: 'docs/off',
        sidebarPath: require.resolve('./sidebarsOff.js'),
        editUrl: 'https://github.com/lucasbaccan/code/tree/master/',
        routeBasePath: 'off',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // Adicionar componente docs - /exemplos
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exemplos',
        path: 'docs/exemplos',
        sidebarPath: require.resolve('./sidebarsExemplos.js'),
        editUrl: 'https://github.com/lucasbaccan/code/tree/master/',
        routeBasePath: 'exemplos',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // Adicionar componente blog - /blog
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog',
        path: 'blog',
        editUrl: 'https://github.com/lucasbaccan/code/tree/master/',
        routeBasePath: 'blog',
        showReadingTime: true,
        blogSidebarCount: 'ALL',
        postsPerPage: 10,
      },
    ],
    // Adicionar componente search
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: [
          "/docs",
          "/info",
          "/tutorial",
        ],
        blogRouteBasePath: [
          "/blog"
        ],
        language: ["pt"],
        // highlightSearchTermsOnTargetPage: true,
        docsPluginIdForPreferredVersion: "docs",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true, // respect user's OS color scheme preference
      },
      // announcementBar: {
      //   id: 'banner',
      //   content:
      //     '⭐️ Novos conteúdos estão em desenvolvimento, então não se esqueça de adicionar aos favoritos! ⭐️',
      //   backgroundColor: '#c41508',
      //   textColor: '#fff',
      // },
      navbar: {
        title: 'Code',
        logo: {
          alt: 'Logo',
          src: 'img/programmer.svg',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            to: 'tutorial/',
            activeBasePath: 'tutorial',
            label: 'Tutorial',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: 'info/',
            activeBasePath: 'info',
            label: 'Info',
            position: 'right',
          },
          {
            href: 'https://github.com/lucasbaccan/code',
            // label: 'GitHub', // Utilizar o ícone do GitHub
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus and ❤.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

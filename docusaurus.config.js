module.exports = {
  title: 'Code',
  tagline: 'Dicas, manhas, truques para o dia a dia',
  url: 'https://code.lucasbaccan.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'lucasbaccan', // Usually your GitHub org/user name.
  projectName: 'code', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'banner',
      content:
        '⭐️ Novos conteúdos estão em desenvolvimento, então não se esqueça de adicionar aos favoritos! ⭐️',
      backgroundColor: '#c41508',
      textColor: '#fff',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    image: 'img/programmer.png',
    navbar: {
      hideOnScroll: false,
      title: 'Code',
      logo: {
        alt: 'Logo',
        src: 'img/programmer.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Menu',
          position: 'left',
        },
        {
          to: 'off-topic/',
          activeBasePath: 'off-topic',
          label: 'Off-topic',
          position: 'left',
        },
        // {
        //   to: 'info/',
        //   activeBasePath: 'info',
        //   label: 'Off-topics',
        //   position: 'left',
        // },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/lucasbaccan/code/',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link', 'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
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
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus and ❤.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'docs',
          path: 'docs/docs',
          editUrl: 'https://github.com/lucasbaccan/code/edit/master/',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/lucasbaccan/code/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'), {
        blogRouteBasePath: '/blog', // must correspond to the base route path configured for the blog plugin
        docsRouteBasePath: '/', // must correspond to the base route path configured for the docs plugin
        indexBlog: true, // whether to index blog pages
        indexDocs: true, // whether to index docs pages
        indexPages: true, // whether to index static pages
        // /404.html is never indexed
        language: "pt" // language of your documentation, see next section
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exemplos',
        path: 'docs/exemplos',
        editUrl: 'https://github.com/lucasbaccan/code/edit/master/',
        routeBasePath: 'exemplos',
        sidebarPath: require.resolve('./sidebarsExemplos.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'info',
        path: 'docs/info',
        editUrl: 'https://github.com/lucasbaccan/code/edit/master/',
        routeBasePath: 'info',
        sidebarPath: require.resolve('./sidebarsInfo.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'off-topic',
        path: 'docs/off-topic',
        editUrl: 'https://github.com/lucasbaccan/code/edit/master/',
        routeBasePath: 'off-topic',
        sidebarPath: require.resolve('./sidebarsOffTopic.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ]
  ],
};

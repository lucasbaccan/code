import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";

const config: Config = {
  title: "Code",
  tagline: "Dicas, manhas, truques para o dia a dia",
  url: "https://code.lucasbaccan.com.br",
  baseUrl: "/",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  organizationName: "lucasbaccan",
  projectName: "code",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // Adicionar componente docs - /docs
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs",
        path: "docs/docs",
        sidebarPath: "./sidebarsDocs.ts",
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "docs",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // Adicionar componente docs - /cursos
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cursos",
        path: "docs/cursos",
        sidebarPath: "./sidebarsCursos.ts",
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "cursos",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // Adicionar componente docs - /tutorial
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tutorial",
        path: "docs/tutorial",
        sidebarPath: "./sidebarsTutorial.ts",
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "tutorial",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // Adicionar componente docs - /info
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "info",
        path: "docs/info",
        sidebarPath: "./sidebarsInfo.ts",
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "info",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // Adicionar componente docs - /off
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "off",
        path: "docs/off",
        sidebarPath: "./sidebarsOff.ts",
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "off",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // Adicionar componente docs - /exemplos
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "exemplos",
        path: "docs/exemplos",
        sidebarPath: require.resolve("./sidebarsExemplos.js"),
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "exemplos",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      } satisfies DocsOptions,
    ],
    // Adicionar componente blog - /blog
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog",
        path: "blog",
        editUrl: "https://github.com/lucasbaccan/code/tree/master/",
        routeBasePath: "blog",
        showReadingTime: true,
        blogSidebarCount: "ALL",
        postsPerPage: 10,
      } satisfies BlogOptions,
    ],
    // Adicionar componente search
    [
      "@easyops-cn/docusaurus-search-local",
      {
        docsRouteBasePath: ["/docs", "/cursos", "/info", "/tutorial"],
        blogRouteBasePath: ["/blog"],
        language: ["en"],
        // highlightSearchTermsOnTargetPage: true,
        docsPluginIdForPreferredVersion: "docs",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
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
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Code",
      logo: {
        alt: "Logo",
        src: "img/programmer.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "cursos/",
          activeBasePath: "cursos",
          label: "Cursos",
          position: "left",
        },
        {
          to: "tutorial/",
          activeBasePath: "tutorial",
          label: "Tutorial",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "info/",
          activeBasePath: "info",
          label: "Info",
          position: "right",
        },
        {
          href: "https://github.com/lucasbaccan/code",
          // label: 'GitHub', // Utilizar o ícone do GitHub
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus and ❤.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // https://prismjs.com/#supported-languages
      additionalLanguages: ["docker", "json", "makefile"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

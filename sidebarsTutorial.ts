import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "index",
    "git/guia_rapido",
    "git/index",
    {
      type: "category",
      label: "Site com docusaurus",
      collapsed: true,
      items: [
        "site_docusaurus/introducao",
        "site_docusaurus/criando_projeto",
        "site_docusaurus/personalizando_site",
        "site_docusaurus/publicando",
        "site_docusaurus/criando_paginas",
        "site_docusaurus/github_actions",
      ],
    },
    "sql/index",
  ],
};

export default sidebars;

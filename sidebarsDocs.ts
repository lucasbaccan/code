import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "index",
    "dicionario/index",
    {
      type: "category",
      label: "Ferramentas online",
      collapsed: false,
      items: [
        "ferramentas_online/index",
        "ferramentas_online/explainshell_com/index",
        "ferramentas_online/gitignore_io/index",
        "ferramentas_online/http_cat/index",
      ],
    },
  ],
};

export default sidebars;

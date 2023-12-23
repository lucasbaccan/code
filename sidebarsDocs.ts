import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "index",
    {
      type: "category",
      label: "Ferramentas online",
      collapsed: false,
      items: [
        "ferramentas_online/explainshell_com/index",
        "ferramentas_online/gitignore_io/index",
      ],
    },
    "programas/index",
  ],
};

export default sidebars;

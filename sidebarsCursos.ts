import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "index",
    {
      type: "link",
      href: "https://pos-unipar.github.io/",
      label: "Pós Web e Mobile",
    },
    "curso-dev/index",
    {
      type: "category",
      label: "Pick 2024",
      collapsed: true,
      items: [
        "pick-2024/index",
        "pick-2024/day0/index",
        "pick-2024/day1/index",
        "pick-2024/day2/index",
      ],
    },
  ],
};

export default sidebars;

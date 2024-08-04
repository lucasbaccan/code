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
        {
          type: "category",
          label: "Docker",
          collapsed: true,
          items: [
            "pick-2024/docker/day1/index",
            "pick-2024/docker/day2/index",
            "pick-2024/docker/day3/index",
            "pick-2024/docker/day4/index",
            "pick-2024/docker/day5/index",
            "pick-2024/docker/day6/index",
          ],
        },
        {
          type: "category",
          label: "Kubernets",
          collapsed: true,
          items: [
            "pick-2024/kubernets/day1/index",
            "pick-2024/kubernets/day2/index",
            "pick-2024/kubernets/day3/index",
            "pick-2024/kubernets/day4/index",
            "pick-2024/kubernets/day5/index",
            "pick-2024/kubernets/day6/index",
            "pick-2024/kubernets/day7/index",
          ],
        },
      ],
    },
  ],
};

export default sidebars;

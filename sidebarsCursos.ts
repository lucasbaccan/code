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
          label: "Kubernetes",
          collapsed: true,
          items: [
            "pick-2024/kubernetes/day1/index",
            "pick-2024/kubernetes/day2/index",
            "pick-2024/kubernetes/day3/index",
            "pick-2024/kubernetes/day4/index",
            "pick-2024/kubernetes/day5/index",
            "pick-2024/kubernetes/day6/index",
            "pick-2024/kubernetes/day7/index",
            "pick-2024/kubernetes/day8/index",
            "pick-2024/kubernetes/day9/index",
            "pick-2024/kubernetes/day10/index",
            "pick-2024/kubernetes/day11/index",
            // "pick-2024/kubernetes/day12/index",
            // "pick-2024/kubernetes/day13/index",
            // "pick-2024/kubernetes/day14/index",
          ],
        },
      ],
    },
  ],
};

export default sidebars;

import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Center({
  children,
  fontSize = "15px",
  color = "#999",
  bgColor = null,
  bgColorDark = null,
}) {
  const { colorMode, setColorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  let style = {
    textAlign: "center",
    fontSize,
    color,
  };

  if (bgColor && !isDarkTheme) {
    style.backgroundColor = bgColor;
  }

  if (bgColorDark && isDarkTheme) {
    style.backgroundColor = bgColorDark;
  }

  return <div style={style}>{children}</div>;
}

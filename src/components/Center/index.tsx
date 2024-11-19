import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Center({
  children,
  fontSize = "15px",
  color = "#999",
  bgColor = null,
  bgColorDark = null,
}) {
  // if (bgColor && !isDarkTheme) {
  //   style.backgroundColor = bgColor;
  // }

  // if (bgColorDark && isDarkTheme) {
  //   style.backgroundColor = bgColorDark;
  // }

  // Verificar qual o tema atual
  const { colorMode } = useColorMode();
  // Verificar se o tema atual é dark
  const isDarkTheme = colorMode === "dark";

  // Verificar se teve alteração no tema
  const bgColorTheme = isDarkTheme ? bgColorDark : bgColor;

  // Estilizar o componente
  const style = {
    textAlign: "center",
    fontSize,
    color,
    backgroundColor: bgColorTheme,
  };

  return <div style={style}>{children}</div>;
}

import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Center({
  children,
  fontSize = "15px",
  color = "#999",
  bgColor = null,
  bgColorDark = null,
}) {
  const { colorMode } = useColorMode();
  const [bgThemeColor, setBgColor] = useState(null);

  useEffect(() => {
    if (colorMode === "dark") {
      setBgColor(bgColorDark || null);
    } else {
      setBgColor(bgColor || null);
    }
  }, [colorMode]);

  const style = {
    textAlign: "center",
    fontSize,
    color,
    backgroundColor: bgThemeColor,
  };

  return <div style={style}>{children}</div>;
}

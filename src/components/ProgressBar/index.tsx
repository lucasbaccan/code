import React, { useEffect, useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import {
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
} from "../ColorGenerator/colorUtils";

const ProgressBar: React.FC<{ value: number }> = ({ value = 0 }) => {
  const { colorMode } = useColorMode();
  const [primaryColor, setPrimaryColor] = useState(LIGHT_PRIMARY_COLOR);
  const backgroundColor = `var(--ifm-color-secondary)`;

  useEffect(() => {
    if (colorMode === "dark") {
      setPrimaryColor(DARK_PRIMARY_COLOR);
    } else {
      setPrimaryColor(LIGHT_PRIMARY_COLOR);
    }
  }, [colorMode]);

  const containerStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: backgroundColor,
    borderRadius: "5px",
    overflow: "hidden",
    height: "10px",
    display: "flex",
    alignItems: "center",
  };

  const fillerStyle: React.CSSProperties = {
    height: "100%",
    width: `${value}%`,
    backgroundColor: primaryColor,
    textAlign: "right",
    borderRadius: "inherit",
    transition: "width 0.2s ease-in",
  };

  const labelStyle: React.CSSProperties = {
    paddingLeft: "10px",
    fontWeight: "bold",
    lineHeight: "1em",
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={containerStyle}>
        <div style={fillerStyle}></div>
      </div>
      <span style={labelStyle}>{`${value}%`}</span>
    </div>
  );
};

export default ProgressBar;

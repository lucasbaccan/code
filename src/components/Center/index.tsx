import React from "react";

export default function Center({
  children,
  fontSize = "15px",
  color = "#999",
}) {
  return <div style={{ textAlign: "center", fontSize, color }}>{children}</div>;
}

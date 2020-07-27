import React from "react";

export default function Workspace({ children }) {
  return (
    <div
      className="Workspace"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        flexGrow: "1",
        flexShrink: "0",
        overflowX: "auto",
      }}
    >
      {children}
    </div>
  );
}

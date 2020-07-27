import React from "react";

export default function Box({ children }) {
  return (
    <div
      className="Box"
      style={{
        width: "fit-content",
        height: "140px",
        padding: "15px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#3a539b",
      }}
    >
      {children}
    </div>
  );
}

import React from "react";

export default function Pantry({ children }) {
  return (
    <div
      className="Pantry"
      style={{
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
}

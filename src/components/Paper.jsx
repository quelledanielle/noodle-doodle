import React from "react";

export default function Paper({ width, height }) {
  return (
    <div
      className="Paper"
      style={{
        width: width,
        height: height,
        margin: "40px auto",

        backgroundColor: "#e0e0e0",
      }}
    ></div>
  );
}

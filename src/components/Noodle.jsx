import React from "react";

const svg = require("../images/elbow.svg");

export default function Noodle() {
  return (
    <div
      className="Noodle"
      style={{
        width: "80px",
      }}
    >
      <img src={svg} alt="Elbow macaroni" />
    </div>
  );
}

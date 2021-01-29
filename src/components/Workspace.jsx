import React from "react";

import Paper from "./Paper";

export default function Workspace({
  paperDimensions,
  noodlePositions,
  updateNoodlePosition,
}) {
  return (
    <div
      className="Workspace"
      title="Workspace"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        flexGrow: "1",
        flexShrink: "0",
        overflowX: "auto",
      }}
    >
      <Paper
        width={`${paperDimensions.width}px`}
        height={`${paperDimensions.height}px`}
        noodlePositions={noodlePositions}
        updateNoodlePosition={updateNoodlePosition}
      />
    </div>
  );
}

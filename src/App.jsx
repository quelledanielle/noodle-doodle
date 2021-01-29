import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Pantry from "./components/Pantry";
import Workspace from "./components/Workspace";

export default function App(props) {
  const [noodlePositions, setNoodlePositions] = useState({});

  function updateNoodlePosition({ id, position }) {
    if (!noodlePositions[id]) {
      id = Object.keys(noodlePositions).length;
    }
    setNoodlePositions({
      ...noodlePositions,
      [id]: position,
    });
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="App"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",

          display: "flex",
          flexDirection: "row",

          backgroundColor: "#454545",
        }}
      >
        <Pantry />
        <Workspace
          paperDimensions={{
            width: 1100,
            height: 850,
          }}
          noodlePositions={noodlePositions}
          updateNoodlePosition={updateNoodlePosition}
        />
      </div>
    </DndProvider>
  );
}

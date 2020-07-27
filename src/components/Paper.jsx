import React from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../Constants";
import Noodle from "./Noodle";

function renderNoodle(position, i) {
  return <Noodle key={i} id={i} position={position} />;
}

export default function Paper({
  width,
  height,
  noodlePositions,
  updateNoodlePosition,
}) {
  const [, drop] = useDrop({
    accept: ItemTypes.NOODLE,
    drop: (item, monitor) => {
      updateNoodlePosition(monitor.getDifferenceFromInitialOffset(), item.id);
    },
  });
  return (
    <div
      className="Paper"
      ref={drop}
      style={{
        position: "relative",
        width: width,
        height: height,
        margin: "40px auto",

        backgroundColor: "#fff",
      }}
    >
      {noodlePositions.map(renderNoodle)}
    </div>
  );
}

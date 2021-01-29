import React from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../Constants";
import Noodle from "./Noodle";

export default function Paper({
  width,
  height,
  noodlePositions,
  updateNoodlePosition,
}) {
  const [, drop] = useDrop({
    accept: ItemTypes.NOODLE,
    drop: (item, monitor) => {
      updateNoodlePosition({
        id: item.id,
        position: monitor.getSourceClientOffset(),
      });
    },
  });
  function renderNoodle([id, position]) {
    return <Noodle key={id} id={id} position={position} />;
  }
  return (
    <div
      className="Paper"
      title="Paper"
      ref={drop}
      style={{
        width: width,
        height: height,
        margin: "40px auto",

        backgroundColor: "#fff",
      }}
    >
      {Object.entries(noodlePositions).map(renderNoodle)}
    </div>
  );
}

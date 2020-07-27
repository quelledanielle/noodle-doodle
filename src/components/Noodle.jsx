import React from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "../Constants";

const svg = require("../images/elbow.svg");

export default function Noodle({ id, position }) {
  const [, drag] = useDrag({
    item: {
      id: id,
      type: ItemTypes.NOODLE,
    },
  });

  let styles = { width: "80px" };
  if (position) {
    styles = {
      position: "absolute",
      top: `${position.y}px`,
      left: `${position.x}px`,
      ...styles,
    };
  }

  return (
    <div id={`Noodle${id}`} className="Noodle" ref={drag} style={styles}>
      <img src={svg} alt="Elbow macaroni" />
    </div>
  );
}

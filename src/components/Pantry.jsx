import React from "react";

import Box from "./Box";
import Noodle from "./Noodle";

export default function Pantry() {
  return (
    <div
      className="Pantry"
      title="Pantry"
      style={{
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0.2)",
      }}
    >
      <Box>
        <Noodle id="Boxed" />
      </Box>
    </div>
  );
}

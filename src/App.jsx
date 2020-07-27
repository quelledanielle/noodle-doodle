import React, { Component } from "react";

import Box from "./components/Box";
import Noodle from "./components/Noodle";
import Pantry from "./components/Pantry";
import Paper from "./components/Paper";
import Workspace from "./components/Workspace";

class App extends Component {
  render() {
    return (
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
        <Pantry>
          <Box>
            <Noodle />
          </Box>
        </Pantry>
        <Workspace>
          <Paper width="1100px" height="850px" />
        </Workspace>
      </div>
    );
  }
}

export default App;

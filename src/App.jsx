import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Pantry from "./components/Pantry";
import Workspace from "./components/Workspace";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noodlePositions: [
        { x: 100, y: 250 },
        { x: 110, y: 300 },
        { x: 340, y: 250 },
        { x: 550, y: 550 },
      ],
    };
  }

  updateNoodlePosition(offset, i) {
    this.setState((state) => {
      const previousPosition = state.noodlePositions[i];
      const position = {
        x: previousPosition.x + offset.x,
        y: previousPosition.y + offset.y,
      };
      return {
        noodlePositions: [
          ...state.noodlePositions.slice(0, i),
          position,
          ...state.noodlePositions.slice(i + 1),
        ],
      };
    });
  }

  render() {
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
            noodlePositions={this.state.noodlePositions}
            updateNoodlePosition={(deltaOffset, i) =>
              this.updateNoodlePosition(deltaOffset, i)
            }
          />
        </div>
      </DndProvider>
    );
  }
}

export default App;

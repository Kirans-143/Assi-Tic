import React from "react";
import Board from "./Component/board";
import "./styles/box.css";
import "./styles/board.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}

export default App;

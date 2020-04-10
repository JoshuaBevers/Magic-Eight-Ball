import React from "react";
import "./App.css";
import EightBall from "./components/eightBall";
import Question from "./components/question";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Question />
        <EightBall />
      </header>
    </div>
  );
}

export default App;

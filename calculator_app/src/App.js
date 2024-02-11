import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);

  const clickHandler = (e) => {
    // console.log(e.target);
    const value = e.target.value;
    if (value === "C") {
      setInput("");
      setAnswer("");
      setIsAnswering(false);
    } else if (value === "=") {
      setIsAnswering(true);
      if (input === "0/0") {
        setAnswer("NaN");
      } else if (input === "1/0") {
        setAnswer("Infinity");
      } else if (input === "") {
        setAnswer("Error");
      } else {
        console.log("calculating");
        setAnswer((prevInput) => eval(input));
      }
    } else if (value) {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input readOnly type="text" value={input}></input>
      {isAnswering && <p className="answer">{answer}</p>}
      <div
        onClick={(e) => {
          clickHandler(e);
        }}
        className="container"
      >
        <button type="button" value={7}>
          7
        </button>
        <button type="button" value={8}>
          8
        </button>
        <button type="button" value={9}>
          9
        </button>
        <button type="button" value={"+"}>
          +
        </button>
        <button type="button" value={4}>
          4
        </button>
        <button type="button" value={5}>
          5
        </button>
        <button type="button" value={6}>
          6
        </button>
        <button type="button" value={"-"}>
          -
        </button>
        <button type="button" value={1}>
          1
        </button>
        <button type="button" value={2}>
          2
        </button>
        <button type="button" value={3}>
          3
        </button>
        <button type="button" value={"*"}>
          *
        </button>
        <button type="button" value={"C"}>
          C
        </button>
        <button type="button" value={0}>
          0
        </button>
        <button type="button" value={"="}>
          =
        </button>
        <button type="button" value={"/"}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;

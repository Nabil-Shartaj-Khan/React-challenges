import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const calcButton = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
    ".",
  ];

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    const id = e.target.id;

    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      handleSubmit();
    } else {
      setValue((val) => val + id);
    }
  };

  const handleSubmit = () => {
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (e) {
      alert("Input numbers only!");
    }
  };

  return (
    <div className="app">
      <h1 className="text-center pt-3">Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value}></input>
      </form>
      <div className="container" onClick={handleClick}>
        {calcButton.map((item, index) => (
          <button id={item} key={index} className="btn btn-success fs-4">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

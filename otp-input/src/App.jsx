import { useState, useEffect } from "react";
import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);
  const [missing, setMissing] = useState(emptyArr);
  const CODE = "1234";
  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    if (!Number(val)) return;

    if (index < inputs.length - 1) {
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const handleOnKeyDown = (e, index) => {
    console.log(index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    if (!Number(data) || data.length != inputs.length) return;
    const pasteCode = data.split("");
    setInputs(pasteCode);
    refs[inputs.length - 1].current.focus();
  };

  const handleSubmit = () => {
    const missed = inputs
      .map((item, i) => {
        if (item === "") {
          return i;
        }
      })
      .filter((item) => item || item === 0);
    setMissing(missed);
    if (missed.length) {
      return;
    }
    const userInput = inputs.join("");
    const isMatch = userInput === CODE;
    const msg = isMatch ? "Code appears to be valid" : "Wrong code!";
    alert(msg);
  };
  return (
    <>
      <h1 className="text-center pt-3">Two factor code input</h1>
      <div className="otp-input text-center">
        {emptyArr.map((item, i) => {
          return (
            <input
              value={inputs[i]}
              key={i}
              ref={refs[i]}
              type="text"
              onPaste={handlePaste}
              onChange={(e) => handleInputChange(e, i)}
              maxLength="1"
              onKeyDown={(e) => {
                handleOnKeyDown(e, i);
              }}
              className={missing.includes(i) ? "error" : ""}
            ></input>
          );
        })}
      </div>
      <div className="text-center pt-4">
        <button className="btn btn-info" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;

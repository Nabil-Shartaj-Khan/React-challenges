import { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  const [redoList, setRedoList] = useState([]);
  const [history, setHistory] = useState([]);
  const maintainHistory = (key, prev, curr) => {
    console.log(key, prev, curr);
    const obj = {
      action: key,
      prev,
      curr,
    };

    const newHistory = [...history];
    newHistory.unshift(obj);
    setHistory(newHistory);
  };
  const handleClick = (key) => {
    const val = parseInt(key);
    maintainHistory(key, value, val + value);
    const actionMessage = val > 0 ? `+${val}` : `${val}`;
    setValue((existingValue) => existingValue + val);
    setMessage(
      `${actionMessage} is ${val > 0 ? "incremented" : "decremented"}.`
    );
  };
  const handleRedo = () => {
    if (redoList.length > 0) {
      const copyRedoList = [...redoList];
      const poppedValue = copyRedoList.pop();
      const { action, prev, curr } = poppedValue;
      setValue(curr);

      const newHistory = [...history];
      newHistory.unshift({ action, prev: curr, curr: prev });
      setHistory(newHistory);

      setRedoList(copyRedoList);
      setMessage("Redo performed!");
      maintainHistory;
      action, prev, curr;
    }
  };
  const handleUndo = () => {
    if (history.length > 0) {
      const copyHistory = [...history];
      const firstItem = copyHistory.shift();
      setValue(firstItem.prev);
      const copyRedoList = [...redoList];
      copyRedoList.unshift(firstItem);
      setRedoList(copyRedoList);
      setHistory(copyHistory);
      setMessage("Undo performed!");
    }
  };
  return (
    <div>
      <h1 className="text-center pt-3 text-danger">Undo-able Counter</h1>
      <div className="action-button">
        <button className="btn btn-primary mt-3 ms-" onClick={handleUndo}>
          Undo
        </button>
        <button className="btn btn-primary mt-3 ms-3" onClick={handleRedo}>
          Redo
        </button>
      </div>
      <div className="user-action">
        {[-100, -10, -1].map((btn) => (
          <button
            className="btn btn-success ms-3 mt-3"
            onClick={() => {
              handleClick(btn);
            }}
            key={btn}
          >
            {btn}
          </button>
        ))}
        <h4 className="text-center mt-3 mx-3 fs-1">{value}</h4>
        {[100, 10, 1].map((btn) => (
          <button
            className="btn btn-success ms-3 mt-3"
            onClick={() => {
              handleClick(btn);
            }}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>
      <p className="fs-5 lead">{message}</p>
      <div className="history">
        {history.map((item) => {
          return (
            <div className="row">
              <hr />
              <div>{`Prev: ${item.prev} => Curr: ${item.curr}`}</div>
              <div>{`Clicked: ${item.action}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

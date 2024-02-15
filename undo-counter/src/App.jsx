import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-center pt-3 text-danger">Undo-able Counter</h1>
      <div className="action-button">
        <button className="btn btn-primary mt-3 ms-">Undo</button>
        <button className="btn btn-primary mt-3 ms-3">Redo</button>
      </div>
      <div className="user-action">
        {[-100, -10, -1].map((btn) => (
          <button className="btn btn-success ms-3 mt-3" key={btn}>
            {btn}
          </button>
        ))}
        <div>0</div>
        {[100, 10, 1].map((btn) => (
          <button className="btn btn-success ms-3 mt-3" key={btn}>
            {btn}
          </button>
        ))}
      </div>
      <div className="history">Will be updated soon</div>
    </div>
  );
}

export default App;

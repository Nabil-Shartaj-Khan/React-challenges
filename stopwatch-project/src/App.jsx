import "./App.css";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-primary pt-4">Countdown timer</h1>
      <div className="input-container py-3">
        <div className="input-box pb-2">
          <input id="hour" placeholder="HH"></input>
          <input id="minute" placeholder="MM"></input>
          <input id="second" placeholder="SS"></input>
        </div>
        <button className="btn btn-primary px-4 py-3">Start</button>
      </div>
    </div>
  );
}

export default App;

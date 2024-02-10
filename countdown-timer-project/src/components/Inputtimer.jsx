const Inputtimer = ({ handleInput, handleStart }) => {
  return (
    <div className="input-container py-3">
      <div className="input-box pb-2">
        <input onChange={handleInput} id="hour" placeholder="HH"></input>
        <input onChange={handleInput} id="minute" placeholder="MM"></input>
        <input onChange={handleInput} id="second" placeholder="SS"></input>
      </div>
      <button className="btn btn-primary px-4 py-3" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Inputtimer;

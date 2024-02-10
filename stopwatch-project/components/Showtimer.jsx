const Showtimer = (props) => {
  const {
    hour,
    minute,
    second,
    isPaused,
    handlePause,
    handleReset,
    handleResume,
  } = props;
  return (
    <div className="show-container">
      <div className="timer-box">
        <div>{hour < 10 ? `0${hour}` : hour}</div>
        <span>:</span>
        <div>{minute < 10 ? `0${minute}` : minute}</div>
        <span>:</span>
        <div>{second < 10 ? `0${second}` : second}</div>
      </div>
      <div className="action-button">
        {!isPaused && (
          <button
            className="timer-button me-2 btn btn-success"
            onClick={handlePause}
          >
            Pause
          </button>
        )}
        {isPaused && (
          <button
            className="timer-button me-2 btn btn-success"
            onClick={handleResume}
          >
            Resume
          </button>
        )}
        <button
          className="timer-button ms-1 btn btn-danger"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Showtimer;

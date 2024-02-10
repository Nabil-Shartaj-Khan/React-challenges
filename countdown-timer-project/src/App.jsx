import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Inputtimer from "../components/Inputtimer";
import Showtimer from "../components/Showtimer";

function App() {
  const [isStart, setisStart] = useState(false);
  const [isPaused, setisPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerId, setTimerid] = useState(0);
  const handleStart = () => {
    if (hour < 0 || minute < 0 || second <= 0) {
      alert("Time can't be empty!");
      return;
    } else {
      setisStart(true);
    }
  };

  const handleReset = () => {
    setisStart(false);
    resetTimer();
  };

  const resetTimer = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(timerId);
  };
  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id == "hour") {
      setHour(value);
    } else if (id == "minute") {
      setMinute(value);
    } else {
      setSecond(value);
    }
  };

  const handlePause = () => {
    setisPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setisPaused(false);
    runTimer(second, minute, hour);
  };

  const runTimer = (s, m, h, tid) => {
    if (s > 0) {
      setSecond((s) => s - 1);
    } else if (s == 0 && m > 0) {
      setMinute((m) => m - 1);
      setSecond(59);
    } else {
      setHour((h) => h - 1);
      setMinute(59);
      setSecond(59);
    }
    if (s === 0 && (m === 0) & (h === 0)) {
      handleReset();

      alert("time is up!");
      clearInterval(tid);
      setisStart(false);
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(second, minute, hour, tid);
      }, 1000);
      setTimerid(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hour, minute, second]);

  return (
    <div className="text-center">
      <h1 className="text-primary pt-4">Countdown timer</h1>
      <span className="fs-4 lead">
        Input in Hour, Minute and Seconds format
      </span>
      {!isStart && (
        <Inputtimer handleInput={handleInput} handleStart={handleStart} />
      )}

      {isStart && (
        <Showtimer
          hour={hour}
          minute={minute}
          second={second}
          isPaused={isPaused}
          handlePause={handlePause}
          handleReset={handleReset}
          handleResume={handleResume}
        />
      )}
    </div>
  );
}

export default App;

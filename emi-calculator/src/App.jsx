import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [years, setYears] = useState(0);
  const [interest, setInterest] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principal") {
      setPrinciple(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYears(value);
    }
  };

  const calculateEmi = () => {
    let r = interest;
    if (principle && r && years) {
      r = r / 12 / 100;
      const calcPower = Math.pow(1 + r, years * 12);
      const total = (principle * r * calcPower) / (calcPower - 1);
      setEmi(Math.round(total));
    }
  };

  useEffect(() => {
    calculateEmi();
  }, [principle, years, interest]);

  return (
    <div className="calc">
      <h1 className="text-center pt-3 py-4">Emi calculator</h1>
      <div className="input ">
        <p className="fs-5 fw-bold">Principal:</p>
        <input
          type="number"
          id="principal"
          placeholder="principal...."
          onChange={handleInputChange}
        ></input>
        <p className="fs-5 fw-bold">Interest:</p>
        <input
          type="number"
          id="interest"
          placeholder="interest...."
          onChange={handleInputChange}
        ></input>
        <p className="fs-5 fw-bold">Years:</p>
        <input
          type="number"
          id="years"
          placeholder="years...."
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="output">
        <span className="">Your EMI is: {emi} BDT</span>
      </div>
    </div>
  );
}

export default App;

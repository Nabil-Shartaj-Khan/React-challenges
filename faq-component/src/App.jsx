import { useState } from "react";
import FAQcomp from "./components/FAQcomp";

function App() {
  return (
    <>
      <h1 className="text-center mt-3">FAQ Component</h1>
      <h3 className="text-center pb-5">Frequently asked question</h3>
      <FAQcomp />
    </>
  );
}

export default App;

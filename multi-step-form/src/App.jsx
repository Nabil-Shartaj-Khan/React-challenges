import { useState } from "react";

import "./App.css";
import Userform from "./components/Userform";
import Userdetail from "./components/Userdetail";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "",
    },
  ];
  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [formSubmit, SetFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (index === forms.length - 1) {
      alert("Form submitted Successfully!");
      setIndex(0);
      SetFormSubmit(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  return (
    <div className="App">
      {formSubmit ? (
        <Userdetail formData={formData} />
      ) : (
        <div>
          <h1 className="text-center pt-3">Multi-step-form</h1>
          <Userform
            index={index}
            forms={forms}
            formData={formData}
            handleBack={handleBack}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default App;

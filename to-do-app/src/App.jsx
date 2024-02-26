import { useState } from "react";
import "./App.css";
import ShowTask from "./components/ShowTask";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <h1 className="text-center pt-3">To-do app</h1>
      <UserForm />
    </>
  );
}

export default App;

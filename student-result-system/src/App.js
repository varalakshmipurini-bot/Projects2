import "./App.css";
import AddStudent from "./components/AddStudent";
import React from "react";
import ResultForm from "./components/ResultForm";
import ResultList from "./components/ResultList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 Student Result Management System</h1>
      <ResultForm />
      <hr />
      <ResultList />
    </div>
  );
}

export default App;

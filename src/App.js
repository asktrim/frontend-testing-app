import React from "react";
import logo from "./logo.svg";
import InputContainer from "./components/inputcontainer";
import Items from "./components/items";
import "./App.css";

function App() {
  return (
    <div className="App">
      <InputContainer />
      <Items />
    </div>
  );
}

export default App;

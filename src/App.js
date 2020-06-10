import React from "react";
import "./styles/main.scss";
import Header from "./Components/Layouts/Header";
import Routes from "./Routes";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;

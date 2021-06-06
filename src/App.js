import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";


const App = () => {

  return (
    <div className={"container"}>
      <Header />
      <Main/>
    </div>
  );
};

export default App;

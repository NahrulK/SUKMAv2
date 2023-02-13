import React from "react";

import { Header, Footer, Slider, Category, Login } from "./containers";
import { Navbar } from "./components";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      {/* <Slider /> */}
      {/* <Category /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
};

export default App;

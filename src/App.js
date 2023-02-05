import React from "react";

import { Header, Footer } from "./containers";
import { Navbar } from "./components";

import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__background">
        <Navbar />
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default App;

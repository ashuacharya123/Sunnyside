import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  const [state, setstate] = useState("d");

  return (
    <>
      <input type="checkbox" id="check" />
      <div className="container">
        <div className="menu__container">
          <ul className="menu__content">
            <li id={state === "a" ? "active" : ""}>
              <a onClick={(e) => setstate("a")} href="#">
                About
              </a>
            </li>
            <li id={state === "b" ? "active" : ""}>
              <a onClick={(e) => setstate("b")} href="#">
                Services
              </a>
            </li>
            <li id={state === "c" ? "active" : ""}>
              <a onClick={(e) => setstate("c")} href="#">
                Projects
              </a>
            </li>
            <li id={state === "d" ? "active" : ""}>
              <a onClick={(e) => setstate("d")} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <Header />
          <Grid />
          <Clients />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

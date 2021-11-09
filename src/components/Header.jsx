import React, { useState } from "react";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import arrow from "../images/icon-arrow-down.svg";

const Header = () => {
  const [toggle, setToggle] = useState(0);
  return (
    <div className="header">
      <div className="header__upper">
        <img src={logo} alt="logo" className="logo" />
        <label
          htmlFor="check"
          onClick={(e) => setToggle(!toggle)}
          id={toggle ? "toggle" : ""}
        >
          <img src={menu} alt="menu" className="menu" />
        </label>
      </div>
      <div className="header__lower">
        <h2>We are creatives</h2>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
    </div>
  );
};

export default Header;

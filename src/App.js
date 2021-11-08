import logo from "./images/logo.svg";
import "./App.css";
import header__img from "./images/mobile/image-header.jpg";
import menu from "./images/icon-hamburger.svg";
import egg from "./images/mobile/image-transform.jpg";
import arrow from "./images/icon-arrow-down.svg";

function App() {
  return (
    <>
      <input type="checkbox" id="check" />
      <div className="container">
        <div className="menu__container">
          <ul className="menu__content">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="header">
            <img src={header__img} alt="header" className="header__img" />
            <div className="header__upper">
              <img src={logo} alt="logo" className="logo" />
              <label for="check">
                <img src={menu} alt="menu" className="menu" />
              </label>
            </div>
            <div className="header__lower">
              <h2>We are creatives</h2>
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
          </div>

          <div className="grid__container">
            <img src={egg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

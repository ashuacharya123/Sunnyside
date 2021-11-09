import React from "react";

import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import insta from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import img1 from "../images/mobile/image-gallery-milkbottles.jpg";
import img2 from "../images/mobile/image-gallery-orange.jpg";
import img3 from "../images/mobile/image-gallery-cone.jpg";
import img4 from "../images/mobile/image-gallery-sugar-cubes.jpg";

const Footer = () => {
  return (
    <>
      <div className="images">
        <img src={img1} alt="pic" />
        <img src={img2} alt="pic" />
        <img src={img3} alt="pic" />
        <img src={img4} alt="pic" />
      </div>

      <section className="footer">
        <div className="footer__container">
          <img src={logo} alt="logo" />
          <ul className="footer__links">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
          <div className="footer__social__links">
            <img src={fb} alt="fb" />
            <img src={insta} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

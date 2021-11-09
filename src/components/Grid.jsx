import React from "react";

import egg from "../images/mobile/image-transform.jpg";
import red__glass from "../images/mobile/image-stand-out.jpg";

const Grid = () => {
  return (
    <div className="grid__container">
      <div className="grid__item">
        <div className="flex">
          <img src={egg} alt="egg" />
          <div>
            <h3>Transform your brand</h3>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>
      </div>

      <div className="grid__item">
        <div className="flex">
          <img src={red__glass} alt="glass_image" />
          <div>
            <h3>Stand out to the right audience</h3>
            <p>
              Using a collaborate formula of designers, researchers,
              photographers, vediographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>

      <div className="grid__item">
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>

      <div className="grid__item">
        <h3 className="h3">Photography</h3>
        <p className="p">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Grid;

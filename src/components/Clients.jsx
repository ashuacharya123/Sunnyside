import React from "react";
import pp1 from "../images/image-emily.jpg";
import pp2 from "../images/image-thomas.jpg";
import pp3 from "../images/image-jennie.jpg";

const Clients = () => {
  return (
    <section className="clients">
      <h3 className="clients__heading">Client testimonials</h3>

      <div className="clients__card">
        <img src={pp1} alt="dp" />
        <p className="clients__card__text"></p>
        <h2 className="clients__card__name">
          Emily R. <span>Marketing Director</span>
        </h2>
      </div>

      <div className="clients__card">
        <img src={pp2} alt="dp" />
        <p className="clients__card__text"></p>
        <h2 className="clients__card__name">
          Emily R. <span>Marketing Director</span>
        </h2>
      </div>

      <div className="clients__card">
        <img src={pp3} alt="dp" />
        <p className="clients__card__text"></p>
        <h2 className="clients__card__name">
          Emily R. <span>Marketing Director</span>
        </h2>
      </div>
    </section>
  );
};

export default Clients;

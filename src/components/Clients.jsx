import React from "react";
import pp1 from "../images/image-emily.jpg";
import pp2 from "../images/image-thomas.jpg";
import pp3 from "../images/image-jennie.jpg";

const Clients = () => {
  return (
    <section className="clients">
      <h3 className="clients__heading">Client testimonials</h3>
      <div className="card">
        <div className="clients__card">
          <img src={pp1} alt="dp" />
          <p className="clients__card__text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h2 className="clients__card__name">
            Emily R. <span>Marketing Director</span>
          </h2>
        </div>

        <div className="clients__card">
          <img src={pp2} alt="dp" />
          <p className="clients__card__text">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience
          </p>
          <h2 className="clients__card__name">
            Thomas S. <span>Chief Operating Officer</span>
          </h2>
        </div>
        <div className="clients__card">
          <img src={pp3} alt="dp" />
          <p className="clients__card__text">
            Increadible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h2 className="clients__card__name">
            Jennie F. <span>Business Owner</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Clients;

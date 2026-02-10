import React from "react";
import GrowthImage from "../../assets/images/growth-paet.png";
import "./GrowthPartnership.css";

const GrowthPartnership = () => {
  return (
    <section className="growth-partnership">
      <div className="growth-partnership__content">
        <h2>More Than Services. A Growth Partnership.</h2>

        <p>
          We work alongside your teams to turn strategy into action and deliver
          measurable business outcomes.
        </p>

        <div className="growth-partnership__illustration">
          <img
            src={GrowthImage}
            alt="Growth partnership illustration"
          />
        </div>

        <button className="growth-partnership__cta">
          Explore Tailored Solutions →
        </button>
      </div>
    </section>
  );
};

export default GrowthPartnership;

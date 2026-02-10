import React from "react";
import "./IndustryHero.css";
import GlobeImg from "../../assets/images/globe.png";

const IndustryHero = () => {
  return (
    <section className="industry-hero">
      <div className="industry-hero-container">
        {/* Left Content */}
        <div className="industry-hero-content">
          <span className="industry-eyebrow">Industries</span>

          <h1>Sectors We Empower</h1>

          <p>
            Tailored solutions designed to address the unique challenges of
            diverse industries, helping organizations adapt, scale, and succeed
            in a rapidly evolving world.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="industry-hero-visual">
          <img
            src={GlobeImg}
            alt="Industries we serve"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;

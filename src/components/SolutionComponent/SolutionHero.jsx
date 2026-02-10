import React from "react";
import "./SolutionHero.css";
import SolutionHeroImg from "../../assets/images/solution-hero.jpg";

const SolutionHero = () => {
  return (
    <section className="solution-hero">
      <div className="solution-hero__container">
        {/* Left Content */}
        <div className="solution-hero__content">
          <h1>
            Solutions Tailored <br /> for Your Success
          </h1>

          <p>
            Discover the products and solutions designed to drive your business
            forward and achieve tangible results.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="solution-hero__visual">
          <img
            src={SolutionHeroImg}
            alt="Business solutions illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;

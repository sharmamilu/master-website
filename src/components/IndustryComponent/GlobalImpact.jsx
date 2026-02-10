import React from "react";
import "./GlobalImpact.css";
import GlobalImpactImg from "../../assets/images/globe.png";

const GlobalImpact = () => {
  return (
    <section className="global-impact">
      <div className="global-impact-container">
        {/* Left Visual */}
        <div className="impact-visual">
          <img
            src={GlobalImpactImg}
            alt="Global Impact"
          />
        </div>

        {/* Right Content */}
        <div className="impact-content">
          <h2>Driving Measurable Change Globally</h2>
          <p>
            Connecting innovative solutions with worldwide progress to deliver
            measurable outcomes across industries and regions.
          </p>

          <div className="impact-stats">
            <div className="stat-card">
              <h3>500+</h3>
              <span>Projects Delivered</span>
            </div>

            <div className="stat-card">
              <h3>99%</h3>
              <span>Client Retention</span>
            </div>

            <div className="stat-card">
              <h3>30+</h3>
              <span>Supported Countries</span>
            </div>
          </div>

          <button className="impact-cta">
            Explore Our Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;

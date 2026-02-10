import React from "react";
import "./IndustriesServe.css";

const industries = [
  {
    title: "Mining & Minerals",
    description:
      "Optimizing extraction, operations, and safety through intelligent digital solutions.",
    color: "blue",
    icon: "⛏️",
  },
  {
    title: "Media & Entertainment",
    description:
      "Empowering content creation, distribution, and audience engagement at scale.",
    color: "teal",
    icon: "🎬",
  },
  {
    title: "Industrial Equipment",
    description:
      "Enhancing manufacturing efficiency, asset tracking, and operational reliability.",
    color: "purple",
    icon: "⚙️",
  },
  {
    title: "Nanotechnology",
    description:
      "Supporting advanced research, precision engineering, and innovation-driven growth.",
    color: "orange",
    icon: "🧬",
  },
  {
    title: "Transport & Freight",
    description:
      "Improving logistics visibility, route optimization, and supply chain resilience.",
    color: "red",
    icon: "🚚",
  },
];

const IndustriesServe = () => {
  return (
    <section className="industries-serve">
      <div className="industries-container">
        <header className="industries-header">
          <h2>Industries We Serve</h2>
          <p>
            Delivering tailored solutions that address the unique challenges of
            diverse sectors across the global economy.
          </p>
        </header>

        <div className="industries-timeline">
          {industries.map((industry, index) => (
            <div key={index} className="industry-item">
              <div className={`industry-icon ${industry.color}`}>
                <span>{industry.icon}</span>
              </div>

              <div className="industry-content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </div>

              {index !== industries.length - 1 && (
                <span className="industry-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServe;

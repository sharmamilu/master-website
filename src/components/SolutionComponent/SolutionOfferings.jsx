import React from "react";
import "./SolutionOfferings.css";

const offerings = [
  {
    title: "Business Insights",
    description:
      "Transform information into actionable insights to support smarter decisions and long-term planning.",
    icon: "📊",
  },
  {
    title: "Operational Enablement",
    description:
      "Enhance efficiency, scalability, and reliability across your operations with structured solutions.",
    icon: "⚙️",
  },
  {
    title: "Strategy & Advisory",
    description:
      "Align goals, execution, and outcomes through expert guidance tailored to your organization.",
    icon: "🎯",
  },
  {
    title: "Process Transformation",
    description:
      "Modernize workflows and customer experiences to drive measurable performance improvements.",
    icon: "🔄",
  },
];

const SolutionOfferings = () => {
  return (
    <section className="solution-offerings">
      <div className="solution-offerings__container">
        {/* Heading */}
        <div className="solution-offerings__header">
          <h2>Empowering Your Business with Innovative Solutions</h2>
          <p>
            Explore a suite of solutions designed to meet diverse business needs
            and support sustainable growth across industries.
          </p>
        </div>

        {/* Cards */}
        <div className="solution-offerings__grid">
          {offerings.map((item, index) => (
            <div className="solution-offerings__card" key={index}>
              <div className="solution-offerings__icon">
                <span>{item.icon}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <span className="solution-offerings__link">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOfferings;

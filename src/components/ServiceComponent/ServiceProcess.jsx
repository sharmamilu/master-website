import React from "react";
import "./ServiceProcess.css";

const processSteps = [
  {
    title: "Discover & Align",
    description:
      "We deeply understand your business goals, challenges, and users to ensure complete alignment before execution.",
    icon: "🔍",
  },
  {
    title: "Design the Solution",
    description:
      "Develop tailored strategies and solutions that are specifically designed to meet your business needs.",
    icon: "💡",
  },
  {
    title: "Build & Implement",
    description:
      "Execute and build the solutions with precision, ensuring they function smoothly within your operations.",
    icon: "🛠️",
  },
  {
    title: "Optimize & Scale",
    description:
      "Continuously monitor, optimize, and scale the solutions for sustained growth and long-term success.",
    icon: "📈",
  },
];

const ServiceProcess = () => {
  return (
    <section className="service-process">
      <div className="service-process__header">
        <h2>Delivering Impact, Not Just Services</h2>
        <p>
          A structured, proven approach designed to create measurable business
          outcomes across industries.
        </p>
      </div>

      <div className="service-process__grid">
        {processSteps.map((step, index) => (
          <div className="process-card" key={index}>
            <div className="process-card__icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProcess;

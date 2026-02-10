import React from "react";
import "./ServiceOutcomes.css";

const outcomes = [
  {
    title: "Increased Efficiency",
    description: "Streamline your processes to enhance productivity.",
  },
  {
    title: "Revenue Growth",
    description: "Identify new opportunities and maximize profitability.",
  },
  {
    title: "Enhanced Customer Experience",
    description: "Improve customer interactions and satisfaction.",
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead with innovative solutions and strategies.",
  },
];

const ServiceOutcomes = () => {
  return (
    <section className="service-outcomes">
      <div className="service-outcomes__header">
        <h2>Driving Real Results for Your Business</h2>
        <p>
          Partner with us to experience measurable growth and success. Our
          services are designed to deliver tangible benefits for your business,
          helping you achieve your strategic objectives.
        </p>
      </div>

      <div className="service-outcomes__grid">
        {outcomes.map((item, index) => (
          <div className="outcome-card" key={index}>
            <div className="outcome-card__icon">✓</div>
            <div className="outcome-card__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOutcomes;

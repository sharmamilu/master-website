import React from "react";
import { BarChart3, Lock, Zap, Users, Check } from "lucide-react";
import "./ProductsShowcase.css";

const products = [
  {
    title: "Smart Analytics Platform",
    icon: <BarChart3 size={28} />,
    description:
      "Turn raw data into meaningful insights that support confident decision-making and measurable growth.",
    specs: [
      "Real-time insights & dashboards",
      "Predictive & trend analysis",
      "Custom reporting & exports",
    ],
    cta: "Learn More",
  },
  {
    title: "Secure Digital Workspace",
    icon: <Lock size={28} />,
    description:
      "A centralized and secure environment that enables teams to collaborate, manage assets, and scale efficiently.",
    specs: [
      "Enterprise-grade security",
      "Access & identity control",
      "Seamless collaboration tools",
    ],
    cta: "Explore Features",
  },
  {
    title: "Process Automation Suite",
    icon: <Zap size={28} />,
    description:
      "Streamline workflows, reduce manual effort, and improve operational efficiency across departments.",
    specs: [
      "Workflow automation",
      "System integrations",
      "Performance monitoring",
    ],
    cta: "View Capabilities",
  },
  {
    title: "Customer Engagement Hub",
    icon: <Users size={28} />,
    description:
      "Design meaningful customer journeys and deliver consistent experiences across multiple touchpoints.",
    specs: [
      "Omnichannel engagement",
      "Personalization engine",
      "Customer insights & analytics",
    ],
    cta: "Discover More",
  },
  {
    title: "Digital Transformation Hub",
    icon: <Zap size={28} />,
    description:
      "Harness the power of technology to transform your business and drive growth and success.",
    specs: [
      "Innovative solutions",
      "Digital transformation",
      "Business agility",
    ],
    cta: "Get Started",
  },
];

const ProductsShowcase = () => {
  return (
    <section className="products-showcase">
      <div className="products-showcase__container">
        {/* Header */}
        <div className="products-showcase__header">
          <h2>Discover Our Products</h2>
          <p>
            Explore flexible, scalable products designed to support diverse
            business needs and evolving market demands.
          </p>
        </div>

        {/* Product Grid */}
        <div className="products-showcase__grid">
          {products.map((product, index) => (
            <div className="products-showcase__card" key={index}>
              <div className="products-showcase__icon">{product.icon}</div>

              <h3>{product.title}</h3>
              <p className="products-showcase__description">
                {product.description}
              </p>

              <ul className="products-showcase__specs">
                {product.specs.map((spec, i) => (
                  <li key={i}>
                    <Check size={16} className="spec-icon" /> {spec}
                  </li>
                ))}
              </ul>

              <button className="products-showcase__cta">
                {product.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;

import React, { useState } from "react";
import "./IndustryUseCases.css";
import { 
  FaHeartbeat, 
  FaChartLine, 
  FaIndustry,
  FaTimes,
  FaCheckCircle,
  FaLightbulb,
  FaRocket 
} from "react-icons/fa";

const useCases = [
  {
    id: 1,
    title: "Healthcare & Wellness",
    description: "Improve operational efficiency, ensure compliance, and enhance service outcomes using intelligent digital systems.",
    icon: "health",
    color: "#10B981",
    details: {
      challenges: [
        "Fragmented patient data systems",
        "Compliance with HIPAA regulations",
        "Operational inefficiencies in patient care",
        "High administrative overhead"
      ],
      solutions: [
        "Unified Electronic Health Records (EHR)",
        "AI-powered diagnosis assistance",
        "Telemedicine platforms",
        "Patient monitoring systems"
      ],
      benefits: [
        "40% reduction in administrative costs",
        "99.9% compliance accuracy",
        "30% faster patient processing",
        "Improved patient satisfaction scores"
      ],
      technologies: ["AI/ML", "Cloud Computing", "IoT", "Blockchain"],
      caseStudy: "Implemented a comprehensive healthcare platform for a 500-bed hospital network, resulting in 35% operational efficiency improvement."
    }
  },
  {
    id: 2,
    title: "Finance & Business Services",
    description: "Enable accuracy, scalability, and transparency with secure platforms designed for regulated environments.",
    icon: "finance",
    color: "#3B82F6",
    details: {
      challenges: [
        "Manual reconciliation processes",
        "Regulatory compliance overhead",
        "Fraud detection inefficiencies",
        "Scalability limitations"
      ],
      solutions: [
        "Automated transaction processing",
        "Real-time compliance monitoring",
        "AI-based fraud detection",
        "Scalable microservices architecture"
      ],
      benefits: [
        "60% faster transaction processing",
        "Real-time compliance reporting",
        "95% fraud detection accuracy",
        "Unlimited scalability"
      ],
      technologies: ["Blockchain", "AI", "APIs", "Cloud Security"],
      caseStudy: "Developed a fintech platform processing $2B+ monthly transactions with 99.99% uptime and full regulatory compliance."
    }
  },
  {
    id: 3,
    title: "Manufacturing & Operations",
    description: "Streamline production workflows, improve forecasting, and optimize resource utilization across operations.",
    icon: "manufacturing",
    color: "#F59E0B",
    details: {
      challenges: [
        "Supply chain disruptions",
        "Quality control inconsistencies",
        "Production downtime",
        "Inventory management issues"
      ],
      solutions: [
        "IoT-enabled smart factories",
        "Predictive maintenance systems",
        "Supply chain optimization",
        "Real-time quality monitoring"
      ],
      benefits: [
        "25% reduction in downtime",
        "30% improvement in quality control",
        "20% cost reduction in supply chain",
        "45% faster time-to-market"
      ],
      technologies: ["IoT", "Predictive Analytics", "Robotics", "Cloud ERP"],
      caseStudy: "Transformed a manufacturing plant with IoT sensors, reducing unplanned downtime by 40% and increasing output by 28%."
    }
  },
];

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="industry-modal-overlay" onClick={onClose}>
      <div className="industry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <div className="modal-icon" style={{ backgroundColor: content.color }}>
            {content.icon === "health" && <FaHeartbeat />}
            {content.icon === "finance" && <FaChartLine />}
            {content.icon === "manufacturing" && <FaIndustry />}
          </div>
          <h2>{content.title}</h2>
          <p className="modal-subtitle">{content.description}</p>
        </div>

        <div className="modal-content">
          <div className="modal-grid">
            <div className="modal-card challenges">
              <h3><FaRocket /> Key Challenges</h3>
              <ul>
                {content.details.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="modal-card solutions">
              <h3><FaLightbulb /> Our Solutions</h3>
              <ul>
                {content.details.solutions.map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </div>

            <div className="modal-card benefits">
              <h3><FaCheckCircle /> Key Benefits</h3>
              <ul>
                {content.details.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="modal-card technologies">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {content.details.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-study">
            <h3>Success Story</h3>
            <p>{content.details.caseStudy}</p>
          </div>
        </div>

        <div className="modal-actions">
          <button className="modal-primary-btn" onClick={onClose}>
            Close
          </button>
          <button className="modal-secondary-btn">
            Download Case Study (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

const IndustryUseCases = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLearnMore = (useCase) => {
    setSelectedCase(useCase);
    setModalOpen(true);
  };

  return (
    <>
      <section className="industry-section">
        <div className="industry-container">
          {/* Header */}
          <div className="industry-header">
            <h2>Industry Use Cases</h2>
            <p>
              Solutions thoughtfully designed to adapt across industries and
              business models.
            </p>
          </div>

          {/* Cards */}
          <div className="industry-cards">
            {useCases.map((item) => (
              <div className="industry-card" key={item.id}>
                <div 
                  className="industry-icon"
                  style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}80)` }}
                >
                  {item.icon === "health" && <FaHeartbeat className="icon-svg" />}
                  {item.icon === "finance" && <FaChartLine className="icon-svg" />}
                  {item.icon === "manufacturing" && <FaIndustry className="icon-svg" />}
                </div>

                <div className="industry-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="industry-actions">
                    <button 
                      className="btn-primary"
                      onClick={() => handleLearnMore(item)}
                      style={{ background: item.color }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        content={selectedCase} 
      />
    </>
  );
};

export default IndustryUseCases;
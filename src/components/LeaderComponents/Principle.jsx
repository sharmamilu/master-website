import "./Principle.css";
import {
  Lightbulb,
  Users,
  TrendingUp,
  Scale,
} from "lucide-react";

const principles = [
  {
    title: "Visionary Thinking",
    description:
      "Anticipating change, challenging assumptions, and shaping the future.",
    icon: Lightbulb,
  },
  {
    title: "Empowering Teams",
    description:
      "Creating an environment where people grow, collaborate, and lead.",
    icon: Users,
  },
  {
    title: "Strategic Growth",
    description:
      "Driving sustainable progress through clarity, focus, and execution.",
    icon: TrendingUp,
  },
  {
    title: "Ethical Governance",
    description:
      "Leading with integrity, accountability, and long-term responsibility.",
    icon: Scale,
  },
];

export default function Principle() {
  return (
    <section className="principle-section">
      <div className="principle-container">
        {/* Header */}
        <div className="principle-header">
          <h2>Guiding Principles of Our Leadership</h2>
          <p>The values that drive our vision and success</p>
        </div>

        {/* Principles */}
        <div className="principle-grid">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="principle-card" key={index}>
                <div className="principle-icon">
                  <Icon size={32} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

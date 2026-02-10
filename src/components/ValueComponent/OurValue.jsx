import "./OurValue.css";

const valuesData = [
  {
    title: "In Our Work",
    description:
      "How we apply our values in daily operations and decision-making",
    points: [
      "Ethical decision-making frameworks",
      "Quality assurance processes",
      "Team collaboration tools and practices",
      "Innovation incubators and R&D",
      "Respectful communication protocols",
      "Sustainability initiatives",
    ],
    icon: "💼",
  },
  {
    title: "With Our Team",
    description:
      "How we cultivate our values within our organization and culture",
    points: [
      "Inclusive hiring practices",
      "Continuous learning programs",
      "Recognition and reward systems",
      "Mentorship and coaching",
      "Diversity and inclusion initiatives",
      "Work-life balance support",
    ],
    icon: "👥",
  },
  {
    title: "For Our Community",
    description:
      "How we extend our values to make a positive impact beyond our walls",
    points: [
      "Community service programs",
      "Pro bono work and donations",
      "Environmental conservation efforts",
      "Educational partnerships",
      "Local business support",
      "Volunteer time off policies",
    ],
    icon: "🌍",
  },
];

export default function OurValue() {
  return (
    <section className="our-values-section">
      <div className="our-values-header">
        <h2>Living Our Values</h2>
        <p>Putting our values into practice across all aspects of our work</p>
      </div>

      <div className="our-values-grid">
        {valuesData.map((item, index) => (
          <div className="value-card-container" key={index}>
            <div className="value-card-header">
              <span className="value-icon">{item.icon}</span>
              <h3>{item.title}</h3>
            </div>

            <p className="value-description">{item.description}</p>

            <ul>
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span className="bullet" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

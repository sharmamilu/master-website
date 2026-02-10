import "./Journey.css";

const journeyData = [
  {
    year: "2018",
    title: "Founded the Company",
    desc: "Founded the company and launched initial services.",
  },
  {
    year: "2020",
    title: "Growth & Expansion",
    desc: "Expanded client base and opened a new office.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    desc: "Launched flagship product and achieved industry recognition.",
  },
  {
    year: "2024",
    title: "Global Reach",
    desc: "Celebrating years of growth while serving global clients.",
  },
  {
    year: "2026",
    title: "Future Vision",
    desc: "Continuing innovation and building next-generation solutions.",
  },
];

const Journey = () => {
  return (
    <section className="journey">
      <div className="journey-header">
        <h2>Our Journey & Milestones</h2>
        <p>A history of continuous growth and innovation.</p>
      </div>

      <div className="journey-timeline">
        {journeyData.map((item, index) => (
          <div
            className={`journey-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
          >
            <div className="journey-content">
              <span className="journey-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <span className="journey-dot" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;

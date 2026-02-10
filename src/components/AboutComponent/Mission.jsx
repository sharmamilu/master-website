import "./Mission.css";
import targetIcon from "../../assets/icons/dartboard.svg";
import visionIcon from "../../assets/icons/vision.svg";
import valuesIcon from "../../assets/icons/settingicon.svg";

const missions = [
  {
    icon: targetIcon,
    title: "Our Mission",
    desc: "To deliver innovative solutions that empower businesses to achieve growth and operational excellence.",
  },
  {
    icon: visionIcon,
    title: "Our Vision",
    desc: "To be the trusted global leader in transformation and technological advancement.",
  },
  {
    icon: valuesIcon,
    title: "Core Values",
    desc: "Integrity, Innovation, Collaboration, and Excellence in everything we do.",
  },
];

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-header">
        <h2>Our Mission & Values</h2>
        <p>
          Guiding our purpose, shaping our culture, and driving our long-term
          success.
        </p>
      </div>

      <div className="mission-grid">
        {missions.map((item, index) => (
          <div className="mission-card" key={index}>
            <div className="mission-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;

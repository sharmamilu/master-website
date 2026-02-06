import "./Work.css";
import RocketIcon from "../../assets/icons/rocketicon.svg";
import GraphIcon from "../../assets/icons/graphicon.svg";
import NoteIcon from "../../assets/icons/noteicon.svg";
import LightBulbIcon from "../../assets/icons/bulbicon.svg";
const steps = [
  {
    title: "Consultation",
    desc: "We start by understanding your needs and goals.",
    icon: LightBulbIcon,
  },
  {
    title: "Planning & Strategy",
    desc: "We develop a customized plan tailored for your business.",
    icon: NoteIcon,
  },
  {
    title: "Implementation",
    desc: "We execute the plan with precision and expertise.",
    icon: RocketIcon,
  },
  {
    title: "Results & Improvement",
    desc: "We review outcomes and optimize for continuous success.",
    icon: GraphIcon,
  },
];

export default function Work() {
  return (
    <section className="how-we-work">
      <h2>How We Work</h2>
      <p className="subtitle">
        A simple and effective process designed to deliver the best results for
        your business.
      </p>

      <div className="steps-row">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={index}>
            <div className="step-card">
              <div className="icon">
                <img src={step.icon} alt={step.title} />
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>

            {index !== steps.length - 1 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

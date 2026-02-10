import "./ValuesInAction.css";

import cultureIcon from "../../assets/icons/growth.svg";
import innovationIcon from "../../assets/icons/growth.svg";
import impactIcon from "../../assets/icons/growth.svg";

const valuesInAction = [
  {
    title: "Living Our Culture",
    desc: "We foster integrity, respect, and accountability in every interaction — internally and externally.",
    icon: cultureIcon,
  },
  {
    title: "Turning Ideas Into Impact",
    desc: "Innovation is embedded in our workflow, enabling smarter solutions and continuous progress.",
    icon: innovationIcon,
  },
  {
    title: "Creating Meaningful Impact",
    desc: "Our decisions are guided by long-term value creation for customers, partners, and communities.",
    icon: impactIcon,
  },
];

const ValuesInAction = () => {
  return (
    <section className="values-action">
      <div className="values-action-header">
        <h2>Our Values in Action</h2>
        <p>
          Principles don’t matter unless they are practiced. This is how our
          values show up in our everyday work.
        </p>
      </div>

      <div className="values-action-grid">
        {valuesInAction.map((item, index) => (
          <div className="action-card" key={index}>
            <div className="action-icon">
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

export default ValuesInAction;

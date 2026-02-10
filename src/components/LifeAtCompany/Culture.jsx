import "./Culture.css";

import innovationIcon from "../../assets/icons/innovation.svg";
import balanceIcon from "../../assets/icons/balance.svg";
import growthIcon from "../../assets/icons/growth.svg";
import communityIcon from "../../assets/icons/community.svg";

const cultureData = [
  {
    title: "Innovation First",
    desc: "Fostering creativity and embracing bold ideas to solve challenges.",
    icon: innovationIcon,
  },
  {
    title: "Work-Life Harmony",
    desc: "Promoting flexibility for a fulfilling personal and professional life.",
    icon: balanceIcon,
  },
  {
    title: "Continuous Growth",
    desc: "Providing learning opportunities and career paths for ongoing development.",
    icon: growthIcon,
  },
  {
    title: "Community Focus",
    desc: "Giving back through initiatives that strengthen local connections.",
    icon: communityIcon,
  },
];

const Culture = () => {
  return (
    <section className="culture">
      <div className="culture-glass">
        <div className="culture-header">
          <h2>Our Vibrant Culture</h2>
          <p>Moments that define our spirit and shared success.</p>
        </div>

        <div className="culture-grid">
          {cultureData.map((item, index) => (
            <div className="culture-card" key={index}>
              <div className="culture-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;

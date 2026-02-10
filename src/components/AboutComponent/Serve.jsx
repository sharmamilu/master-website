import "./Serve.css";

import realEstate from "../../assets/images/serve/real-state.avif";
import manufacturing from "../../assets/images/serve/real-state.avif";
import technology from "../../assets/images/serve/real-state.avif";
import healthcare from "../../assets/images/serve/real-state.avif";

import shieldIcon from "../../assets/icons/shieldicon.svg";
import gearIcon from "../../assets/icons/settingicon.svg";
import cloudIcon from "../../assets/icons/settingicon.svg";
import healthIcon from "../../assets/icons/settingicon.svg";
import chartIcon from "../../assets/icons/settingicon.svg";
import cartIcon from "../../assets/icons/settingicon.svg";

const serveData = [
  {
    title: "Real Estate",
    image: realEstate,
    icon: shieldIcon,
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    icon: gearIcon,
  },
  {
    title: "Technology",
    image: technology,
    icon: cloudIcon,
  },
  {
    title: "Healthcare",
    image: healthcare,
    icon: healthIcon,
  }
];

const Serve = () => {
  return (
    <section className="serve">
      <div className="serve-header">
        <h2>Who We Serve</h2>
        <p>
          Partnering with leading businesses across diverse industries to drive
          growth and innovation.
        </p>
      </div>

      <div className="serve-grid">
        {serveData.map((item, index) => (
          <div className="serve-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="serve-overlay">
              <div className="serve-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Serve;

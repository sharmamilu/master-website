import "./Advantages.css";
import handshakeIcon from "../../assets/icons/handshake.svg";
import shieldIcon from "../../assets/icons/shieldicon.svg";
import dartboard from "../../assets/icons/dartboard.svg";
import settingIcon from "../../assets/icons/settingicon.svg";
const advantages = [
  {
    icon: dartboard,
    title: "Proven Expertise",
    desc: "Years of experience delivering successful results.",
    type: "image",
  },
  {
    icon: settingIcon,
    title: "Tailored Solutions",
    desc: "Customized strategies to meet your unique needs.",
    type: "image",
  },
  {
    icon: handshakeIcon,
    title: "Client-Centric Approach",
    desc: "Building strong partnerships focused on your success.",
    type: "image",
  },
  {
    icon: shieldIcon,
    title: "Reliable Support",
    desc: "Dedicated assistance for ongoing growth and development.",
    type: "image",
  },
];

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages-header">
        <h2>Our Key Advantages</h2>
        <p>
          Discover the benefits of working with us and how we can help you
          achieve your business goals.
        </p>
      </div>

      <div className="advantages-grid">
        {advantages.map((item, index) => (
          <div className="adv-card" key={index}>
            <div className="adv-icon">
              {item.type === "image" ? (
                <img src={item.icon} alt={item.title} className="icon-img" />
              ) : (
                item.icon
              )}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;

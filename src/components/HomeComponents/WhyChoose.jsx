import "./WhyChoose.css";

import BadgeIcon from "../../assets/icons/badge.svg";
import TimeIcon from "../../assets/icons/timeicon.svg";
import CustomerIcon from "../../assets/icons/customers.svg";
import HandshakeIcon from "../../assets/icons/handshake.svg";
const reasons = [
  {
    title: "Proven Track Record",
    desc: "A history of delivering successful satisfied client.",
    icon: BadgeIcon,
  },
  {
    title: "Customer Satisfaction",
    desc: "Prioritizing your needs and ensuring a positive experience.",
    icon: CustomerIcon,
  },
  {
    title: "Timely Delivery",
    desc: "Meeting deadlines and ensuring projects a delivered on time.",
    icon: TimeIcon,
  },
  {
    title: "Dedicated Partnership",
    desc: "A commitment to working closely with you every step of",
    icon: HandshakeIcon,
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>Why Choose Us?</h2>
      <p className="subtitle">
        Trusted by businesses worldwide, we are committed to delivering
        exceptional quality and support.
      </p>

      <div className="reasons-row">
        {reasons.map((item, index) => (
          <div className="reason-item" key={index}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

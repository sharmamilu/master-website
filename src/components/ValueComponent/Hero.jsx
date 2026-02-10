import { useEffect, useRef, useState } from "react";
import "./Hero.css";

import innovationIcon from "../../assets/icons/bulbicon.svg";
import integrityIcon from "../../assets/icons/balance.svg";
import collaborationIcon from "../../assets/icons/balance.svg";
import customerIcon from "../../assets/icons/community.svg";
import learningIcon from "../../assets/icons/customers.svg";
import excellenceIcon from "../../assets/icons/growth.svg";
import agilityIcon from "../../assets/icons/balance.svg";
import diversityIcon from "../../assets/icons/bulbicon.svg";
import accountabilityIcon from "../../assets/icons/bulbicon.svg";

const valuesData = [
  {
    title: "Innovation & Growth",
    desc: "Driving progress through creativity and continuous improvement.",
    icon: innovationIcon,
  },
  {
    title: "Integrity & Trust",
    desc: "Fostering transparency and earning confidence in every action.",
    icon: integrityIcon,
  },
  {
    title: "Collaboration & Success",
    desc: "Achieving more together through teamwork and shared goals.",
    icon: collaborationIcon,
  },
  {
    title: "Customer First",
    desc: "Putting customer needs at the heart of everything we do.",
    icon: customerIcon,
  },
  {
    title: "Continuous Learning",
    desc: "Encouraging growth through knowledge sharing and upskilling.",
    icon: learningIcon,
  },
  {
    title: "Excellence",
    desc: "Striving for the highest standards in quality and performance.",
    icon: excellenceIcon,
  },
  {
    title: "Agility",
    desc: "Adapting quickly to change in a fast-moving world.",
    icon: agilityIcon,
  },
  {
    title: "Diversity & Inclusion",
    desc: "Celebrating different perspectives and equal opportunities.",
    icon: diversityIcon,
  },
  {
    title: "Accountability",
    desc: "Taking ownership and responsibility for outcomes.",
    icon: accountabilityIcon,
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);

  const length = valuesData.length;
  const getIndex = (i) => (i + length) % length;

  /* Auto rotate */
  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  }, [activeIndex]);

  const startAutoRotate = () => {
    stopAutoRotate();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => getIndex(prev + 1));
    }, 4000);
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  /* Swipe gestures */
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    stopAutoRotate();
  };

  const handleTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) setActiveIndex(getIndex(activeIndex + 1));
    if (diff < -50) setActiveIndex(getIndex(activeIndex - 1));
    startAutoRotate();
  };

  return (
    <section className="values-hero">
      <div className="values-header">
        <h2>Our Values</h2>
        <p>
          The principles that guide our decisions, shape our culture, and define
          our success.
        </p>
      </div>

      <div
        className="values-carousel"
        onMouseEnter={stopAutoRotate}
        onMouseLeave={startAutoRotate}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {[
          getIndex(activeIndex - 1),
          activeIndex,
          getIndex(activeIndex + 1),
        ].map((index, position) => {
          const item = valuesData[index];
          return (
            <div
              key={index}
              className={`value-card ${position === 1 ? "active" : "side"}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="value-icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="values-dots">
        {valuesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

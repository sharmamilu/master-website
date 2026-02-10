import "./ServiceHero.css";
import { useState, useEffect } from "react";

// JSON data structure
const serviceData = {
  hero: {
    title: "Innovative Services",
    subtitle: "We offer a wide range of innovative services to help your business succeed. Discover how we can help you achieve your goals. Find out the best services for your business.",
    buttons: [
      {
        text: "Explore All Services",
        type: "primary",
        icon: "→"
      },
      {
        text: "Request a Quote",
        type: "secondary",
        icon: "→"
      }
    ]
  },
  services: [
    {
      id: 1,
      title: "Strategy & Consulting",
      icon: "🎯",
      size: "medium",
      orbit: 1,
      radius: 160,
      startAngle: 45
    },
    {
      id: 2,
      title: "Digital Transformation",
      icon: "⚙️",
      size: "large",
      orbit: 2,
      radius: 200,
      startAngle: 135
    },
    {
      id: 3,
      title: "Cloud Solutions",
      icon: "☁️",
      size: "small",
      orbit: 3,
      radius: 240,
      startAngle: 225
    },
    {
      id: 4,
      title: "Data Analytics",
      icon: "📈",
      size: "medium",
      orbit: 4,
      radius: 180,
      startAngle: 315
    },
    
  ]
};

export default function ServiceHero() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="service-hero">
      <div className="service-hero-inner">
        {/* Left Content */}
        <div className="service-hero-content">
          <h1>{serviceData.hero.title}</h1>
          <p>{serviceData.hero.subtitle}</p>

          <div className="service-hero-actions">
            {serviceData.hero.buttons.map((btn, index) => (
              <button 
                key={index}
                className={`${btn.type}-btn`}
              >
                {btn.text} <span>{btn.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Orbital Visual */}
        <div className="service-hero-visual">
          <div className="orbital-container">
            {/* Orbital tracks */}
            <div className="orbital-track track-1"></div>
            <div className="orbital-track track-2"></div>
            <div className="orbital-track track-3"></div>
            <div className="orbital-track track-4"></div>
            
            {/* Center hub */}
            <div className="orbital-hub">
              <div className="hub-glow"></div>
            </div>
            
            {/* Service bubbles */}
            {serviceData.services.map((service) => (
              <div 
                key={service.id}
                className={`service-bubble ${service.size}`}
                style={{
                  transform: `rotate(${rotation + service.startAngle}deg) translateX(${service.radius}px) rotate(-${rotation + service.startAngle}deg)`,
                  animationDuration: `${20 + service.orbit * 4}s`
                }}
              >
                <span>{service.icon}</span>
                <div className="bubble-label">{service.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
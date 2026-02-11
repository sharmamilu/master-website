import React from "react";
import "./ContactHero.css";
import GlobeImg from "../../assets/images/globe.png";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-container">

        {/* Left Content */}
        <div className="contact-hero-content">
          <h1>Let’s Start a Conversation</h1>
          <p>
            Whether you’re exploring new ideas, seeking expert guidance,
            or ready to take the next step — we’re here to help you move forward.
          </p>

          <div className="contact-hero-actions">
            <button className="primary-btn">Get in Touch</button>
            <button className="secondary-btn">Schedule a Call</button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="contact-hero-visual">
          <img src={GlobeImg} alt="Global Connection" />
        </div>

      </div>

      {/* Quick Contact Cards */}
      <div className="contact-quick-cards">
        <div className="contact-card">
          <span>📧</span>
          <h4>Email Us</h4>
          <p>connect@yourcompany.com</p>
        </div>

        <div className="contact-card">
          <span>📞</span>
          <h4>Call Us</h4>
          <p>+1 (000) 123-4567</p>
        </div>

        <div className="contact-card">
          <span>📍</span>
          <h4>Visit Us</h4>
          <p>Global Offices Worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

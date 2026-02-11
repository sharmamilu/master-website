import React from "react";
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <div className="contact-map-container">

        {/* Left Info */}
        <div className="contact-map-info">
          <h2>Find Us & Get Directions</h2>
          <p>
            Visit our office or connect with us at a location near you.
            We’re strategically positioned to serve clients globally.
          </p>

          <div className="location-details">
            <p><strong>Head Office</strong></p>
            <p>123 Business Avenue, Global Tech Park</p>
            <p>City • State • Country</p>
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="map-cta-btn"
          >
            Get Directions →
          </a>
        </div>

        {/* Map */}
        <div className="contact-map-wrapper">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=New%20York&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;

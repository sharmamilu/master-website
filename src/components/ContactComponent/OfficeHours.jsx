import React from "react";
import "./OfficeHours.css";

const OfficeHours = () => {
  return (
    <section className="office-hours-section">
      <div className="office-hours-container">

        {/* Section Header */}
        <div className="office-hours-header">
          <h2>Office Hours & Availability</h2>
          <p>
            Our team is available during the following hours to assist you with
            inquiries, support, and consultations.
          </p>
        </div>

        {/* Hours Cards */}
        <div className="office-hours-cards">

          <div className="hours-card">
            <h3>Weekdays</h3>
            <p>Monday – Friday</p>
            <span>9:00 AM – 6:00 PM</span>
          </div>

          <div className="hours-card">
            <h3>Weekend</h3>
            <p>Saturday</p>
            <span>10:00 AM – 2:00 PM</span>
          </div>

          <div className="hours-card highlight">
            <h3>Support</h3>
            <p>Emergency Assistance</p>
            <span>24 / 7 Availability</span>
          </div>

        </div>

        {/* Note */}
        <div className="office-hours-note">
          <p>
            Outside these hours? Leave us a message and we’ll get back to you as
            soon as possible.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OfficeHours;

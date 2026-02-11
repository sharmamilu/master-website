import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">

        {/* Left Content */}
        <div className="contact-form-info">
          <h2>Let’s Start a Conversation</h2>
          <p>
            Tell us about your needs and challenges. Our team will connect with
            you to explore how we can deliver meaningful results for your
            business.
          </p>

          <ul>
            <li>✔ Tailored solutions for your industry</li>
            <li>✔ Expert consultation & fast response</li>
            <li>✔ Secure & confidential communication</li>
          </ul>
        </div>

        {/* Form Card */}
        <div className="contact-form-card">
          <form>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Company / Organization</label>
              <input type="text" placeholder="Your company name" />
            </div>

            <div className="form-group">
              <label>Service Interest</label>
              <select>
                <option>Select a service</option>
                <option>Consulting</option>
                <option>Digital Transformation</option>
                <option>Data & Analytics</option>
                <option>Cloud & Infrastructure</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your requirements..." />
            </div>

            <button type="submit" className="submit-btn">
              Send Message →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;

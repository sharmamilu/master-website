import "./Footer.css";

import LogoIcon from "../../assets/icons/logo.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";
import LocationIcon from "../../assets/icons/location.svg";
import ArrowIcon from "../../assets/icons/arrow-right.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      {/* ================= Newsletter ================= */}
      <section className="footer-newsletter">
        <div className="newsletter-left">
          <div className="footer-brand">
            <img src={LogoIcon} alt="Company Logo" />
            <span>CompanyName</span>
          </div>
          <p>
            Delivering innovative solutions <br />
            to drive your business forward.
          </p>
        </div>

        <div className="newsletter-divider" />

        <div className="newsletter-right">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>
              Subscribe
              <img src={ArrowIcon} alt="" />
            </button>
          </div>

          <small>We respect your privacy</small>
        </div>
      </section>

      {/* ================= Main Footer ================= */}
      <section className="footer-main">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand-column">
            <div className="footer-brand">
              <img src={LogoIcon} alt="Company Logo" />
              <span>CompanyName</span>
            </div>
            <p>
              Delivering innovative solutions <br />
              to drive your business forward.
            </p>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>Who We Are</li>
              <li>Careers</li>
              <li>Our Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Solutions</li>
              <li>Consultation</li>
              <li>Strategy</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>FAQs</li>
              <li>Testimonials</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <img src={PhoneIcon} alt="" />
                +1 (800) 123-4567
              </li>
              <li>
                <img src={MailIcon} alt="" />
                info@company.com
              </li>
              <li>
                <img src={LocationIcon} alt="" />
                123 Business Rd, City, State 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-socials">
          <img src={FacebookIcon} alt="Facebook" />
          <img src={TwitterIcon} alt="Twitter" />
          <img src={LinkedInIcon} alt="LinkedIn" />
          <img src={InstagramIcon} alt="Instagram" />
        </div>

      </section>
      {/* ================= Bottom ================= */}
      <div className="footer-bottom">
        © 2024 CompanyName. All rights reserved.
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  );
}

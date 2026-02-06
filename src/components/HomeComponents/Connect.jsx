import "./Connect.css";
import ArrowIcon from "../../assets/icons/arrow-right.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";

export default function Connect() {
  return (
    <section className="connect">
      <h2>Ready to Elevate Your Business?</h2>

      <p className="subtitle">
        Get in touch with us to discuss your needs and discover how we
        <br />
        can help your business succeed.
      </p>

      <button className="connect-btn">
        Contact Us
        <img src={ArrowIcon} alt="" />
      </button>

      <div className="connect-contact-info">
        <div className="connect-info-item">
          <img src={PhoneIcon} alt="" />
          <span>+1 (800) 123-4567</span>
        </div>

        <span className="divider" />

        <div className="connect-info-item">
          <img src={MailIcon} alt="" />
          <span>info@company.com</span>
        </div>
      </div>
    </section>
  );
}

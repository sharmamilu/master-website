import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  ChevronRight,
  Globe,
  Shield,
  CreditCard,
  Truck,
  Headphones,
  Send,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Customizable data - can be moved to props or context
  const footerData = {
    company: {
      name: "MasterProject",
      description:
        "Creating innovative solutions for the modern world. We deliver excellence through dedication and innovation.",
      email: "hello@masterproject.com",
      phone: "+1 (555) 123-4567",
      address: "123 Innovation Street, Tech City, TC 10001",
      workingHours: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
    quickLinks: [
      { name: "Home", path: "/", icon: <ChevronRight size={14} /> },
      { name: "About Us", path: "/about", icon: <ChevronRight size={14} /> },
      { name: "Services", path: "/services", icon: <ChevronRight size={14} /> },
      {
        name: "Portfolio",
        path: "/portfolio",
        icon: <ChevronRight size={14} />,
      },
      { name: "Blog", path: "/blog", icon: <ChevronRight size={14} /> },
      { name: "Careers", path: "/careers", icon: <ChevronRight size={14} /> },
    ],
    services: [
      { name: "Web Development", path: "/services/web" },
      { name: "Mobile Apps", path: "/services/mobile" },
      { name: "UI/UX Design", path: "/services/design" },
      { name: "Digital Marketing", path: "/services/marketing" },
      { name: "SEO Optimization", path: "/services/seo" },
      { name: "Cloud Solutions", path: "/services/cloud" },
    ],
    resources: [
      { name: "Documentation", path: "/docs" },
      { name: "Help Center", path: "/help" },
      { name: "Community", path: "/community" },
      { name: "Tutorials", path: "/tutorials" },
      { name: "API Reference", path: "/api" },
      { name: "Status", path: "/status" },
    ],
    socialMedia: [
      {
        name: "Facebook",
        icon: <Facebook size={20} />,
        url: "https://facebook.com",
        color: "#1877F2",
      },
      {
        name: "Twitter",
        icon: <Twitter size={20} />,
        url: "https://twitter.com",
        color: "#1DA1F2",
      },
      {
        name: "Instagram",
        icon: <Instagram size={20} />,
        url: "https://instagram.com",
        color: "#E4405F",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin size={20} />,
        url: "https://linkedin.com",
        color: "#0A66C2",
      },
      {
        name: "YouTube",
        icon: <Youtube size={20} />,
        url: "https://youtube.com",
        color: "#FF0000",
      },
    ],
    features: [
      {
        icon: <Truck size={24} />,
        title: "Free Shipping",
        desc: "On orders over $50",
      },
      {
        icon: <Shield size={24} />,
        title: "Secure Payment",
        desc: "100% secure transactions",
      },
      {
        icon: <Headphones size={24} />,
        title: "24/7 Support",
        desc: "Dedicated support team",
      },
      {
        icon: <CreditCard size={24} />,
        title: "Easy Returns",
        desc: "30-day return policy",
      },
    ],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"],
    newsletter: {
      title: "Stay Updated",
      description:
        "Subscribe to our newsletter for the latest updates and offers.",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      {/* Top Features Bar */}
      <div className="footer-features">
        <div className="container">
          <div className="features-grid">
            {footerData.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <div className="logo-icon">
                  <div className="logo-dot logo-dot-primary"></div>
                  <div className="logo-dot logo-dot-secondary"></div>
                  <div className="logo-dot logo-dot-accent"></div>
                </div>
                <div className="logo-text">
                  <h3 className="company-name">{footerData.company.name}</h3>
                  <p className="company-tagline">Innovating Tomorrow</p>
                </div>
              </div>
              <p className="company-description">
                {footerData.company.description}
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} className="contact-icon" />
                  <span>{footerData.company.email}</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} className="contact-icon" />
                  <span>{footerData.company.phone}</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} className="contact-icon" />
                  <span>{footerData.company.address}</span>
                </div>
                <div className="contact-item">
                  <Clock size={16} className="contact-icon" />
                  <span>{footerData.company.workingHours}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-links">
                <h4 className="section-title">Follow Us</h4>
                <div className="social-icons">
                  {footerData.socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-icon"
                      aria-label={social.name}
                      style={{ "--social-color": social.color }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="section-title">Quick Links</h4>
              <ul className="footer-links">
                {footerData.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="footer-link">
                      <span className="link-icon">{link.icon}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="section-title">Our Services</h4>
              <ul className="footer-links">
                {footerData.services.map((service, index) => (
                  <li key={index}>
                    <a href={service.path} className="footer-link">
                      <span className="link-icon">
                        <ChevronRight size={14} />
                      </span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Resources */}
            <div className="footer-section">
              <h4 className="section-title">{footerData.newsletter.title}</h4>
              <p className="newsletter-desc">
                {footerData.newsletter.description}
              </p>

              <form className="newsletter-form">
                <div className="input-group">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    <Send size={18} />
                  </button>
                </div>
                <p className="newsletter-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              <div className="resources-section">
                <h4 className="section-title">Resources</h4>
                <ul className="footer-links">
                  {footerData.resources.map((resource, index) => (
                    <li key={index}>
                      <a href={resource.path} className="footer-link">
                        <span className="link-icon">
                          <ChevronRight size={14} />
                        </span>
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            {/* Copyright */}
            <div className="copyright">
              <p>
                &copy; {currentYear} {footerData.company.name}. All rights
                reserved.
                <span className="made-with">
                  Made with <Heart size={14} /> by our team
                </span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms">Terms of Service</a>
              <span className="separator">•</span>
              <a href="/cookies">Cookie Policy</a>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods">
              <span className="payment-label">We accept:</span>
              <div className="payment-icons">
                {footerData.paymentMethods.map((method, index) => (
                  <span key={index} className="payment-method">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowRight size={20} className="arrow-up" />
      </button>
    </footer>
  );
};

export default Footer;

// Add missing icons
// const Facebook = ({ size }) => <span style={{ color: "#1877F2" }}>f</span>;
// const Twitter = ({ size }) => <span style={{ color: "#1DA1F2" }}>𝕏</span>;
// const Instagram = ({ size }) => <span style={{ color: "#E4405F" }}>📷</span>;
// const Linkedin = ({ size }) => <span style={{ color: "#0A66C2" }}>in</span>;
// const Youtube = ({ size }) => <span style={{ color: "#FF0000" }}>▶️</span>;

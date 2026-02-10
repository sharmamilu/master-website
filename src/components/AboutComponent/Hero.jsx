import "./Hero.css";
import aboutHeroImg from "../../assets/images/aboutus.avif"; // update path if needed

const Hero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-inner">
        {/* LEFT CONTENT */}
        <div className="about-hero-content">
          <h1>
            About <span>Us</span>
          </h1>
          <p>
            Learn more about our mission, values, and the team dedicated to
            helping your business grow with confidence and clarity.
          </p>

          <div className="about-hero-actions">
            <button className="hero-btn-primary">Get in Touch</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-hero-image">
          <img src={aboutHeroImg} alt="Our Team" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

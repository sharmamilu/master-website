import "./Hero.css";
import LeadershipImage from "../../assets/images/aboutus.avif";
export default function Hero() {
  return (
    <section className="leadership-hero">
      <div className="leadership-hero-inner">
        {/* LEFT CONTENT */}
        <div className="leadership-content">
          <span className="leadership-eyebrow">Leadership</span>

          <h1>Meet Our Leaders</h1>

          <p>
            Guiding our vision, driving innovation, and shaping the future of
            our organization through experience, integrity, and purpose.
          </p>

          <div className="leadership-highlights">
            <span>Strategic Vision</span>
            <span>People-First Leadership</span>
            <span>Sustainable Growth</span>
          </div>
        </div>

        {/* RIGHT FLOATING IMAGE */}
        <div className="leadership-image-wrapper">
          <img
            src={LeadershipImage}
            alt="Leadership Team"
            className="leadership-image"
          />
        </div>
      </div>
    </section>
  );
}

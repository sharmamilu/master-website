import "./Hero.css";
import lifeHeroImg from "../../assets/images/aboutus.avif"; // update path if needed

const LifeHero = () => {
  return (
    <section className="life-hero">
      <img
        src={lifeHeroImg}
        alt="Life at Company"
        className="life-hero-bg"
      />

      <div className="life-hero-overlay" />

      <div className="life-hero-content">
        <h1>
          Life @ <span>Company</span>
        </h1>
        <p>
          Discover our vibrant culture, shared values, and the people who drive
          innovation every day.
        </p>

        <button className="life-hero-btn">
          Join Our Team <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default LifeHero;

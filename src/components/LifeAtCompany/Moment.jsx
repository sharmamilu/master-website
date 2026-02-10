import "./Moment.css";

import img1 from "../../assets/images/moment/moment-1.avif";
import img2 from "../../assets/images/moment/moment-2.avif";
import img3 from "../../assets/images/moment/moment-1.avif";
import img4 from "../../assets/images/moment/moment-2.avif";
import img5 from "../../assets/images/moment/moment-1.avif";
import img6 from "../../assets/images/moment/moment-2.avif";

const moments = [
  {
    image: img1,
    text: "Exploring our vibrant culture through collaborative teamwork.",
  },
  {
    image: img2,
    text: "Sharing ideas and building meaningful connections.",
  },
  {
    image: img3,
    text: "Creative sessions that spark innovation and growth.",
  },
  {
    image: img4,
    text: "Problem-solving together with focus and dedication.",
  },
  {
    image: img5,
    text: "Experiencing innovation through immersive technologies.",
  },
  {
    image: img6,
    text: "Celebrating wins and milestones as one team.",
  },
];

const Moment = () => {
  return (
    <section className="moment">
      <div className="moment-glass">
        <div className="moment-header">
          <h2>Our Culture in Focus</h2>
          <p>Moments that define our spirit and shared success.</p>
        </div>

        <div className="moment-grid">
          {moments.map((item, index) => (
            <div className="moment-card" key={index}>
              <div className="moment-image">
                <img src={item.image} alt="Culture moment" />
              </div>
              <p className="moment-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moment;

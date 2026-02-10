import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Nisha Kante",
    role: "Operations Lead",
    company: "GrowthWorks",
    rating: 5,
    quote:
      "Working with this team helped us streamline processes and achieve measurable improvements across our operations.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Nirmal Varon",
    role: "Product Manager",
    company: "NextEdge Solutions",
    rating: 5,
    quote:
      "Their approach is thoughtful, strategic, and execution-focused. The results exceeded our expectations.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Headed Company",
    role: "Founder",
    company: "Innovexa",
    rating: 4,
    quote:
      "A reliable partner that understands business challenges and delivers practical, scalable solutions.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          <h2>Voices of Success</h2>
          <p>What our customers have to say about working with us</p>
        </div>

        {/* Cards */}
        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">“</div>

              <p className="testimonial-text">{item.quote}</p>

              <div className="testimonial-rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <div className="testimonial-user">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>
                    {item.role}, {item.company}
                  </span>
                </div>
              </div>

              <div className="closing-quote">”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

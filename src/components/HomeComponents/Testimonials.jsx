import "./Testimonials.css";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, ABC Corporation",
    text:
      "Working with CompanyName has been a game changer for our business. Exceptional service and results.",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, XYZ Enterprises",
    text:
      "The team at CompanyName truly understands our needs and consistently delivers outstanding results.",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
  {
    name: "David Brown",
    role: "Founder, Innovatech",
    text:
      "Outstanding service and support! We couldn't be happier with the results and professionalism.",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <p className="testimonials-subtitle">
          Hear what our clients have to say about their experience working with
          us.
        </p>

        <div className="testimonials-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="testimonial-text">“{item.text}”</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          <span />
          <span className="active" />
          <span />
        </div>
      </div>
    </section>
  );
}

import "./TeamCard.css";

import member1 from "../../assets/images/team/person-1.avif";
import member2 from "../../assets/images/team/person-1.avif";
import member3 from "../../assets/images/team/person-1.avif";

const teamMembers = [
  {
    image: member1,
    name: "Brage Nagh",
    role: "Marketing Lead",
    quote:
      "Working here has helped me grow both professionally and personally in ways I never imagined.",
  },
  {
    image: member2,
    name: "Siter-Life",
    role: "Product Designer",
    quote:
      "Our culture encourages creativity, collaboration, and continuous learning every single day.",
  },
  {
    image: member3,
    name: "Bast Hac Mament",
    role: "Software Engineer",
    quote:
      "The people, the vision, and the support system make this an amazing place to work.",
  },
];

const TeamCard = () => {
  return (
    <section className="team">
      <div className="team-glass">
        <div className="team-header">
          <h2>Hear From Our Team</h2>
          <p>
            Real stories, real experiences — straight from the heart of our
            company.
          </p>
        </div>

        <div className="team-carousel">
          <button className="team-nav left">‹</button>

          <div className="team-cards">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <span className="quote start">“</span>

                <div className="avatar">
                  <img src={member.image} alt={member.name} />
                </div>

                <p className="team-quote">{member.quote}</p>

                <h4>{member.name}</h4>
                <span className="role">{member.role}</span>

                <span className="quote end">”</span>
              </div>
            ))}
          </div>

          <button className="team-nav right">›</button>
        </div>

        <div className="team-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default TeamCard;

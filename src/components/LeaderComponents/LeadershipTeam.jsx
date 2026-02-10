import "./LeadershipTeam.css";
import member2 from "../../assets/images/team/person-1.avif";

const leaders = [
  {
    name: "Ananya Sharma",
    role: "Chief Executive Officer",
    image: member2,
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    image: member2,
  },
  {
    name: "David Rodriguez",
    role: "Chief Financial Officer",
    image: member2,
  },
];

export default function LeadershipTeam() {
  return (
    <section className="leadership-team">
      <div className="leadership-team-inner">
        <header className="leadership-team-header">
          <h2>Our Leadership Team</h2>
          <p>Meet the visionaries guiding our future.</p>
        </header>

        <div className="leadership-cards">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <div className="leader-avatar">
                <img src={leader.image} alt={leader.name} />
              </div>

              <h3>{leader.name}</h3>
              <span>{leader.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

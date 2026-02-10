import "./LeadConnect.css";

export default function LeadConnect() {
  return (
    <section className="leadconnect-section">
      <div className="leadconnect-card">
        {/* Content */}
        <h2>Connect With Our Leadership</h2>
        <p>
          We believe strong leadership starts with meaningful conversations.
          Reach out to our team to explore collaboration, opportunities, or
          shared ideas.
        </p>

        {/* Single CTA */}
        <button className="leadconnect-btn">
          Contact Our Team
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}

import React from "react";
import "./GalleryProjects.css";
import FactoryImg from "../../assets/images/globe.png";
const GalleryProjects = () => {
    const galleryProjects = [
  {
    id: 1,
    title: "Smart Manufacturing Optimization",
    description: "Improving operational efficiency through intelligent automation.",
    image: FactoryImg,
    icon: "⚙️",
  },
  {
    id: 2,
    title: "Urban Infrastructure Insights",
    description: "Data-driven planning for smarter, sustainable cities.",
    image: FactoryImg,
    icon: "🏙️",
  },
  {
    id: 3,
    title: "Enterprise Performance Analytics",
    description: "Actionable insights to improve business decision-making.",
    image: FactoryImg,
    icon: "📊",
  },
  {
    id: 4,
    title: "Digital Media Intelligence",
    description: "Enhancing engagement through intelligent content strategies.",
    image: FactoryImg,
    icon: "🎬",
  },
];
  return (
    <section className="gallery-projects">
      <div className="gallery-projects-container">

        {/* Header */}
        <div className="gallery-projects-header">
          <h2>Explore Our Transformative Projects</h2>
          <p>
            In-depth insights into how we empower industries through
            innovation-driven solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="gallery-projects-grid">
          {galleryProjects.map((project) => (
            <div key={project.id} className="gallery-project-card">

              <div className="project-image-wrapper">
                <span className="project-icon">{project.icon}</span>
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-btn">View Case Study</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryProjects;

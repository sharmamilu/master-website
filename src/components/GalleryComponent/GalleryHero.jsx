import React, { useState } from "react";
import "./GalleryHero.css";
import GlobeImg from "../../assets/images/globe.png";
const GalleryHero = () => {
  const galleryImages = [
    {
      id: 1,
      src: GlobeImg,
      title: "Manufacturing Facility",
    },
    {
      id: 2,
      src: GlobeImg,
      title: "Analytics Dashboard",
    },
    {
      id: 3,
      src: GlobeImg,
      title: "Smart City",
    },
    {
      id: 4,
      src: GlobeImg,
      title: "Healthcare Innovation",
    },
    {
      id: 5,
      src: GlobeImg,
      title: "Retail Intelligence",
    },
    {
      id: 6,
      src: GlobeImg,
      title: "Supply Chain Optimization",
    },
    {
      id: 7,
      src: GlobeImg,
      title: "Energy Efficiency",
    },
    {
      id: 8,
      src: GlobeImg,
      title: "Smart Agriculture",
    },
    {
      id: 9,
      src: GlobeImg,
      title: "Digital Transformation",
    },
    {
      id: 10,
      src: GlobeImg,
      title: "Customer Engagement Hub",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const getOffset = (index) => {
    const total = galleryImages.length;
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  return (
    <section className="gallery-hero">
      <div className="gallery-hero-container">

        {/* Heading */}
        <div className="gallery-hero-header">
          <h1>Innovative Solutions in Action</h1>
          <p>
            Explore a collection of our transformative projects that bring
            ideas to life across industries.
          </p>
        </div>

        {/* Infinite Circular Gallery */}
        <div className="gallery-circle">
          {galleryImages.map((item, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;

            return (
              <div
                key={item.id}
                className={`gallery-circle-item ${
                  isActive ? "active" : ""
                }`}
                style={{
                  "--offset": offset,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.src} alt={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;

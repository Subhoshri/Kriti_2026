import React from "react";
import "./ArtistSection.css";

const artists = [
  { name: "Aisha Gomes", medium: "Muralist", image: "./imgs/home/artist1.jpg", ratio: "66%" },
  { name: "Ravi Sen", medium: "Sculptor", image: "./imgs/home/artist2.jpg", ratio: "80%" },
  { name: "Maya Roy", medium: "Illustrator", image: "./imgs/home/artist3.jpg", ratio: "56%" },
  { name: "Dev Patel", medium: "Photographer", image: "./imgs/home/artist4.jpg", ratio: "72%" },
  { name: "Nina Das", medium: "Mixed Media", image: "./imgs/home/artist5.jpg", ratio: "50%" },
  { name: "Arun Khatri", medium: "Printmaker", image: "./imgs/home/artist6.jpg", ratio: "88%" },
];

const ArtistSection = () => {
  return (
    <section className="artist-section">
      <h2 className="section-title ruslan">Featured Artists</h2>

      <div className="masonry">
        {artists.map((a, i) => (
          <article
            key={a.name + i}
            className="artist-card"
            style={{
              ["--img"]: `url(${a.image})`,
              ["--ratio"]: a.ratio,
            }}
          >
            <div className="image" role="img" aria-label={`${a.name} — ${a.medium}`} />

            <div className="meta">
              <div className="artist-name ruslan">{a.name}</div>
              <div className="artist-medium">{a.medium}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArtistSection;

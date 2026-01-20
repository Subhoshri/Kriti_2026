import React from "react";
import "./ArtistSection.css";
import { useEffect, useRef } from "react";

const ArtistSection = () => {
  const scrollRef = useRef(null);
    // Duplicate the artists array
    const artists = [
    { name: "Tarak Garai", medium: "Sculptor", image: "/imgs/Artist/tarak_garai.jpg", ratio: "66%" },
    //{ name: "Ravi Sen", medium: "Sculptor", image: "./imgs/home/artist2.jpg", ratio: "80%" },
    //{ name: "Maya Roy", medium: "Illustrator", image: "./imgs/home/artist3.jpg", ratio: "56%" },
    //{ name: "Dev Patel", medium: "Photographer", image: "./imgs/home/artist4.jpg", ratio: "72%" },
    //{ name: "Nina Das", medium: "Mixed Media", image: "./imgs/home/artist5.jpg", ratio: "50%" },
    //{ name: "Arun Khatri", medium: "Printmaker", image: "./imgs/home/artist6.jpg", ratio: "88%" },
    ];

    const displayArtists = [...artists, ...artists];

    useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let requestAnimationFrameId;
    // Lower speed (e.g., 0.5) is smoother; higher speed (e.g., 2) can jitter
    const speed = 2; 

    const scroll = () => {
        element.scrollLeft += speed;

        // SEAMLESS RESET LOGIC
        // We reset when we've reached the halfway point of the total scrollable width
        if (element.scrollLeft >= element.scrollWidth / 2) {
            // Subtracting the half instead of setting to 0 prevents the "skip"
            element.scrollLeft -= element.scrollWidth / 2;
        }
        requestAnimationFrameId = requestAnimationFrame(scroll);
    };

    requestAnimationFrameId = requestAnimationFrame(scroll);

    const stop = () => cancelAnimationFrame(requestAnimationFrameId);
    const start = () => {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = requestAnimationFrame(scroll);
    };

    element.addEventListener('mouseenter', stop);
    element.addEventListener('mouseleave', start);

    return () => {
        cancelAnimationFrame(requestAnimationFrameId);
        element.removeEventListener('mouseenter', stop);
        element.removeEventListener('mouseleave', start);
    };
  }, []);

  return (
    <section className="artist-section" id="artists">
      <h2 className="section-title ruslan">Featured Artists</h2>

      <div className="masonry" ref={scrollRef}>
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

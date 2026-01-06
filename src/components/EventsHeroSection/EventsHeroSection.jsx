import React from "react";
import "./EventsHeroSection.css";

const EventsHeroSection = () => {
    return (
        <section className="EventsHero-section">
            <div className="details">
                <div className="item highlight">17th to 19th Jan, 2025</div>
                <div className="item">Venue: IIEST Shibpur</div>
                <div className="item">Organised By: SCAGE</div>
            </div>
            <div className="text">
                <h1 className="ruslan">EVENTS @KRITI&apos;25</h1>
                <p>EVENTS FOR EVERYONE</p>
            </div>
            <img src="./imgs/home/sunshine.png" alt="" />
        </section>
    );
};

export default EventsHeroSection;

import React from "react";
import "./EventsHeroSection.css";

const EventsHeroSection = () => {
    return (
        <section className="EventsHero-section">
            <div className="details">
                <div className="item highlight">30th Jan, 31st Jan and 1st Feb, 2026</div>
                <div className="item">Venue: IIEST, Shibpur</div>
                <div className="item">Organised By: SCAGE</div>
            </div>
            <div className="text">
                <h1 className="ruslan">EVENTS @KRITI&apos;26</h1>
                <p>EVENTS FOR EVERYONE</p>
            </div>
            <img src="./imgs/home/sunshine.png" alt="" />
        </section>
    );
};

export default EventsHeroSection;

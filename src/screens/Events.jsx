// src/screens/Home.jsx
import React from "react";
import Header from "../components/Header/Header";
import EventsHeroSection from "../components/EventsHeroSection/EventsHeroSection";
import EventsDetailsSection from "../components/EventsDetailsSection/EventsDetailsSection";
import Footer from "../components/Footer/Footer";
import "./Events.css";
import eventsData from "../eventsData.json";
import { Link } from "react-router-dom";

const Events = () => {
    return (
        <div className="EventsScreen">
            <Link to="/" className="back-button">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="square" 
          strokeLinejoin="bevel"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span className="ruslan">BACK</span>
      </Link>
            {/* <Header /> */}
            <EventsHeroSection />

            {eventsData.events.map((event, index) => (
                <EventsDetailsSection
                    key={index}
                    isReversed={event.isReversed}
                    eventImage={event.eventImage}
                    eventName={event.eventName}
                    eventDescription={event.eventDescription}
                    eventLink={event.eventLink}
                    isLinkVoid={event.eventLink == "#" ? true : false}
                />
            ))}

            {/* <Footer /> */}
        </div>
    );
};

export default Events;

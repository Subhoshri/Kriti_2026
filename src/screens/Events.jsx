// src/screens/Home.jsx
import React from "react";
import Header from "../components/Header/Header";
import EventsHeroSection from "../components/EventsHeroSection/EventsHeroSection";
import EventsDetailsSection from "../components/EventsDetailsSection/EventsDetailsSection";
import Footer from "../components/Footer/Footer";
import "./Events.css";
import eventsData from "../eventsData.json";

const Events = () => {
    return (
        <div>
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

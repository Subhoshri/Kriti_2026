import React from "react";
import "./EventsSection.css";
import Button from "../Button/Button";
import eventsData from "../../eventsData.json";

const EventsSection = () => {
    return (
        <section className="event-section">
            <h1 className="ruslan" style={{color: "#e6eab6", paddingTop: "40px", zIndex: 2}}>OUR EVENTS</h1>

            <div className="events">
                {eventsData.events.map((ev, idx) => (
                    <div
                        key={ev.eventName + idx}
                        className={`event-card ${idx % 2 === 0 ? "even" : "odd"}`}
                    >
                        <div className="card-inner">
                            <h3 className="card-title">{ev.eventName}</h3>
                            <p className="card-desc">{ev.eventDescription}</p>
                            <a href={ev.eventLink} className="card-cta">
                                <Button text="Register / Details" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <a style={{ textDecoration: "none" }} href="/events">
                <Button
                    text={"VIEW ALL EVENTS"}
                    endIcon={
                        <svg
                            width="28"
                            height="26"
                            viewBox="0 0 28 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.9527 11.3332L12.0127 2.39315L14.3697 0.0361328L27.3333 12.9998L14.3697 25.9633L12.0127 23.6063L20.9527 14.6665H0.666656V11.3332H20.9527Z"
                                fill="black"
                            />
                        </svg>
                    }
                ></Button>
            </a>

            <img src="./imgs/home/sunshine.png" alt="" />
        </section>
    );
};

export default EventsSection;

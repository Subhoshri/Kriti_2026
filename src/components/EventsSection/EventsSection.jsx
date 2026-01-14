import React from "react";
import "./EventsSection.css";
import Button from "../Button/Button";
import eventsData from "../../eventsData.json";
import { useEffect, useRef } from "react";

const EventsSection = () => {
    const scrollRef = useRef(null);
    const displayEvents = [...eventsData.events, ...eventsData.events];
    useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let requestAnimationFrameId;
    // Lower speed (e.g., 0.5) is smoother; higher speed (e.g., 2) can jitter
    const speed = 2.5; 

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
        <section className="event-section">
            <h1 className="ruslan" style={{color: "#e6eab6", paddingTop: "40px", zIndex: 2}}>OUR EVENTS</h1>

            <div className="events" ref={scrollRef}> 
                {displayEvents.map((ev, idx) => (
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

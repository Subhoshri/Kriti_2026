import React, { useState, useEffect } from "react";
import "./EventsSection.css";
import Button from "../Button/Button";

const EventsSection = () => {
    return (
        <section className="event-section">
            <h1 className="ruslan">OUR EVENTS</h1>
            <div className="events">
                <div className="item">ECO-VISION •</div>
                <div className="item">MUDS AND MASTERPIECES •</div>
                <div className="item">GRAFFITI GROOVE •</div>
                <div className="item">FINGERS IN FOCUS •</div>
                <div className="item">PICTURE PERFECT •</div>
                <div className="item">RUST TO RICHES •</div>
                <div className="item">MINDFUL MEADOWS •</div>
                <div className="item">VOUGE-E-BELLA •</div>
                <div className="item">ART OF ODYSSEY •</div>
                <div className="item">FRAGMENTED FANTASIES •</div>
                <div className="item">ART-CADE •</div>
                <div className="item">THE LITTLE DOODLE SHOP</div>
            </div>

            <a style={{ textDecoration: "none" }} href="/events">
                <Button
                    text={"VIEW DETAILS"}
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
            <img src="./imgs/home/sunshine.png" alt=""></img>
        </section>
    );
};

export default EventsSection;

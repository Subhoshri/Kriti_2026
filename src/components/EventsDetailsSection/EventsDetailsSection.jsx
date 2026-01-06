import React from "react";
import Button from "../Button/Button";
import "./EventsDetailsSection.css";

const EventsDetailsSection = ({
    isReversed,
    eventImage,
    eventName,
    eventDescription,
    eventLink,
    isLinkVoid,
}) => {
    return (
        <section className="EventsDetails-section">
            <div className={`eventDetails ${isReversed ? "reverse" : ""}`}>
                <div className="image">
                    <img
                        className="event-image"
                        src={eventImage}
                        alt={eventName}
                    />
                    {/* <img className="top-ribbon-image" src={`${isReversed ? './imgs/Green-Ribbon.png' : './imgs/Red-Ribbon.png'} `} alt="" /> */}
                    {/* <img className="bottom-ribbon-image" src={`${isReversed ? './imgs/Green-Ribbon.png' : './imgs/Red-Ribbon.png'} `} alt="" /> */}
                </div>
                <div className="details">
                    <h1 className="ruslan">{eventName}</h1>
                    <p>{eventDescription}</p>
                    <a style={{ textDecoration: "none" }} href={eventLink}>
                        <Button
                            text={
                                isLinkVoid
                                    ? "NO REGISTRATION REQUIRED"
                                    : "REGISTER"
                            }
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
                </div>
            </div>
        </section>
    );
};

export default EventsDetailsSection;

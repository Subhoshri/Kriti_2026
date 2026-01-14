// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
  const [daysLeft, setDaysLeft] = useState(daysLeftBefore30Jan());

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(daysLeftBefore30Jan());
    }, 900000);
    return () => clearInterval(interval);
  }, []);

  function daysLeftBefore30Jan() {
    const now = new Date();
    const eventDate = new Date("2026-01-30");
    const timeDiff = eventDate.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  }
  return (
    <section className="hero">
      <div className="content">
        <div className="title ruslan" style={{ cursor: "pointer" }}>
          <span className="letter letter-k">K</span>
          <span className="letter letter-r">R</span>
          <span className="letter letter-i1">I</span>
          <span className="letter letter-t">T</span>
          <span className="letter letter-i2">I</span>
        </div>
        <div className="tagline">
          <p className="highlight">Largest</p>&nbsp;Art Festival of Kolkata
        </div>
        <a style={{ textDecoration: "none" }} href="/events">
          <Button
            text={"CHECKOUT OUR EVENTS"}
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
      <div className="details">
        <div className="item highlight">30th Jan, 31st Jan and 1st Feb, 2026</div>
        <div className="item">Venue: IIEST Shibpur</div>
        <div className="item">Organised By: SCAGE</div>
      </div>
      <div className="rainbow">
        <img src="./imgs/download (1).jpeg" alt="" />
        <div className="text-container">
          {daysLeft <= 0 ? (
            <div className="text">Live Now</div>
          ) : (
            <>
              <div className="days">{daysLeftBefore30Jan()}</div>
              <div className="text">Days to go</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

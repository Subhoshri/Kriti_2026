import React, { useState, useEffect } from "react";
import "./BottomSection.css";

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <img className="team-image" src="./imgs/home/team.png" alt="" />
      <p className="team-scage">TEAM SCAGE</p>
      <img className="sunshine" src="./imgs/home/sunshine.png" alt="" />
    </section>
  );
};

export default BottomSection;

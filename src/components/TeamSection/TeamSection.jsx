// src/components/TeamSection.jsx
import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
    return (
        <section className="team">
            <h2>Our Team</h2>
            <div className="team-members">
                {/* Example team member */}
                <div className="team-member">
                    <img src="./imgs/team-1.jpg" alt="Team Member 1" />
                    <p>Team Member 1</p>
                </div>
                <div className="team-member">
                    <img src="./imgs/team-2.jpg" alt="Team Member 2" />
                    <p>Team Member 2</p>
                </div>
                <div className="team-member">
                    <img src="./imgs/team-3.jpg" alt="Team Member 3" />
                    <p>Team Member 3</p>
                </div>
                {/* Add more team members as needed */}
            </div>
        </section>
    );
};

export default TeamSection;

import React, { useState, useEffect } from "react";
import "./ComingSoonSection.css";
import Button from "../Button/Button";

const ComingSoonSection = () => {
    return (
        <section className="comingSoon-section">
            <h1>MORE INFORMATION COMING SOON</h1>
            <input type="email" placeholder="ENTER YOUR EMAIL ..." />
            <Button
				text={"SUBSCRIBE TO GET LATEST NEWS"}
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
        <img src="./imgs/home/mail.png" alt="" />
        </section>
    );
};

export default ComingSoonSection;
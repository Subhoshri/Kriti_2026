import React from "react";
import Button from "../Button/Button";
import "./OrganiserSection.css";

const organisersData = [
	{
		name: "Akash Das",
		shortIntro: "Main Coordinator",
		profileImg: "AkashDas.webp",
	},
	{
		name: "Twameka Sinha",
		shortIntro: "Main Coordinator",
		profileImg: "TwamekaSinha.webp",
	},
	{
		name: "Mayukh Mondal",
		shortIntro: "Committee Secretary",
		profileImg: "MayukhMondal.webp",
	},
	{
		name: "Sangeet Dhabare",
		shortIntro: "Committee Treasurer",
		profileImg: "SangeetDhabare.webp",
	},

	{
		name: "Krishnendu Mondal",
		shortIntro: "Finance",
		profileImg: "KrishnenduMondal.webp",
	},
{
		name: "Aditi Karmakar",
		shortIntro: "Joint Coordinator",
		profileImg: "AditiKarmakar.webp",
	},
	{
		name: "Sourish Pal",
		shortIntro: "Joint Coordinator",
		profileImg: "SourishPal.webp",
	},
	
];

const OrganiserSection = () => {
    return (
        <section className="section3">
            <div className="section3__main">
                <div className="heading centered">MEET THE ORGANISERS</div>
                <div className="organisers__container">
                    {organisersData.map((organiser, index) => (
                        <div className="organisers" key={index}>
                            <div className="organisers__img">
                                <img
                                    src={`/imgs/organisers/${organiser.profileImg}`}
                                    alt={`${organiser.name}'s profile`}
                                />
                            </div>
                            <div className="organisers__name description">
                                {organiser.name}
                            </div>
                            <div className="organisers__description description">
                                {organiser.shortIntro}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn__container">
                    {/* <Button
                        text={"VIEW THE ENTIRE TEAM"}
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
                    /> */}
                </div>
            </div>
            <div className="side__image">
                <img src="/imgs/leaf.png" alt="" />
            </div>
        </section>
    );
};

export default OrganiserSection;

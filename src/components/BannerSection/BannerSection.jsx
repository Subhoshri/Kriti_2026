import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
	const tickerItems = [
		"● VIVID ●",
		"SCAGE PRESENTS",
		"● VISIONARY ●",
		"KRITI 2026",
		"● BOUNDLESS CREATIVITY ●",
		"ARTISTIC EXPRESSION",
		"● ART IS LOUDER THAN WORDS ●",
	];

	const repeatedItems = Array(12).fill(tickerItems).flat();

	return (
		<section className="brutalist-ticker">
			<div className="ticker-container">
				<div className="ticker-tape">
					{repeatedItems.map((item, idx) => (
						<div key={idx} className="ticker-item">
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BannerSection;

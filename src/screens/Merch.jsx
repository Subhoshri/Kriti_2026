import React from "react";
import "./Merch.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import Button from "../components/Button/Button"; // Reusing your existing button component

const Merchandise = () => {
  const merchItem = {
    name: "OFFICIAL KRITI 6.0 T-SHIRT",
    price: "₹349",
    description: "Limited edition festival tee. Heavyweight cotton, oversized fit, and brutalist print.",
    image: "./imgs/merch/tshirt-mockup.png", // Ensure this path is correct
    formLink: "https://forms.gle/your-google-form-link"
  };

  return (
    <div className="merch-page">
        <Link to="/" className="back-button">
        <svg 
          width="30" 
          height="30" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="square" 
          strokeLinejoin="bevel"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span className="ruslan">BACK</span>
      </Link>
      <div className="merch-container">
        {/* Left Side: Product Image */}
        <div className="merch-visual">
          <div className="image-frame">
            <img src={merchItem.image} alt={merchItem.name} />
          </div>
          <div className="price-tag ruslan">{merchItem.price}</div>
        </div>

        {/* Right Side: Details & Action */}
        <div className="merch-info">
          <h1 className="ruslan merch-title">{merchItem.name}</h1>
          <p className="mono merch-desc">{merchItem.description}</p>
          
          <div className="buy-zone">
            <a href={merchItem.formLink} target="_blank" rel="noopener noreferrer" className="no-underline">
              <Button text="BUY NOW / PRE-ORDER" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Element */}
      <img className="merch-bg-decoration" src="./imgs/home/sunshine.png" alt="" />
      <div className="merch-bg-text ruslan">MERCH MERCH MERCH</div>
    </div>
  );
};

export default Merchandise;
import React from "react";
import "./Footer.css";

const Footer = () => {
  const contacts = [
    { name: "Mayukh Mondal", phone: "9749165361" },
    { name: "Sujan Sharma", phone: "9462480435" },
    { name: "Aditya Raj Verma", phone: "8210240857" },
    { name: "Avishek Pal", phone: "9832061992" },
  ];

  return (
    <footer className="main-footer">
      {/* Decorative "Tape" element to break the straight line */}
      <div className="footer-tape">KRITI 2026 ● KRITI 2026 ● KRITI 2026</div>

      <div className="footer-grid">
        {/* Left Section: Contacts */}
        <div className="footer-card contact-card">
          <h2 className="ruslan section-tag">CONTACT US</h2>
          <div className="contact-list mono">
            {contacts.map((c, i) => (
              <div key={i} className="contact-row">
                <span className="name">{c.name}</span>
                <span className="dots"></span>
                <span className="phone">{c.phone}</span>
              </div>
            ))}
          </div>
          <div className="social-box mono">
            <p>scageiiestshibpur@gmail.com</p>
            <p>kriti.scage.in | @scage_iiests</p>
          </div>
        </div>

        {/* Right Section: Location & Bank */}
        <div className="footer-card location-card">
          <h2 className="ruslan section-tag">LOCATION</h2>
          <p className="mono address-text">
            IIEST SHIHPUR, HOWRAH,<br />
            WEST BENGAL - 711103
          </p>
          
          <div className="bank-sticker">
            <h4 className="mono">BANKING DETAILS</h4>
            <div className="mono bank-info">
              <p>ACC: 1532010075776</p>
              <p>IFSC: PUNB0153220 (PUNJAB NATIONAL BANK)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom mono">
        <p>© KRITI 2026. ORGANIZED BY SCAGE</p>
      </div>
    </footer>
  );
};

export default Footer;
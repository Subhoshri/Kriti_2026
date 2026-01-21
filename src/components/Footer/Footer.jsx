import React from 'react';
import './Footer.css';
import { FaEnvelope, FaGlobe, FaInstagram, FaYoutube, FaPhoneAlt, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Left Section: Branding & Address */}
        <div className="footer-section branding">
          <div className="logo-placeholder">
            <img src="/imgs/kriti.png" alt="KRITI 2026" />
          </div>
          <address>
            IIEST SHIBPUR, PO: Botanic Garden, Botanical Garden Road,<br />
            IIEST Shibpur, Howrah-711103, West Bengal
          </address>
          <p className="copyright">© kriti.in 2026. All rights reserved</p>
        </div>

        {/* Middle Section: Contacts */}
        <div className="footer-section contacts">
          <h3>Contacts</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="name">Mayukh Mondal</span>
              <span className="phone"><FaPhoneAlt size={12} /> 9749165361</span>
            </div>
            <div className="contact-item">
              <span className="name">Faiza Tabasum</span>
              <span className="phone"><FaPhoneAlt size={12} /> 9390865921</span>
            </div>
            <div className="contact-item">
              <span className="name">Aditya Raj Verma</span>
              <span className="phone"><FaPhoneAlt size={12} /> 8210240857</span>
            </div>
            <div className="contact-item">
              <span className="name">Avishek Pal</span>
              <span className="phone"><FaPhoneAlt size={12} /> 9832061992</span>
            </div>
          </div>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-section socials">
          <h3>Visit us Virtually</h3>
          <div className="social-icons">
            <a href="scageiiestshibpur@gmail.com" className="icon-circle"><FaEnvelope /></a>
            <a href="https://www.instagram.com/scage_iiests/" className="icon-circle"><FaInstagram /></a>
            <a href="https://kriti.scage.in/" className="icon-circle"><FaGlobe /></a>
            <a href="https://www.facebook.com/share/1Pm2M8X6nk" className="icon-circle"><FaFacebook /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

import { images } from "../../constants";

import { FooterOverlay, Newsletter } from "../../components";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="Contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9W 53rd St. New York, NY 10019, USA</p>
        <p className="p__opensans">09122971136</p>
        <p className="p__opensans">07042683096</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="logo" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others.
        </p>
        <img src={images.spoon} alt="spoon" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Gericht. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;

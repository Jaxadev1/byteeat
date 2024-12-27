import React from "react";
import Logo from "../../public/Logo.webp";
import FacebookIcon from "../assets/icons/FacebookIcon";
import InstaIcon from "../assets/icons/InstaIcon";
import TgIcon from "../assets/icons/TgIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-main">
            <div className="footer-main-context">
              <div className="footer-main-column">
                <img
                  className="footer-main-column-image"
                  src={Logo}
                  alt="logo"
                />
                <h1 className="footer-main-column-title">
                  <span className="footer-main-column-title-adnl">B</span>yte
                  <span className="footer-main-column-title-adnl">E</span>at
                </h1>
              </div>
            </div>
            <div className="footer-main-context"></div>
            <div className="footer-main-context"></div>
            <div className="footer-main-context">
              <p className="footer-main-context-item">+999-99-999-99-99</p>
              <p className="footer-main-context-item">here you can connect us ↓</p>
              <div className="footer-main-context-box">
                <FacebookIcon/>
                <InstaIcon/>
                <TgIcon/>
                <WhatsappIcon/>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            2024 WORLD-FOOD corp. all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

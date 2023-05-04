import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon" onClick={() => window.open("https://www.facebook.com/ritik.jaiswal.1217/")}>
            <FaFacebookF />
          </span>
          <span className="icon" onClick={() => window.open("https://www.instagram.com/ritik_jaisz_rj/")}>
            <FaInstagram />
          </span>
          <span className="icon" onClick={() => window.open("https://twitter.com/Ritikj713")}>
            <FaTwitter />
          </span>
          <span className="icon" onClick={() => window.open("https://www.linkedin.com/in/ritik-jaiswal-997214210/")}>
            <FaLinkedin />
          </span>
          <span className="icon" onClick={() => window.open("https://github.com/Ritikj8090")}>
            <FaGithub />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

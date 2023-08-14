import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="app-card">
      <div className="footer-card">
        <div>Kerem Yavuz. Made with ❤️</div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/keremyavuz1/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/krmmyvz/weather-app"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://keremyavuz.dev"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <FaGlobe className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

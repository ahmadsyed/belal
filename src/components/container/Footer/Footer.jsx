import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    "https://www.instagram.com/syed._bilal/",
    "https://www.linkedin.com/in/belal-ahmad-b461b0224",
    "https://github.com/syedBelal01",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
        &#169; 2023-{currentYear} All rights reserved.Made by{" "}
          <span>Belal Ahmad</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => (
            <a
              key={index}
              href={socialLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;

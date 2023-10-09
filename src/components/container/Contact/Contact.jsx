/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    "https://www.instagram.com/syed._bilal/",
    "https://www.linkedin.com/in/belal-ahmad-b461b0224",
    "https://github.com/syedBelal01",
    ,
  ];
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            My name is "Belal Ahmad" , a self-taught passionate " Full Stack
            Developer" from India. I'm passionate towards my work with
            problem-solving skills, strong time management skills and resistance
            towards stress and adaptability. I love to work with a team.
            Offering strong React skills and working experience with NodeJs,
            MongoDb, JavaScript ,Firebase, frameworks, and many more.
          </p>
          {contacts.map((contact) => (
            <div className="contact_left" key={contact.id}>
              <div className="icon">{contact.icon}</div>
              {contact.link ? (
                <div>
                  {contact.link.startsWith("tel:") ? (
                    <a className="link-contact" href={contact.link}>
                      {contact.infoText}
                    </a>
                  ) : contact.link.startsWith("mailto:") ? (
                    <a className="link-contact" href={contact.link}>
                      {contact.infoText}
                    </a>
                  ) : (
                    <a
                      className="link-contact"
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.infoText}
                    </a>
                  )}
                  <br />
                  {contact.link.startsWith("tel:") && (
                    <a
                      className="link-contact"
                      href={`https://wa.me/${contact.link.replace(
                        "tel:",
                        ""
                      )}?text=Hi%20Anas`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  )}
                </div>
              ) : (
                <p>{contact.infoText}</p>
              )}
            </div>
          ))}

          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => (
              <div className="social_icon " key={index}>
                <a
                  href={socialLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcon}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="row">
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="message"></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

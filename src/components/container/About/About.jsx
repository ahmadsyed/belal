import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio1 from "../../../assets/anas.png";
import belalResume from "../../../assets/belalResume.pdf";

const About = () => {
  return (
    <div className="container " id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <motion.img
            src={portfolio1}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            My name is "Belal Ahamd" , a self-taught passionate " Full Stack
            Developer" from India. I'm passionate towards my work with
            problem-solving skills, strong time management skills and resistance
            towards stress and adaptability. I love to work with a team.
            Offering strong React skills and working experience with NodeJs,
            MongoDb, JavaScript ,Firebase, frameworks, and many more.
          </p>
          {bios.map((bio) => (
            <div className="bio" key={bio.id}>
              <span className="bioKey">
                {bio.icon}
                {bio.key}
              </span>
              <span className="bioValue">
                {bio.link ? (
                  <a className="link" href={bio.link}>
                    {bio.value}
                  </a>
                ) : (
                  bio.value
                )}
              </span>
            </div>
          ))}

          <motion.a
            href={belalResume}
            download="Belal's Resume.pdf"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="resume"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

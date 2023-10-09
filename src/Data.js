import {
  FaHtml5,
  // FaCss3,
  FaNodeJs,
  FaReact,
  // FaWix,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  // FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";

import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaInstagram />, <FaLinkedin />, <FiGithub />];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Belal Ahmad",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917272828827",
    link: "tel:+917272828827", // Phone link
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "ahmadsyed7070@gmail.com",
    link: "mailto:ahmadsyed7070@gmail.com", // Email link
  },
];

export const icons = [
  <FaHtml5 />,
  <FaBootstrap />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  <FaNodeJs />,
  <DiMongodb />,
  <SiExpress />,
];

export const experiences = [
  {
    di: 1,
    year: "2023",
    position: "Junior Web Developer",
    company: "Destino Infotec",
  },
];
export const finishes = [
  {
    id: 1,
    number: "1+",
    itemName: "Years Of Experience",
  },

  {
    id: 2,
    number: "10+",
    itemName: "Projects",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "glizmed",
    category: "app",
    vedioLink:
      "https://drive.google.com/file/d/1Eu5dEgMxGPMbhDobyaQF01V-9c40EIVk/view?usp=sharing",
    repo: "https://github.com/syedBelal01",
  },
  {
    id: 2,
    img: work2,
    name: "react-auth",
    category: "web",
    vedioLink:
      "https://drive.google.com/file/d/1zkmGAyn15hVHBGnbPEHpOi28yHY2WkOk/view?usp=sharing",
    repo: "https://github.com/syedBelal01",
  },
  {
    id: 3,
    img: work4,
    name: "real-time-chat",
    category: "app",
    vedioLink:
      "https://drive.google.com/file/d/11QuEVW0CLldoH9ZWiPfUPtTO75CH5RJq/view?usp=sharing",
    repo: "https://github.com/syedBelal01",
  },
  {
    id: 4,
    img: work3,
    name: "project 4",
    category: "app",
    vedioLink:
      "https://drive.google.com/file/d/1Eu5dEgMxGPMbhDobyaQF01V-9c40EIVk/view?usp=sharing",
    repo: "https://github.com/syedBelal01",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
    vedioLink:
      "https://drive.google.com/file/d/1Eu5dEgMxGPMbhDobyaQF01V-9c40EIVk/view?usp=sharing",
    repo: "https://github.com/syedBelal01",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    vedioLink:
      "https://drive.google.com/file/d/1Eu5dEgMxGPMbhDobyaQF01V-9c40EIVk/view?usp=sharing",
    repo: "https://github.com/syedBelal01",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText:
      "Destino Infotech ,5,Aditya Industrial Estate, Malad West, Mumbai",
    link: "https://www.google.com/maps/place/Destino+Infotech/@19.1777015,72.8324948,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b6f6b93aaaab:0xac51043d52a1aedb!8m2!3d19.1776965!4d72.8350697!16s%2Fg%2F11fzf86_c1?entry=ttu",
  },

  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "ahmadsyed7070@gmail.com",
    link: "mailto:ahmadsyed7070@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 7272828827",
    link: "tel:+917272828827",
  },
];

/* eslint-disable no-unused-vars */
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaWix,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaWordpress,
  FaBootstrap
} from "react-icons/fa";
import { DiJavascript,DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";
import {FiGithub, } from "react-icons/fi"


import work1 from "./assets/Web Designe";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaInstagram />,
  <FaLinkedin />,
  <FiGithub />,

  
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Mohd Anas",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917007130132",
    link: "tel:+917007130132", // Phone link
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "mohdanas9272@gmail.com",
    link: "mailto:mohdanas9272@gmail.com", // Email link
  },
];

export const icons = [
  <FaHtml5 />,
  <FaBootstrap />,
  <DiJavascript />,
  <SiTypescript/>,
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
    company: "24*7 CLICK ENTERPRISE PVT LIMITED",
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
    number: "15+",
    itemName: "Projects",
  },
 
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "app",

  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",

  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Hayat Masjid Zahra colony Thakurganj, Lucknow",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "mohdanas9272@gmail.com",
    link: "mailto:mohdanas9272@gmail.com", // Email link

  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 7007130132",
    link: "tel:+917007130132", // Phone link

  },
];

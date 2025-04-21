

import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
} from "react-icons/fa6";

import textToimage from "../assets/textTOimage.jpg"
import chatApp from "../assets/chatApp.jpg"
import netflixReplica from "../assets/netflixReplica.jpg"
import imageEnhancer from "../assets/imageEnhancer.jpg"

export const LINKS = [
    { id: "projects", name: "projects" },
    { id: "about", name: "about" },
    { id: "experience", name: "experience" },
    { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
    "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,";

export const PROJECTS = [
    {
        id: 1,
        title: "Text To Image Generator",
        description:
            "A full-featured e-commerce website built with React and Node.js.",
        imgSrc: textToimage,
        link: "https://example.com/ecommerce-website",
    },
    {
        id: 2,
        title: "Chatting Application",
        description:
            "A social media application with real-time chat and notifications.",
        imgSrc: chatApp,
        link: "https://example.com/social-media-app",
    },
    {
        id: 3,
        title: "Netflix Replica",
        description:
            "A personal portfolio website to showcase projects and skills.",
        imgSrc: netflixReplica,
        link: "https://example.com/portfolio-website",
    },
    {
        id: 4,
        title: "Image Enhancer",
        description:
            "A blogging platform with user authentication and content management.",
        imgSrc: imageEnhancer,
        link: "https://example.com/blog-platform",
    },

];

export const ABOUT =
    "As a dedicated Full Stack Developer, I specialize in creating dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I excel in building robust and scalable solutions. My expertise includes working with JavaScript frameworks such as React and Node.js, as well as proficiency in databases like MongoDB and SQL. I am passionate about continuous learning and keeping up-to-date with the latest industry trends, which allows me to implement modern practices and tools in my projects.";


export const SOCIAL_MEDIA_LINKS = [
    {
        href: "https://x.com/",
        icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
    },
    {
        href: "https://x.com/",
        icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
    },
    {
        href: "https://github.com/",
        icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
    },
    {
        href: "https://www.linkedin.com/",
        icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
    },
];

export const CONTACT = {
    text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
    email: "kharayatdipin@gmail.com",
};
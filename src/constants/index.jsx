

import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
} from "react-icons/fa6";

import textToimage from "../assets/textToImage.png"
import chatApp from "../assets/chatting.png"
import netflixReplica from "../assets/netflixC.png"
import imageEnhancer from "../assets/imageEnhance.png"

export const LINKS = [
    { id: "projects", name: "projects" },
    { id: "about", name: "about" },
    { id: "experience", name: "experience" },
    { id: "contact", name: "Contact" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Pixora - AI Image Generator",
        description: "Pixora is an AI-powered web app that instantly transforms text prompts into high-quality images. Built with React, Node.js, and Tailwind CSS for a seamless experience.",
        imgSrc: textToimage,
        live: true,
        link: "https://pixoradev.vercel.app/",
        github: "https://github.com/Dipin003/TextToImage"

    },
    {
        id: 2,
        title: "TalkSync",
        description: "TalkSync is a real-time chat app showing online users and enabling instant messaging, with multiple themes for a personalized experience. Built with React, Node.js, and Socket.io.",
        imgSrc: chatApp,
        link: "https://example.com/social-media-app",
        live: false,
        github: "https://github.com/Dipin003/ChattingAppMern"
    },
    {
        id: 3,
        title: "Image Enhancer",
        description: "A simple app that enhances images quickly and easily using the power of AI. Built with React and Tailwind CSS.",

        imgSrc: imageEnhancer,
        link: "https://example.com/blog-platform",
        live: false,
        github: "https://github.com/Dipin003/ImageEnhancer"
    },
];


export const ABOUT =
    "Hi there! I'm Dipin, a passionate Full Stack Developer who loves building clean, responsive, and impactful web applications. I specialize in creating seamless user experiences by combining front-end technologies like React with powerful back-end tools such as Node.js. With hands-on experience working with databases like MongoDB and SQL, I ensure every solution is scalable and robust. I'm always eager to learn, grow, and stay updated with the latest trends in tech—because great software is built with both skill and curiosity. Beyond just writing code, I take pride in solving real-world problems through technology, collaborating with cross-functional teams, and delivering high-quality, user-focused digital products. Whether working independently or as part of a team, I thrive on challenges and strive to bring value through innovative and efficient solutions.";


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
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const roles = [
    "<Dipin />",
    "<Frontend Developer />",
    "<Backend Developer />",
    "<Fullstack Developer />",
];

const container = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState(roles[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setDisplayText(roles[(roleIndex + 1) % roles.length]);
        }, 3000);
        return () => clearInterval(interval);
    }, [roleIndex]);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-white px-4 relative">

            {/* Circle Container */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-gray-100 flex flex-col items-center justify-center text-center p-4 z-0" />

            <img
                src={assets.me}
                alt="Dipin"
                className="w-24 h-24 object-cover rounded-full border border-gray-100 mb-4 z-5"
            />

            <h1 className=" text-5xl font-bold flex gap-1 flex-wrap justify-center z-5 mt-5">
                Hey, I'm{" "}
                <motion.span
                    key={displayText}
                    className="text-teal-400 flex"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {[...displayText].map((char, index) => (
                        <motion.span key={index} variants={letter}>
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.span>
            </h1>

            <div className="flex items-center justify-between w-80 mt-10 gap-5 text-gray-500">
                <a href="#about">ABOUT</a>
                <a href="#">SKILLS</a>
                <a href="#">PROJECTS</a>
                <a href="#">CONTACT</a>
            </div>

        </div>
    );
};

export default Hero;

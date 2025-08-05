import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (roleIndex + 1) % roles.length;
            setRoleIndex(nextIndex);
            setDisplayText(roles[nextIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [roleIndex]);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">


            <div className="absolute sm:w-[350px] sm:h-[350px] w-[280px] h-[280px] rounded-full border border-gray-100 z-0" />

            <img
                src={assets.me}
                alt="Dipin"
                className="sm:w-24 sm:h-24 w-10 h-10 object-cover rounded-full border border-gray-100 mb-4 z-10"
            />

            <h1 className="text-xl xs:text-3xl xs:font-bold font-thin flex gap-1 flex-wrap justify-center z-10 mt-5 text-center">
                Hey, I'm{" "}
                <motion.span
                    key={displayText}
                    className="text-teal-400"
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

            {/* ✅ Hamburger Menu for below 550px */}
            <div className="xs:hidden fixed top-4 right-4 z-50">
                <button onClick={() => setOpen(!open)} className="z-50 relative text-gray-300">
                    {open ? <CgClose size={24} /> : <FaBars size={24} />}
                </button>

                {open && (
                    <div className="fixed inset-0 bg-[#0f0f0f] flex items-center justify-center z-40">
                        <ul className="flex flex-col gap-6 text-4xl leading-relaxed tracking-wide text-white text-center">
                            <li><a href="#about" onClick={() => setOpen(false)}>ABOUT</a></li>
                            <li><a href="#skills" onClick={() => setOpen(false)}>SKILLS</a></li>
                            <li><a href="#projects" onClick={() => setOpen(false)}>PROJECTS</a></li>
                            <li><a href="#contact" onClick={() => setOpen(false)}>CONTACT</a></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* ✅ Horizontal Menu for >= 550px */}
            <ul className="hidden xs:flex xs:items-center xs:justify-between xs:w-80 xs:mt-10 xs:gap-5 text-gray-400 z-20 text-lg">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    );
};

export default Hero;

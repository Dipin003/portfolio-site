import { useState, useEffect } from "react";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolledPastHero, setScrolledPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("hero");
            if (!hero) return;

            // Get hero bottom position relative to viewport top
            const heroBottom = hero.getBoundingClientRect().bottom;

            // When heroBottom <= 0, means hero section is scrolled past top viewport
            if (heroBottom <= 0) {
                setScrolledPastHero(true);
            } else {
                setScrolledPastHero(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Run on mount in case page is already scrolled
        handleScroll();

        // Cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarVariants = {
        initial: { y: -50, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        initial: { y: -20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const getInTouchVariants = {
        initial: { x: 20, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
        },
    };

    return (
        <motion.div
            variants={navbarVariants}
            initial="initial"
            animate="animate"
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-500 ${scrolledPastHero ? "bg-black/80 text-gray-300" : "bg-transparent text-gray-500"
                }`}
        >
            <div className="flex justify-between items-center max-w-screen-xl px-3 xs:mx-auto xs:px-10 py-5">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="flex gap-3 xs:gap-6 items-center text-sm xs:text-lg sm:text-xl"
                >
                    <motion.a
                        variants={itemVariants}
                        href="https://github.com/Dipin003"
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: 1 }}
                    >
                        <BsGithub />
                    </motion.a>

                    <motion.a
                        variants={itemVariants}
                        href="https://www.instagram.com/dipinkharayat_03?igsh=MWo4ajdqaXZmcWc4bQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: 1 }}
                    >
                        <BsInstagram />
                    </motion.a>

                    <motion.a
                        variants={itemVariants}
                        href="https://in.linkedin.com/in/dipin-kharayat-110b18255"
                        target="_blank"
                        rel="noopener noreferrer"
                        transition={{ duration: 1 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                </motion.div>

                <motion.div
                    variants={getInTouchVariants}
                    initial="initial"
                    animate="animate"
                    className="hidden xs:flex items-center gap-2"
                >
                    <a href="#contact" className="flex gap-2">
                        <MdEmail className="text-xl cursor-pointer" />
                        <p className={`text-sm ${scrolledPastHero ? "text-gray-300" : "text-gray-500"}`}>Get in Touch</p>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Navbar;

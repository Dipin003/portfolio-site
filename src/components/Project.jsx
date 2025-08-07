import { PROJECTS } from '../constants/index.jsx';
import { motion } from 'framer-motion';

const Project = () => {
    return (
        <section
            className="px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-cyan-900 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[10px] rounded-bl-[10px] dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-cyan-900"
            id="projects"
        >
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1 }}
                className="text-center text-cyan-400 text-xl xs:text-2xl md:text-3xl font-thin tracking-widest mb-10 dark:text-cyan-300"
                style={{ letterSpacing: '0.2em' }}
            >
                Projects
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="block mx-auto mt-2 h-[1px] w-40 sm:w-[500px] bg-cyan-500 origin-center dark:bg-cyan-600"
                />
            </motion.h2>

            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {PROJECTS.map((project) => (
                    <div
                        key={project.id}
                        className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 dark:shadow-gray-700 dark:hover:shadow-gray-500"
                    >
                        <div className="md:flex">
                            <div className="overflow-hidden md:w-1/2 border-r border-cyan-800">
                                <a
                                    href={project.live ? project.link : project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transform transition duration-500 hover:scale-105 hover:brightness-110"
                                    />
                                </a>
                            </div>

                            <div className="p-6 flex flex-col justify-between md:w-1/2 bg-black/90 dark:bg-black">
                                <div>
                                    <h3 className="text-2xl text-gray-400 font-semibold mb-2 dark:text-gray-100 flex items-center gap-3">
                                        {project.title}

                                        {project.live && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-red-500 hover:underline"
                                                title="Live Website"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                                <span className="text-sm font-semibold">Live</span>
                                            </a>
                                        )}
                                    </h3>
                                    <p className="text-sm mb-4 dark:text-white">
                                        {project.description}
                                    </p>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-6"
                                >
                                    <a
                                        href={project.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="w-full px-5 py-2 text-white rounded-md text-sm font-medium hover:bg-teal-800 transition-colors duration-300 dark:bg-teal-600 dark:hover:bg-teal-700">
                                            View Project
                                        </button>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Project;

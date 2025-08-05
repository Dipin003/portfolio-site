import React from 'react';
import { PROJECTS } from '../constants/index.jsx';

const Project = () => {

    return (
        <section className="px-6 py-16 " id="projects">
            <h2
                className="text-center text-gray-500 text-xl xs:text-2xl md:text-3xl font-thin tracking-widest mb-10"
                style={{ letterSpacing: '0.2em' }}
            >
                Projects
            </h2>

            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                {PROJECTS.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="md:flex">
                            {/* Image Section */}
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full md:w-1/2 h-64 object-cover"
                            />

                            {/* Text Section */}
                            <div className="p-6 flex flex-col justify-between md:w-1/2">
                                <div>
                                    <h3 className="text-2xl text-gray-500 font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    {project.techStack && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-medium bg-blue-100 px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* View Button */}
                                <div className="mt-6">
                                    <button className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Project;

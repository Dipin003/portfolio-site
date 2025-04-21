import React from 'react'
import { PROJECTS } from '../constants/index.jsx'

const Project = () => {
    return (
        <section className='p-8' id='projects'>
            <h2 className='my-10 text-center text-3xl lg:text-6xl font-bold'>Projects</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
                {PROJECTS.map((project) => (
                    <a
                        target='_blank'
                        key={project.id}
                        href={project.link}
                        rel='noopener noreferrer'
                        className='block'
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src={project.imgSrc}
                                alt="project_imgs"
                                className='h-60 w-full object-cover'
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white'>
                                <h3 className='text-xl font-semibold'>{project.title}</h3>
                                <p className='text-sm'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Project

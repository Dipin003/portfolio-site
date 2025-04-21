import React from 'react'
import { LuImport } from 'react-icons/lu'
import me from '../assets/me.jpg'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none'>
                Dipin <br /> Kharayat
            </h1>
            <div className='mt-8'>
                <a href="/Dipin3.docx" target='_blank' rel='noopener noreferrer'
                download
                className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400'
                >
                    <span>Resume</span>
                    <LuImport className='ml-2'/>
                </a>
            </div>
            <div className='w-full'>
                <img src={me} alt="my_img" className='mt-8 h-96 w-full object-cover' />
            </div>
        </div>
    )
}

export default Hero
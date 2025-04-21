import React from 'react'
import { CONTACT, SOCIAL_MEDIA_LINKS } from '../constants'

const Contact = () => {
    return (
        <section id='contact'>
            <div className="mx-auto max-w-6xl">
                <p className='my-10 text-center text-3xl lg:text-8xl hover:text-lime-300'>
                    Interested In Working Together ?
                </p>
                <p className='py-4 text-center text-xl'>{CONTACT.text}</p>
                <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-5xl'>
                    {CONTACT.email}
                </p>
            </div>
            <div className="mt-20 flex item-center justify-center gap-6">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} target='_blank' rel='noopener noreferer'>
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className='my-8 text-center text-gray-400'>
                &copy; compileTab. All rights reserved.
            </p>
        </section>
    )
}

export default Contact
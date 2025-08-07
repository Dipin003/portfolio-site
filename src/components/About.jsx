import { useEffect, useState } from 'react';
import assets from '../assets/assets';
import { ABOUT } from '../constants';

import { motion } from 'framer-motion'


function useIsSmOrAbove() {
  const [isSmOrAbove, setIsSmOrAbove] = useState(() => window.innerWidth >= 640);

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsSmOrAbove(window.innerWidth >= 640);
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmOrAbove;
}

const About = () => {

  const isSmOrAbove = useIsSmOrAbove()

  return (

    <section id="about" className="w-full py-10 text-center bg-black">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}

        transition={{ duration: 1 }}
        className="relative text-center text-gray-500 text-xl xs:text-2xl md:text-3xl font-thin tracking-widest mb-10 "
        style={{ letterSpacing: '0.2em' }}
      >
        ABOUT
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="block mx-auto mt-2 h-[1px] w-40 sm:w-[500px] bg-gray-500 origin-center"
        />
      </motion.h2>


      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-20"
      >
        {/* Text Section */}
        <motion.div
          key={`text-${isSmOrAbove}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: !isSmOrAbove ? true : false,
            amount: 0.3
          }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, x: -20 }}
          className="lg:w-1/2 w-full text-center lg:text-left"
        >
          <p className="text-sm md:text-lg font-light text-gray-400 leading-relaxed">
            {ABOUT}
          </p>
        </motion.div>

        {/* Image Section - only animate one layer */}
        <motion.div
          key={`image-${isSmOrAbove}`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{
            once: !isSmOrAbove ? true : false,
            amount: 0.3
          }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <img
            src={assets.me}
            alt="Dipin_IMG"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-[350px] lg:h-[450px] rounded-full lg:rounded-lg object-cover border border-gray-600 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default About; 
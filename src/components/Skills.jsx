import { motion } from 'framer-motion';

import assets from '../assets/assets';

const skills = [
  { name: 'HTML', image: assets.html },
  { name: 'CSS', image: assets.css },
  { name: 'JavaScript', image: assets.javascript },
  { name: 'React', image: assets.reactLogo },
  { name: 'Tailwind', image: assets.tailwind },
  { name: 'Node.js', image: assets.node },
  { name: 'MongoDB', image: assets.mongodb },
  { name: 'Git', image: assets.git },
  { name: 'GitHub', image: assets.github },
  { name: 'Framer', image: assets.framer },
  { name: 'GSAP', image: assets.gsap },
];

const floatTransition = {
  y: {
    duration: 3,
    yoyo: Infinity,
    ease: "easeInOut",
  }
};

const Skills = () => {
  return (
    <div id='skills' className='max-h-screen w-full py-10 px-4'>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1 }}

        className=" text-center text-gray-500 text-xl xs:text-2xl md:text-3xl font-thin tracking-widest mb-10"
        style={{ letterSpacing: '0.2em' }}
      >
        Skills
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="block mx-auto mt-2 h-[1px] w-40 sm:w-[500px] bg-gray-500 origin-center"
        />
      </motion.h2>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center"
            animate={{
              y: [0, -10, 0]  // move up 15px then back down
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.1  // stagger animation for nicer effect
            }}
          >
            <div className='w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center border border-slate-600 rounded-full shadow-md'>
              <img src={skill.image} alt={skill.name} className="w-5 h-5 md:w-10 md:h-10 mb-2" />
              <p className="text-sm font-medium text-gray-600">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

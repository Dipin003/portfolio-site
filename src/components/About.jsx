import assets from '../assets/assets';
import { ABOUT } from '../constants';

const About = () => {
  return (
    <section id="about" className="w-full py-10 bg-black">
      <h2
        className="text-center text-gray-500 text-xl xs:text-2xl md:text-3xl font-thin tracking-widest mb-10"
        style={{ letterSpacing: '0.2em' }}
      >
        ABOUT
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-20">
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="text-sm md:text-lg font-light text-gray-400 leading-relaxed">
            {ABOUT}
          </p>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={assets.me}
            alt="Dipin_IMG"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-[350px] lg:h-[450px] rounded-full lg:rounded-lg object-cover border border-gray-600"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

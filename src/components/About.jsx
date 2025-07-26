import assets from '../assets/assets'
import { ABOUT } from '../constants'

const About = () => {

  return (
    <section id='about' className='w-full h-screen'>
      <h2 className='my-10 text-center  text-gray-500 text-4xl '
        style={{ letterSpacing: '0.2em' }}
      >ABOUT</h2>

      <div className='w-full flex justify-center items-center'>
        <div className=' mt-10'>
          <img src={assets.me} alt="dipin_IMG" className='w-[400px] h-[500px] rounded-lg' />
        </div>

        <div className='w-3/3 flex items-center justify-center'>
          <p className='m-8 max-w-xl text-2xl text-gray-400'>
            {ABOUT}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
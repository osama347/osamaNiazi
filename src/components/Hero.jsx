import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
   <section
   className='relative w-full h-screen
   mx-auto
   '
   >
    <div
    className={`${styles.paddingX} 
    relative  top-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5
    `}
    >
      <div
      className='flex flex-col justify-center items-center mt-5'>

      <div className='w-5 h-5 bg-[#915eff] rounded-full'>

        <div className='w-1 sm:h-80 h-40 violet-gradient mt-5 ml-2' >

        </div>
    
    </div>
      </div>
      <div>
        <h1
        className={`${styles.heroHeadText}`}
        >
          Hi, I'm <span
          className='text-[#00CED1] '
          > Osama Niazi  </span>
        </h1>
        <p
        className={`${styles.heroSubText}
        mt-2 text-white-100`}
        >
          I develop 3D experiences and websites for the web.
        </p>

      </div>

      
      </div>
      <ComputersCanvas />

    <div
    className='absolute xs:bottom-10 bottom-30 z-10 flex justify-center items-center w-full'
    >
      <a href="#about" >

      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center item-start p-2 z-10 '>

      <motion.div 
      animate={{
        y: [0, 24, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }
      }}
      className='w-3 h-3 bg-secondary rounded-full mb-5'

      />

      
        </div>
      </a>



    </div>
    
   </section>
  )
}

export default Hero
import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

import {fadeIn,textVariant} from '../utils/motion'


const ServiceCard = ({index,title,icon}) => {
  return (
    <div>
      <Tilt className="
      xs:w-[250px] w-full
      ">
      <motion.div
      variants={fadeIn("right","spring",index*0.5,0.75)}
      className='w-full green-pink-gradient rounded-[20px] rounded-[20px] shadow-card'
      
      >

        <div
        options={
          {
            max: 45,
            scale: 1,
            speed: 450,
          }
        }
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly  items-center flex-col "
        >

        <img  src={`${icon}`} alt={`${title}`}
        className='w-16 h-16 object-contain'
        />
        <h3
        className={`${styles.sectionSubText} text-center mt-5`}
        >
          {title}
        </h3>

        
        


        </div>

      </motion.div>


        </Tilt>

    </div>
  )
}



const About = () => {
  return (
    <
      
    >
    <div
    className='relative  mt-[220px]'
    >
    <motion.div>
      <p
      className={`${styles.sectionSubText} `}
      >
        Introduction
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        OverView
      </h2>
    </motion.div>
    <motion.p
    className='text-secondary mt-5 text-[18px] leading-[30px] max-w-7xl'
    >
      I am a self-taught developer who loves to create 3D experiences and websites for the web. I have been working in the field of web development for more than 2 years. I have worked with many clients and companies. I have also worked on
      many personal projects. I have a good understanding of the web and its technologies. I am a fast learner and I am always ready to learn new things. I am a team player and I can also work alone. I am a good communicator and I can
      communicate with my team members and clients easily. I am a hard worker and I always try to give my best in my work.

    </motion.p>
   
    </div>
     <div
     className='flex flex-wrap gap-10 mt-20'
     >
 
     {services.map((service) => {
       return (
         <ServiceCard title={service.title} index={service.id} icon={service.icon} />
       )
     }
     )}
     </div>
    
    </>
  )
}

export default SectionWrapper(About,"about")
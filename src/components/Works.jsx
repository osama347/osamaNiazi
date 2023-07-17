import React from 'react'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'



const ProjectCard =({
  index, name,description,tags,image, source_code_link
})=>{


  return(
    <motion.div
    variants={fadeIn("up","spring",index*0.5,0.75)}
    >
      <Tilt
     options={{
      max: 45,
      scale: 1,
      speed: 450,
     
    }}
    className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]  "
    
      >
        <div
        className='relative w-full h-[230px]'
        >
          <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />
          <div
          className='absolute inset-0 flex justify-end m-3 card-img_hove  '
          >
            <div
            onClick={()=>window.open(source_code_link,"_blank")}
            className='black-gradient flex items-center rounded-full w-10 h-10 justify-center  cursor-pointer'
            >
              <img
              src={github}
              alt="github"
              className='w-1/2 h-1/2'
              />

            </div>
          </div>

        </div>
          <div
          className='mt-5'
          >
            <h3
            className={`text-white font-bold text-[24px] `}
            >
              {name}
            </h3>
            <p
            className={` mt-2 text-secondary text-[14px] `}
            >
              {description}
            </p>


          </div>
          <div
          className='mt-4 flex flex-wrap gap-2'
          >
            { tags.map((tag,index)=>(
             <p
              key={tag.name}
              
              className={`text-[14px] text-secondary ${tag.color} `}
              >
                #{tag.name}
              </p>
            ))}


          </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div
    className='relative mt-[120px]'
    >
    <motion.div>
    <p
    className={`${styles.sectionSubText} `}
    >
      My works
    </p>
    <h2 className={`${styles.sectionHeadText}`}>
      Projects
    </h2>
  </motion.div>
  <div
  className='w-full flex'
  >
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      I am a self-taught developer who loves to create 3D experiences and websites for the web. I have been working in the field of web development for more than 2 years. I have worked with many clients and companies. I have also worked on
      many personal projects. I have a good understanding of the web and its technologies. I am a fast learner and I am always ready to learn new things. I am a team player and I can also work alone. I am a good communicator and I can
      communicate with my team members and clients easily. I am a hard worker and I always try to give my best in my work.


    </motion.p>


  </div>
    <div
    className='mt-20 flex flex-wrap gap-7'
    
    >

      {
        projects.map((project,index)=>{

          return(
            <ProjectCard key={project.index}  
            index={index}
            {...project}
            
            />
          )
        }
        
        ) 

        

      }



    </div>


  </div>

  )
}

export default SectionWrapper(Works, 'Works');
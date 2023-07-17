import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc' 
import { textVariant } from '../utils/motion'

 const ExperienceCard = ({experience}) => {
  return (
    <div>

      <VerticalTimelineElement
      contentStyle={
        {
          color: '#00CED1',
          background: '#1d1836',
          
          marginBottom: '20px',

        }
          }
      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: '#fff' }}
      icon={
        <div
        className='flex justify-center items-center w-full h-full '
        >
          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
        </div>
      }
      >
        <div
        
        >
          <h3
          className='text-white text-[24px] font-bold '
          >
            {experience.title}
          </h3>
          <p
          className='text-secondary text-[16px] font-semibold m-0'
          >
            {experience.company_name}
          </p>
          <ul
          className='mt-5 list-disc ml-5 space-y-2 '
          >

            {
              experience.points.map((point,index) => {
                return (
                  <li
                  key={index}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                )
              }
              )
            }
            

          </ul>
        </div>


      </VerticalTimelineElement>
      
    </div>
  )
}




const Experience = () => {
  return (
    <div
    className='mt-[120px]'
    >
      <motion.div>
      <p
      className={`${styles.sectionSubText} `}
      >
        what I have done
      </p>
      <h2 className={`${styles.sectionHeadText}`}>
        Experience
      </h2>
    </motion.div>

      <div
      className='mt-20 flex flex-col '

      >
        <VerticalTimeline>
          { experiences.map((experience,index) => {
            return (
              <ExperienceCard key={index}  experience={experience} />
            )
          }) }


        </VerticalTimeline>



      </div>

    </div>
  )
}

export default SectionWrapper(Experience,"work")
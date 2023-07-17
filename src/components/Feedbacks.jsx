import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn,textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { styles } from '../styles'

const FeedbackCard = ({
  index, name,designation,image , testimonial,company
}) => {
  return (
    <motion.div

    variants={fadeIn("up","spring",index*0.5,0.75)}
    className={` w-full sm:w-[320px]  bg-black-200 p-10 rounded-3xl  `}

    >
      <p
      className='text-white font-black text-[35px]  '
      >
        ""
      </p>
      <div
      className='mt-1'
      >
      <p
      className='text-white tracking-wider font-bold text-[18px]'
      >
        {testimonial}
      </p>
      <div
      className='mt-7 flex items-center justify-between gap-1'
      >
        <div className="flex-1 flex flex-col">
          <p
          className='text-white font-bold text-[18px] '
          > 
          <span
          className='blue-text-gradient '
          >@</span> {name}
          </p>
          <p
          className='text-secondary text-[12px]'
          >
            {designation} of {company}
          </p>


        </div>
        <img src={image} alt={name}     
        className='w-10 rounded-full object cover '       />
      </div>
      </div>
     
    </motion.div>
  )
}



const Feedbacks = () => {
  return (
    <div
    className='mt-12 bg-black-100 rounded-[20px]'

    >

      <div

      className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}
      >
        <motion.div
        variants={textVariant()}

        >

          <p
          className={`${styles.sectionSubText} `}
          >

            what others say about me
          </p>

        <h2
        className={`${styles.sectionHeadText} `}
        >
          Testimonails.
        </h2>



        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-7 mt-20 sm:flex-row md:flex-col lg:flex-row">
  {testimonials.map((testimonial, index) => (
    <FeedbackCard key={testimonial.name} {...testimonial} index={index} />
  ))}
</div>



    </div>
    </div>
  )
}



export default SectionWrapper(Feedbacks,"")
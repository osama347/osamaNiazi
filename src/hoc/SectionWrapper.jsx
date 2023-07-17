
import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'


const SectionWrapper = (Component ,idNum ) => function Hoc(){
    return (
        <div>
            
            
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: true,amount: 0.75}}
        className={`${styles.paddingX} 
        
        relative  max-w-7xl mx-auto 
        `}
        id={idNum}
        >
           
        <Component />
        
        </motion.div>
        <span className='hash-span mt-9' id={idNum}>
            </span>
        </div>
    )
}

export default SectionWrapper
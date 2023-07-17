import React,{useState, useRef} from 'react'
import {motion } from 'framer-motion'
import emialjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formref = useRef()
  const [form,setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

  }
  const handleSubmit = (e) => {
    const tempid = "template_r0mmcpr";
    const serviceid = "service_ji21wtj";
    const publicKey = "-8o30x1-08aTHaDzQ";
  
    e.preventDefault();
    setLoading(true);
  
    const formElement = document.querySelector("#yourFormId"); // Replace "yourFormId" with the actual ID of your form
    emialjs
      .sendForm(serviceid, tempid, formElement, publicKey)
      .then(() => {
        setLoading(false);
        alert("Your message has been sent successfully");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        formref.current.reset();
      })
      .catch((error) => {
        // Handle any errors that occurred during the promise
        console.error("Error sending the form:", error);
        setLoading(false);
      });
  };
  
  
  return (
    <div
    className='xl:mt-12 xl:flex-row flex-col-reverse mt-10 flex gap-10 overflow-hidden mb-20 '
    >
      <motion.div
      
      variants={slideIn('left','tween',0.2,1)}

      className='flex-[0.75]   bg-black-100 p-8 rounded-3xl '
      >
        <p
        className={`${styles.sectionSubText}`}
        >
          Get in touch 
        </p>
      <h3
      className={`${styles.sectionHeadText} `}
      >
        Contact
      </h3>

      
      <form
  id="yourFormId"
  ref={formref}
  onSubmit={handleSubmit}
  className='mt-12 flex flex-col gap-8'
>
  <label className='flex flex-col gap-2'>
    <span className='text-white font-medium mb-4'>
      Your Name
    </span>
    <input 
      onChange={handleChange}
      
      className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white font-medium outline-none'
      type="text"
      name="name"
      id="name"
      placeholder='What is your name'
      autoComplete="off" // Use "on" or "off" instead of false
    />
  </label>
  <label className='flex flex-col gap-2'>
    <span className='text-white font-medium mb-4'>
      Your Email
    </span>
    <input 
      onChange={handleChange}
      // value={from.email}
      className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white font-medium outline-none'
      type="email"
      name="email"
      id="email"
      placeholder='What is your Email'
      autoComplete="off" // Use "on" or "off" instead of false
    />
  </label>
  <label className='flex flex-col gap-2'>
    <span className='text-white font-medium mb-4'>
      Your Message
    </span>
    <textarea
      onChange={handleChange}
      // value={from.message}
      className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white font-medium outline-none'
      name="message"
      id="message"
      placeholder='What is your message'
      autoComplete="off" // Use "on" or "off" instead of false
    />
  </label>

  <button
    disabled={loading}
    type="submit"
    className='bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary w-fit outline-none'
  >
    {loading ? "Sending..." : "Send"}
  </button>

</form>


      </motion.div>

      <motion.div
      variants={slideIn('right','tween',0.2,1)}

      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]  items-center'

      >
       <EarthCanvas />
        </motion.div>      

    </div>
  )
}

export default SectionWrapper(Contact,"contact")
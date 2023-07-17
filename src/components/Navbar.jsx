import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo,menu,close } from '../assets'


const Navbar = () => {

  const [active,setActive] = useState("")
  const [toggle,setToggle] = useState(true)
  return (
    <nav
      className={
        `${styles.paddingX} w-full flex item-center py-5 top-0 z-20 bg-primary fixed`
      }
    >
      <div className="flex items-center justify-between w-full items-center max-w-7xl mx-auto">
      
      <Link to="/" className="flex items-center gap-2"
      
      onClick={()=>{
        setActive("")
        window.scrollTo(0,0);
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain ml-0"  />

        <p
        className='text-2xl font-bold text-white text-[18px] cursor-pointer' 
        > Osama  <span>| The Dark </span> </p>
      </Link>

      <ul
      className='list-none  sm:flex hidden flex-row gap-10  '
      >
        {
          navLinks.map((link,index)=>{
            return(
            <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            }
            hover:text-white text-[18px] cursor-pointer 
            
            `}
            onClick={()=>{
              setActive(link.title)
            }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
            )
        }
        )}

      </ul>
        
      <div className=" sm:hidden flex items-center justify-end gap-2">
        <img src={toggle ? menu : close} alt="menu" className="w-[28px] h-[28px] cursor-pointer " style={{color:"white"}}

       onClick={()=>{
        setToggle(!toggle);
       }}
        />
        <div
        className={`${
          toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl  z-10
        ` }
        

        >
          <ul
      className='list-none flex justify-end items-start flex-col gap-4  '
      >
        {
          navLinks.map((link,index)=>{
            return(
            <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            }
            font-poppins font-medium  cursor-pointer text-[16px]
            
            `}
            onClick={()=>{
              setToggle(!toggle);
            }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
            )
        }
        )}

      </ul>

        </div>
        </div>
      
      </div>
    </nav>
  )
}

export default Navbar
import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import DarkMode from './DarkMode.tsx'
const Navbar = (props) => {
  const { theme, setTheme } = props;
  const[selected,setSelected]=useState(0)
  function clickHandler() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function contactHandel(){
    window.location.href = 'mailto:deveshrao202002l@gmail.com';
  }
  
  return (
  
    // <div className={`flex w-full fixed justify-center h-10 py-9 top-0  z-10 transition duration-300 ease-in-out ${scrolling?'bg-stone-900 backdrop-blur-3xl bg-opacity-10 dark:bg-opacity-10 backdrop-brightness-95':'bg-stone-900 dark:bg-neutral-100'}`}>

      <div className='flex w-full justify-center h-10 py-9 bg-stone-900 dark:bg-neutral-100 ' >
      <nav className={`flex justify-between w-11/12 lg:w-10/12 mt-5 fixed  items-center py-5 top-0 px-4 lg:px-11 z-10 transition duration-300 ease-in-out ${scrolling?'bg-stone-900 backdrop-blur-3xl rounded-xl bg-opacity-10 dark:bg-opacity-10 backdrop-brightness-95 ':'bg-stone-900 dark:bg-neutral-100'} `}>
      <ul className='flex gap-x-5 lg:gap-x-10 text-sm lg:text-xl text-stone-300 dark:text-richblack-800'>
      <li className='relative group  '>
        <NavLink to='/' className='relative'>
          Home
          <div className="absolute w-full h-[2px] bg-neutral-100 dark:bg-stone-900 bottom-[-5px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
        </NavLink>
      </li>
      <li className='relative group '>
        <NavLink to='/about' className='relative'>
          About
          <div className="absolute w-full h-[2px]  bg-neutral-100 dark:bg-stone-900 bottom-[-5px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
        </NavLink>
      </li>
      <li className='relative group  '>
        <NavLink to='/projects' className='relative'>
          Projects
          <div className="absolute w-full h-[2px]  bg-neutral-100 dark:bg-stone-900 bottom-[-5px] left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
        </NavLink>
      </li>
    </ul>
        <div className='flex w-fit gap-x-4 lg:gap-x-10 items-center'>
          <button className='bg-neutral-100 text-stone-900 px-1 mt-1 lg:mt-0 py-2 lg:px-2 lg:py-2  text-sm lg:text-md hover:text-white hover:bg-stone-900 border-2 border-neutral-100 font-semibold rounded-lg w-[90px] dark:bg-stone-900 dark:text-white dark:hover:bg-neutral-100 dark:hover:text-stone-900 dark:hover:border-stone-900 ' onClick={contactHandel}>Hire Me</button>
        <DarkMode theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </div>

  )
}

export default Navbar

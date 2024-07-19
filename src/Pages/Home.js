import React from 'react'
import './Home.css'
import student from '../asset/student.png'
import { SiGithub } from "react-icons/si";
import { FaTwitter ,FaLinkedin} from "react-icons/fa";
import ExHeroPage from '../component/ExHeroPage';
import {motion} from 'framer-motion'
const Home = (props) => {
  const{theme,setTheme}=props
  function contactHandel(url) {
    window.open(url, '_blank');
}

  return (
    <motion.div
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{opacity:0}}
    >
    <div className=' flex items-center justify-center'>
      <div className=' lg:mt-8  flex  w-11/12 justify-between h-[600px]  lg:items-center'>
      <div className={`max-[400px]:hidden   ${theme==='dark'?'lightImage':'darkImage'}`}>
      <img src={student} width={500}  />
      </div>
      <div className='text-white dark:text-stone-900 mt-24 lg:mt-0 '>
      <p className='lg:text-5xl text-4xl w-[400px] max-[400px]:text-balance lg:w-[700px] font-bold'>Elevating web experiences with creative precision and passion.</p>
      <p className='lg:w-[600px] w-[390px] max-[400px]:text-balance mt-8 lg:text-lg text-[19px]'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
      <div className='flex items-center mt-3 lg:mt-0 gap-x-8 w-[300px] lg:w-fit'>
      <button className='bg-neutral-100 text-stone-900 lg:px-2 lg:py-2 py-1 mt-5 text-xl lg:text-2xl hover:text-white hover:bg-stone-900 border-2 border-neutral-100 font-semibold rounded-lg w-[150px] dark:bg-stone-900 dark:text-white dark:hover:bg-neutral-100 dark:hover:text-stone-900 dark:hover:border-stone-900 'onClick={()=>contactHandel('https://drive.google.com/file/d/1UYHOtZl_dss2iXq-Z-tFMt0l2GQpSi74/view?usp=sharing')}>Resume</button>
      <FaTwitter className='mt-[25px] transition ease-in-out duration-300 delay-75 hover:-translate-y-1 hover:scale-110' size={30}
      onClick={()=>contactHandel('https://drive.google.com/file/d/1UYHOtZl_dss2iXq-Z-tFMt0l2GQpSi74/view?usp=sharing')} />
      <SiGithub className='mt-5 transition ease-in-out duration-300 delay-75  hover:-translate-y-1 hover:scale-110' size={30} />
      <FaLinkedin className='mt-5 transition ease-in-out duration-300 delay-75 hover:-translate-y-1 hover:scale-110'  size={30} />
      </div>
      </div>    
      </div>
      </div>
      <ExHeroPage theme={theme} setTheme={setTheme}/> 
        
    </motion.div>
  )
}

export default Home
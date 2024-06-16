import React, { useState } from 'react'
import animation from '../asset/animation.json'
import Lottie from 'lottie-react'
import logo192 from '../asset/logo192.png'
import node from '../asset/node.png'
import mongo from '../asset/mongo.png'
import express from '../asset/express.png'
const About = (props) => {
  const { theme, setTheme } = props
  return (
    <div className='flex flex-col justify-center items-center lg:mt-14 h-fit w-screen'>
    <p className='text-white dark:text-stone-900 max-[400px]:mt-20 max-[400px]:mb-20  lg:mt-8 max-[400px]:text-[25px] lg:text-7xl font-bold w-fit mb-10 '>Passion ignites the spark within.</p>
    <div className='w-screen flex max-[400px]:flex-col-reverse lg:mt-10'>
      <div className="flex flex-col ">
        <p className='text-white dark:text-stone-900 max-[400px]:mt-10 text-xl font-semibold opacity-50 pb-5 px-5 lg:px-[150px] uppercase'>Biography</p>
        <p className='text-white dark:text-stone-900 max-[400px]:pl-10 max-[400px]:text-lg max-[400px]:text-center text-xl max-[400px]:w-[350px] max-w-[800px] lg:px-[150px] '>
          Hi there, I'm Devesh Rao, a dedicated web developer with a keen eye for crafting elegant and user-centric digital solutions. I thrive on turning my clients' visions into captivating realities.
          <br />
          <br />
          I firmly believe that design transcends mere aesthetics; it's about problem-solving and crafting seamless, intuitive experiences for users. Whether it's a website, web app, or any other digital endeavor, I am committed to delivering excellence in design and user experience.
          <br />
          <br />
          My approach is rooted in a blend of creativity and technical expertise, always striving to push the boundaries of innovation. I eagerly anticipate the chance to contribute my skills and passion to your upcoming project, ensuring it stands out in the digital landscape.
        </p>

      </div>
      <div className={`lg:w-2/5 px-11 w-[100px] ml-6 lg:ml-0 ${theme === 'dark' ? 'lightImage' : 'darkImage'}`}  >
        <Lottie animationData={animation} />
      </div>
    </div>


    {/* Skills */}


    <div className='mt-10'>
        <p className='text-white dark:text-stone-900 text-center  mt-10 max-[400px]:px-0 text-7xl font-bold w-screen px-[150px] py-3 mb-14 '>Skills</p>
      </div>
      <div className='flex justify-center gap-x-10 w-screen max-[400px]:flex-col max-[400px]:items-center max-[400px]:gap-y-8 '>
        <div className=' dark:bg-stone-100 bg-stone-800  w-[200px] h-[200px] rounded-md shadow-md shadow-black dark:shadow-xl flex flex-col items-center justify-center transition ease-in-out duration-100 delay-75 hover:-translate-y-1 hover:scale-110'>
          <img src={logo192} width={130} />
          <p className='text-white dark:text-stone-900 text-xl mt-3'>React</p>
        </div>
        <div className='dark:bg-stone-100 dark:shadow-xl bg-stone-800 w-[200px] h-[200px] rounded-md shadow-md shadow-black flex flex-col items-center justify-center transition ease-in-out duration-100 delay-75 hover:-translate-y-1 hover:scale-110'>
          <img src={node} width={130} />
          <p className='text-white dark:text-stone-900 text-xl mt-3'>NodeJS</p>
        </div>
        <div className='dark:bg-stone-100 dark:shadow-xl bg-stone-800 w-[200px] h-[200px] rounded-md shadow-md shadow-black flex flex-col items-center justify-center transition ease-in-out duration-100 delay-75 hover:-translate-y-1 hover:scale-110'>
          <img src={mongo} width={130} />
          <p className='text-white dark:text-stone-900 text-xl mt-3'>MongoDB</p>
        </div>
        <div className='dark:bg-stone-100 dark:shadow-xl bg-stone-800 w-[200px] h-[200px] rounded-md shadow-md shadow-black flex flex-col items-center justify-center transition ease-in-out duration-100 delay-75 hover:-translate-y-1 hover:scale-110'>
          <img src={express} width={250} />
          <p className='text-white dark:text-stone-900 text-xl mt-3'>ExpressJS</p>
        </div>
      </div>


    {/* Education */}


    <div className='mt-10 max-[400px]:w-[400px] w-[900px] flex flex-col items-center mb-32 justify-center'>
      <p className='text-white dark:text-stone-900 max-[400px]:px-10 w-[900px] text-center mt-10 max-[400px]:text-6xl text-7xl font-bold  py-3 mb-14' >Education</p>
      <div className='w-full flex justify-center gap-x-14 max-[400px]:gap-x-8 max-[400px]:justify-start max-[400px]:pl-10'>
        <div className='h-[530px] max-[400px]:h-[600px] relative w-1 bg-neutral-100 dark:bg-stone-900'>
          <div className='h-1 w-6 absolute top-5 right-[-10px] bg-neutral-100 dark:bg-stone-900'></div>
          <div className='h-1 w-6 absolute top-[240px] right-[-10px] bg-neutral-100 dark:bg-stone-900'></div>
          <div className='h-1 w-6 absolute top-[410px] right-[-10px] bg-neutral-100 dark:bg-stone-900'></div>
        </div>
          <ul className='text-white dark:text-stone-900 space-y-10 max-[400px]:w-[100px] max-[400px]:mb-24'>
            <li className='w-[650px] max-[400px]:w-[400px] space-y-2'>
              <h1 className='capitalize font-bold text-4xl max-[400px]:text-2xl '>Bachelor Of Technology In Computer Science</h1>
              <p className='capitalize font-medium text-xl max-[400px]:text-[16px] text-white/75 dark:text-stone-900/75'>2020-2024 | Amity University Haryana (AUH) | CGPA: 7.60/10</p>
              <p className='font-medium text-lg max-[400px]:text-[16px]  w-full max-[400px]:w-[300px]'>Relevant courses included Data Structures and Algorithms, Computer Software Engineering,OS and DBMS etc</p>
            </li>
            <li className='w-[650px] max-[400px]:w-[500px]  space-y-2'>
              <h1 className='capitalize font-bold text-4xl max-[400px]:text-2xl'>12th - Science, CBSE  </h1>
              <p className='capitalize font-medium text-xl max-[400px]:text-[16px] text-white/75 dark:text-stone-900/75'>2019-2020 | Tagore Public School | 74%</p>
              <p className='ont-medium text-lg w-full max-[400px]:text-[16px] max-[400px]:w-[300px]'>Studied Physics, Chemistry, Mathematics, and English with Music as optional Subject.</p>
            </li>
            <li className='w-[650px] max-[400px]:w-[500px] space-y-2'>
              <h1 className='capitalize font-bold text-4xl  max-[400px]:text-2xl'>10th - Science, CBSE </h1>
              <p className='capitalize font-medium text-xl max-[400px]:text-[16px] text-white/75 dark:text-stone-900/75'>2017-2018 | Tagore Public School | 71%</p>
              <p className='ont-medium text-lg w-full max-[400px]:text-[16px] max-[400px]:w-[300px]'>Studied Physics, Chemistry, Mathematics, Hindi, and English with Music as optional Subject.</p>
            </li>
          </ul>
      </div>
    </div>
  </div>
  )
}

export default About
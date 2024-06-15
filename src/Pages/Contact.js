import React from 'react'
import { SiGithub } from "react-icons/si";
import { FaTwitter ,FaLinkedin} from "react-icons/fa";
const Contact = () => {
  return (
    <div className='h-screen w-screen flex justify-center'>
      <div className='text-white w-[500px] h-[550px] mt-10 pt-10 space-y-5 bg-white backdrop-blur-3xl backdrop-brightness-95 rounded-lg bg-opacity-10'>
        <h1 className='font-bold text-5xl'>Contact Me</h1>
        <p className='text-lg w-[450px]'>I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.</p>
        
        
        <div>
        <label>
        <p>Name</p>
        <input type='text'/>
        </label>
        <label>
        <p>Email</p>
        <input type='email'/>
        </label>
        <label>
        <p>Subject</p>
        <input type='text'/>
        </label>
        <label>
        <p>Meassage</p>
        <input type='text'/>
        </label>
        </div>


        <div className='flex gap-x-4 '>
        <FaTwitter className='mt-[25px] transition ease-in-out duration-300 delay-75 hover:-translate-y-1 hover:scale-110' size={30} />
      <SiGithub className='mt-5 transition ease-in-out duration-300 delay-75  hover:-translate-y-1 hover:scale-110' size={30} />
      <FaLinkedin className='mt-5 transition ease-in-out duration-300 delay-75 hover:-translate-y-1 hover:scale-110'  size={30} />
        </div>
      </div>
    </div>
  )
}

export default Contact
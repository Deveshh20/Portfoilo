import React, {useState,useEffect}from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Home from '../Pages/Home';
import Loader from './Loader';
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = ({theme,setTheme}) => {
    const[loader,setLoader]=useState(false)
    const location=useLocation();
    // useEffect(()=>{
    //   if(location.pathname==='/about'){
    //     setLoader(true)
    //     setTimeout(()=>{
    //       setLoader(false)
    //     },1000)
    //   }
    // },[location])

  return (
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/>
        <Route path='/about' element={loader?<Loader/>:<About theme={theme} setTheme={setTheme}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
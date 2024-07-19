import './App.css';
import Navbar from './component/Navbar'
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import AnimatedRoutes from './component/AnimatedRoutes';

function App() {
  const[theme,setTheme]=useState('light')
  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  return (
    <div className="w-screen h-full max-[400px]:h-fit bg-stone-900  dark:bg-neutral-100 overflow-hidden ">
      <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <AnimatedRoutes theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  );
}

export default App;

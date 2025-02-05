import React, { useEffect } from 'react'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import MainPage from './MainPage';


function App() {

  return (
    <>
     {/* <Hero /> */}
     <MainPage />
     {/* <div className="min-h-screen bg-black"></div> */}
    </>
  )
}

export default App




import React, { useEffect } from 'react'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import MainPage from './MainPage';
import { BsGithub } from 'react-icons/bs';


function App() {

  useEffect(() => {
    document.title = "Jalen Arms - Portfolio"
  }, [])

  return (
    <>
     {/* <Hero /> */}
     <MainPage />
     {/* <section className="hero bg-cover bg-center flex justify-between shadow-sm shadow-gray-500" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .85)), url("https://res.cloudinary.com/dvlhy87zl/image/upload/v1679852321/dynamic-wavy-line-colorful-background_67845-1117_jiumzc.jpg")'}}>
        <div className=" w-[90%] mx-auto pt-40 pb-20">
          <div className="flex flex-col">
            <h1 className="text-6xl max-sm:text-5xl font-bold text-white leading-tight ">
              Jalen Arms
            </h1>
            <p className="w-fit text-gray-200 text-xl">Data Engineer at Community Bridges, Inc.</p>
            <a className="w-fit text-sm text-gray-300 hover:text-blue-500" href="mailto:jalenarms@outlook.com text-xs">Email: jalenarms@outlook.com</a>
            <div className="icons flex gap-3 text-gray-300 my-2">
              <a href={"https://www.linkedin.com/in/jalen-arms-38304a241"} target="_blank" className="hover:text-blue-400">
                <FaLinkedin className="text-4xl" />
              </a>
              <a href={"https://github.com/jalenarms1"} target="_blank" className="hover:text-blue-400">
                <BsGithub className="text-4xl" />
              </a>
              <a href={"https://www.upwork.com/freelancers/~01cd6b779e11f90eb8"} target="_blank" className="hover:text-blue-400">
                <SiUpwork className="text-4xl" />
              </a>
            </div>
          </div>
            <div className="py-3"></div>
          <p className="text-xl text-white leading-tight mb-5">
            Full-stack Software Developer.
          </p>
          <p className="text-sm text-white leading-tight mb-12">
           Next.js <span className="text-red-500">|</span> React JS <span className="text-blue-500">|</span> ASP.NET 6 <span className="text-purple-500">|</span> Angular  <span className="text-cyan-500">|</span>  Node.js <span className="text-green-500">|</span> Python <span className="text-indigo-500">|</span> SQL Server
          </p>
          
        </div>
        
      </section>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black w-full "></div> */}
     {/* <div className="min-h-screen bg-black"></div> */}
    </>
  )
}

export default App




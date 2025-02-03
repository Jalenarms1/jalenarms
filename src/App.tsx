import React, { useEffect } from 'react'
import './App.css'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";


function App() {

  return (
    <>
      <div className="flex flex-col snap-y snap-mandatory h-[100vh] overflow-y-scroll">
        <section style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/premium_photo-1672940671025-113a634f83d1.jpeg?alt=media&token=dbc7b959-9026-4439-84ac-c3e7d9788a7a')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="section min-h-screen min-w-[100vw]  flex flex-col font-mono relative">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="inset-0 flex flex-col absolute bg-black bg-opacity-75">
            <div className="p-5 flex justify-between min-w-full shadow-sm ">
              <div className="flex items-center gap-3">
                <img className='shadow-md shadow-neutral-700 w-12 h-12 rounded-full hover:shadow-lg hover:shadow-neutral-600 cursor-pointer' src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/anonymous-boy-icon-cartoon-style-vector.jpg?alt=media&token=e24c3ef2-6b93-42dc-aadd-c7b0a3ca2f82" />
                
                <div className="flex flex-col">
                  <p className='text-xl text-white'>Jalen Arms</p>
                  <a href='mailto:jalenarms@outlook.com' className='text-sm text-neutral-400'>jalenarms@outlook.com</a>
                </div>
              </div>

              <div>

              </div>

              {/* <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <FaGithub className='text-2xl text-white cursor-pointer' />
                  <p className='text-white text-sm'>Github</p>
                </div>
                <FaLinkedin className='text-2xl text-blue-500 cursor-pointer' />
                <SiUpwork className='text-2xl text-green-500 cursor-pointer' />
                

              </div> */}
              
              
            </div>
            <div className="flex justify-center items-center flex-col sm:h-[75vh] h-[50vh] gap-10 relative">
              <p className="sm:text-4xl md:text-6xl text-3xl font-semibold text-white">{"{ Fullstack Developer }"}</p>
              <div className="flex flex-col items-center gap-2">
                <p className='text-neutral-400'>React.js | Golang | Python | SQL</p>
                <IoCodeSlash className='text-neutral-400 text-lg'/>
              </div>
              <div className="flex items-start gap-14 absolute bottom-0">
                <div className="flex items-center gap-2 cursor-pointer  pb-3">
                  <FaGithub className='text-3xl text-white active:text-neutral-400 cursor-pointer' />
                  {/* <p className='text-white text-sm'>Github</p> */}
                  {/* <FaArrowRightLong className='text-neutral-500' /> */}
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className='text-3xl text-blue-500 active:text-blue-600 cursor-pointer' />
                  {/* <p className='text-white text-sm'>LinkedIn</p> */}
                </div>
                <div className="flex items-center gap-2">
                  <SiUpwork className='text-3xl text-green-500 active:text-green-600 cursor-pointer' />
                  {/* <p className='text-white text-sm'>Upwork</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[100vh] bg-black min-w-full "></section>
        <section className="min-h-[100vh] bg-white min-w-full "></section>

      </div>
    </>
  )
}

export default App

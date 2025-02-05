import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { FaFileArrowDown } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import {motion} from "framer-motion"

const Hero = () => {
    
  return (
    <div  className="min-h-screen flex flex-col md:w-3/4 gap-28 w-full relative text-white pb-60">
        <div id="home" className="flex flex-col md:flex-row w-full mx-auto gap-20">
            <div className="flex flex-col items-start md:w-3/4 w-full px-8">
                <div className="flex items-center gap-2">
                    <img className='shadow-md shadow-neutral-700 w-12 h-12 mb-2 rounded-full hover:shadow-lg hover:shadow-neutral-600 cursor-pointer' src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/anonymous-boy-icon-cartoon-style-vector.jpg?alt=media&token=e24c3ef2-6b93-42dc-aadd-c7b0a3ca2f82" />
                    <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
                    <p className="text-zinc-400">Available</p>
                </div>

                <p className="md:text-6xl text-3xl font-semibold">Fullstack</p>
                <p className="text-cyan-400 md:text-6xl text-3xl font-semibold">Software Developer</p>
                <p className="text-zinc-300 mt-5 font-light">Hi, I’m Jalen Arms—a software developer who loves building intuitive, high-performance solutions. From web apps and backend systems to automation tools, CLI applications, and database-driven software, I take on a wide range of projects. No matter the ask of the task, I enjoy providing meaningful software solutions.</p>

                <p className="text-zinc-300 mt-5 font-light">Schedule a meeting to discuss my skills and experience in more detail. I look forward to connecting with you soon!</p>

                <div className="flex items-center mt-5 gap-2">
                    <button className=' bg-yellow-400 active:bg-yellow-500 rounded-lg text-black font-semibold p-2 px-4 flex items-center gap-2'>
                        <CiCalendar />
                        <p>Schedule</p>
                        </button>
                    <button className=' border border-zinc-400 active:bg-zinc-800 rounded-lg  font-semibold p-2 px-4 flex items-center gap-2 text-zinc-400'>
                        <FaFileArrowDown />
                        <p>Download CV</p>
                    </button>
                </div>

                <div className="h-[0.5px] w-full bg-zinc-700 my-6"></div>

                <div className="flex w-full justify-between items-center">
                    <div className="flex items-start gap-3">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <FaGithub className='text-4xl text-white active:text-neutral-400 cursor-pointer' />
                        </div>
                        <div className="flex items-center gap-2">
                            <FaLinkedin className='text-4xl text-blue-500 active:text-blue-600 cursor-pointer' />
                        </div>
                        <div className="flex items-center gap-2">
                            <SiUpwork className='text-4xl text-green-500 active:text-green-600 cursor-pointer' />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="w-72 md:mx-0 mx-auto">
                {/* https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-12-28%20at%2009.48.18.png?alt=media&token=862ef46c-2dfd-475b-8cb8-72539a50a982 */}
                {/* https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/updated-iconsize.png?alt=media&token=479437fa-5102-4499-9356-908c51d79893 */}
                {/* https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-01-27%20at%2021.43.07.png?alt=media&token=3daab2c6-645c-4d88-938a-35a7ba51a28c */}
                <motion.img 
                    src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-01-27%20at%2021.43.07.png?alt=media&token=3daab2c6-645c-4d88-938a-35a7ba51a28c" 
                    alt="ios-img" 
                    className="object-contain p-1 rounded-3xl border border-zinc-800 shadow-lg shadow-black"
                    initial={{ rotateY: 270, opacity: 1 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </div>


        </div>  
        <div id="about" className="flex flex-col w-[50vw] h-96 border rounded-md border-zinc-800">

        </div>
            
    </div>
  )
}

export default Hero

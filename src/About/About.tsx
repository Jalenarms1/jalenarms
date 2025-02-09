import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { FaFileArrowDown } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { motion, useInView } from "framer-motion"
import Divider from '@/Shared/Divider';
import reactLogo from "../assets/react.svg"
import goLogo from "../assets/go.png"
import pythonLogo from "../assets/python.webp"
import sqlLogo from "../assets/sql1.png"
import nodeLogo from "../assets/nodejs.png"
import tailwindLogo from "../assets/tailwind.png"
import cssLogo from "../assets/css.svg"
import htmlLogo from "../assets/html.webp"
import javascriptLogo from "../assets/javascript.webp"
import swiftui from "../assets/swiftui.png"
import swift from "../assets/swift.svg"

const About = ({onIsInView}: {onIsInView: () => void}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false })

    const containerRef = useRef(null)
    const containerInView = useInView(containerRef, { once: false })

    useEffect(() => {
        if (containerInView) { onIsInView() }
    }, [containerInView])

  return (
        <motion.div id="About"  className="flex flex-col w-full md:w-[80%] mx-auto p-5 min-h-screen mt-28 gap-48">
            <div ref={containerRef}  className="flex flex-col  md:flex-row w-full mx-auto gap-20">
                <div className="flex flex-col items-start md:w-3/4 w-full px-8">
                    <div className="flex items-center gap-2">
                        <img className='shadow-md shadow-neutral-700 w-12 h-12 mb-2 rounded-full hover:shadow-lg hover:shadow-neutral-600 cursor-pointer' src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/anonymous-boy-icon-cartoon-style-vector.jpg?alt=media&token=e24c3ef2-6b93-42dc-aadd-c7b0a3ca2f82" />
                        <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
                        <p className="text-zinc-400">Available</p>
                    </div>

                    <p className="md:text-4xl lg:text-5xl xl:text-6xl text-3xl font-semibold text-white">Fullstack</p>
                    <p className="text-cyan-400 md:text-4xl lg:text-5xl xl:text-6xl text-3xl font-semibold">Software Developer</p>
                    <p className="text-zinc-300 mt-5 font-light">Hi, I’m Jalen Arms—a software developer who loves building intuitive, high-performance software. From web apps and backend systems to automation tools, CLI applications, and database-driven software, I take on a wide range of projects. No matter the ask of the task, I enjoy providing meaningful software solutions.</p>

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
                        className=" object-contain rounded-3xl border border-zinc-800 shadow-lg shadow-black"
                        initial={{ rotateY: 270, opacity: 1 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>


            </div>  
            <motion.div
                ref={ref} 
                className="flex flex-col sm:w-[90%] w-full gap-7 p-8 justify-start text-white sm:p-0 mb-40"
                initial={{ opacity: 0, y: 50 }}  // Start hidden and slightly below
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            >
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold text-white mb-3">Technologies I Use</h2>
                    <p className='text-sm text-zinc-300 pb-2'>This list includes languages and frameworks I use on any given project, but is not limited to what I am capable of using.</p>
                    {/* <Divider /> */}

                </div>
                <div className="flex items-center sm:gap-2 gap-5 flex-wrap">
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-2 sm:w-60 w-full">
                        <img src={reactLogo} alt='react-logo' className='w-10 h-10' />
                        <div className="flex flex-col ">
                            <p>React.js</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-2 sm:w-60 w-full">
                        <img src={goLogo} alt='react-logo' className='w-12 h-10' />
                        <div className="flex flex-col ">
                            <p>Golang</p>
                            <p className='text-xs text-zinc-400'>2+ years</p>
                        </div>
                    </div>

                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={pythonLogo} alt='react-logo' className='w-10 h-10' />
                        <div className="flex flex-col ">
                            <p>Python</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={sqlLogo} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>SQL</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={nodeLogo} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>Node.js</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={tailwindLogo} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>Tailwind CSS</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={cssLogo} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>CSS</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={htmlLogo} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>HTML</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={javascriptLogo} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>JavaScript</p>
                            <p className='text-xs text-zinc-400'>3+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={swiftui} alt='react-logo' className='w-10 object-contain h-10' />
                        <div className="flex flex-col ">
                            <p>SwiftUI</p>
                            <p className='text-xs text-zinc-400'>1+ years</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                        <img src={swift} alt='react-logo' className='w-8 object-contain h-8' />
                        <div className="flex flex-col ">
                            <p>Swift</p>
                            <p className='text-xs text-zinc-400'>1+ years</p>
                        </div>
                    </div>

                </div>
            </motion.div>

        </motion.div>
  )
}

export default About

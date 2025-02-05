import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { FaFileArrowDown } from "react-icons/fa6";


const Hero = () => {
    
  return (
    <div id="home" className="min-h-screen overflow-y-auto flex flex-col  w-full relative text-white ">
            <div className="h-[90vh] flex items-center w-3/4  mx-auto justify-between">
                <div className="w-full flex items-start gap-20 justify-between">
                    <div className="flex flex-col items-start w-2/3">
                        <div className="flex items-center gap-2">
                            <img className='shadow-md shadow-neutral-700 w-12 h-12 mb-2 rounded-full hover:shadow-lg hover:shadow-neutral-600 cursor-pointer' src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/anonymous-boy-icon-cartoon-style-vector.jpg?alt=media&token=e24c3ef2-6b93-42dc-aadd-c7b0a3ca2f82" />
                            <div className="w-2 h-2 bg-green-400 rounded-full ml-2"></div>
                            <p className="text-zinc-400">Available</p>
                        </div>

                        <p className="text-6xl font-semibold">Fullstack</p>
                        <p className="text-cyan-400 text-6xl font-semibold">Software Developer</p>
                        <p className="text-zinc-400 mt-5 font-light">Hi, I’m Jalen Arms—a software developer who loves building intuitive, high-performance solutions. From web apps and backend systems to automation tools, CLI applications, and database-driven software, I take on a wide range of projects. Whether it’s crafting seamless user experiences, optimizing workflows, or working with data, I enjoy providing meaninful software solutions.</p>

                        <p className="text-zinc-400 mt-5 font-light">Book a meeting for a time to discuss my skillset and experience further. I look forward to speaking with you soon!</p>

                        <div className="flex items-center mt-5 gap-2">
                            <button className=' bg-yellow-400 active:bg-yellow-500 rounded-lg text-black font-semibold p-2 px-4'>Schedule meeting</button>
                            <button className=' border border-zinc-400 active:bg-zinc-800 rounded-lg  font-semibold p-2 px-4 flex items-center gap-2 text-zinc-400'>
                                <FaFileArrowDown />
                                <p>Download CV</p>
                            </button>
                        </div>

                        <div className="h-[0.5px] w-full bg-zinc-700 my-10"></div>

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
                    <div className="w-80 h-[70vh] ">
                        {/* https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Simulator%20Screenshot%20-%20iPhone%2016%20-%202024-12-28%20at%2009.48.18.png?alt=media&token=862ef46c-2dfd-475b-8cb8-72539a50a982 */}
                        {/* https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/updated-iconsize.png?alt=media&token=479437fa-5102-4499-9356-908c51d79893 */}
                        {/* https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-01-27%20at%2021.43.07.png?alt=media&token=3daab2c6-645c-4d88-938a-35a7ba51a28c */}
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Simulator%20Screenshot%20-%20iPhone%2016%20-%202025-01-27%20at%2021.43.07.png?alt=media&token=3daab2c6-645c-4d88-938a-35a7ba51a28c" 
                            alt="ios-img" 
                            className="object-fill p-1 rounded-3xl border border-zinc-800"
                        />

                    </div>


                </div>
                {/* <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                        </div>
                    </div>
                </div> */}
            </div>
            
        </div>
  )
}

export default Hero

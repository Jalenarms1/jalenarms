import React, { useEffect, useRef } from 'react'
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
import nextjs from "../assets/nextjs.png"
import { motion, useInView } from "framer-motion"


const TechnologiesAndSkills = ({onIsInView}: {onIsInView: () => void}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false })
    const containerRef = useRef(null)
    const containerInView = useInView(containerRef, { once: false })

    useEffect(() => {
        if (containerInView) { onIsInView() }
    }, [containerInView])

  return (
    <motion.div
        ref={containerRef} 
        className="flex flex-col w-full lg:w-[75%] sm:w-[80%] mx-auto gap-7  justify-start text-white sm:p-0  md:mt-0 "
        initial={{ opacity: 0, y: 50 }}  // Start hidden and slightly below
        animate={containerInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
        <div className="flex flex-col">
            <h2 className="text-3xl font-semibold text-white mb-3">Technologies I Use</h2>
            <p className='text-sm text-zinc-300 pb-2'>This list includes languages and frameworks I use on any given project, but is not limited to what I am capable of using.</p>
            {/* <Divider /> */}

        </div>
        <div className="md:flex items-center grid grid-cols-2 sm:gap-2 gap-5 flex-wrap">
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
            {/* <div className="flex items-center bg-zinc-950 p-2 rounded-md gap-3 sm:w-60 w-full">
                <img src={nextjs} alt='react-logo' className='w-8 object-contain h-8' />
                <div className="flex flex-col ">
                    <p>Next.js</p>
                    <p className='text-xs text-zinc-400'>2+ years</p>
                </div>
            </div> */}


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
  )
}

export default TechnologiesAndSkills

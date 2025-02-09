import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import goLogo from "../assets/go.png"
import pythonLogo from "../assets/python.webp"
import sqlLogo from "../assets/sql1.png"
import nodeLogo from "../assets/nodejs.png"
import tailwindLogo from "../assets/tailwind.png"
import cssLogo from "../assets/css.svg"
import htmlLogo from "../assets/html.webp"
import javascriptLogo from "../assets/javascript.webp"
import reactLogo from "../assets/react.svg"


const Work = ({onIsInView}: {onIsInView: () => void}) => {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })

  useEffect(() => {
      if (containerInView) { onIsInView() }
  }, [containerInView])

  return (
    <motion.section id="Work" ref={containerRef}  className="flex flex-col justify-start max-w-[100vw] md:w-[80%] mx-auto sm:gap-10 gap-20 px-5">
      <div className="flex flex-col gap-2">
        <p className="text-3xl text-white font-semibold">Work History</p>
      </div>

      <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <p className='text-zinc-400 text-sm col-span-2'>2023 - Current</p>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-lg'>Community Bridges Inc.</p>
            <div className="flex items-center gap-2">
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={goLogo} alt='' className='w-8 h-8 rounded-sm' />
              <img src={sqlLogo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={reactLogo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={nodeLogo} alt='' className='w-6 h-6 rounded-sm' />

            </div>

          </div>
          <p className='text-sm text-cyan-400'>Data Engineer</p>
          <div className="flex flex-col mt-8 gap-5">
            <div className="flex items-start gap-4">
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Automate script execution using Windows Task Scheduler for efficient and timely operations</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Process and analyze Excel files with the Pandas library, seamlessly importing data into the database</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Manage secure file transfers through inbound and outbound SFTP automation, ensuring efficient distribution</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={goLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Create CLI programs, such as a git-like version control tool</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Automate refreshing excel files using go-ole</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={sqlLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Construct SQL queries to generate meaningful datasets tailored to staff requirements</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Create stored procedures to match native data with recently imported data from automated scripts</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Integrate SQL seamlessly into applications, enabling efficient CRUD operations for database interactions in whichever language I am working in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 items-center gap-10">
        <p className='text-zinc-400 text-sm col-span-2'>2024 - 2025</p>
        <div className="flex flex-col">
          <p className='font-semibold text-white text-lg'>HotSpot</p>
        </div>
      </div>


    </motion.section>
  )
}

export default Work

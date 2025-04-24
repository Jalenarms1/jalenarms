import React from 'react'
import sqlLogo from "../assets/sql1.png"
import nodeLogo from "../assets/nodejs.png"
import reactLogo from "../assets/react.svg"
import pythonLogo from "../assets/python.webp"


const CommunityBridges = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <p className='text-zinc-400 text-sm col-span-2'>2023 - Current</p>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-xl'>Community Bridges Inc.</p>
            <div className="flex items-center gap-2">
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm' />
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
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Automate script execution using Windows Task Scheduler for efficient and timely operations</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Process and analyze Excel files with the Pandas library, seamlessly importing data into the database</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Manage secure file transfers through inbound and outbound SFTP automation, ensuring efficient distribution</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={sqlLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Construct SQL queries to generate meaningful datasets tailored to staff requirements</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Create stored procedures to match native data with recently imported data from automated scripts</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Integrate SQL seamlessly into applications, enabling efficient CRUD operations for database interactions in whichever language I am working in</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={reactLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Develop dynamic client-side web pages for seamless integration within embedded iFrames in the EHR system</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Fetch and display data efficiently from internal APIs, ensuring an intuitive and user-friendly interface</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Optimize performance by leveraging virtual tables for smooth rendering of large datasets</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={nodeLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Developed and deployed an Express-based HTTP server on an IIS server for seamless application hosting</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Designed and optimized API routes to enhance client-server communication, incorporating data streaming for improved performance and faster time-to-screen</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Implemented authentication based on a request IP address having a matching record in a specific database table</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CommunityBridges

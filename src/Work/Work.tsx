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
import swiftuiLgo from "../assets/swiftui.png"
import swiftLogo from "../assets/swift.svg"

const Work = ({onIsInView}: {onIsInView: () => void}) => {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })

  useEffect(() => {
      if (containerInView) { onIsInView() }
  }, [containerInView])

  return (
    <motion.div initial={{opacity: 0, y: 50}} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.8, ease: "easeOut"}} id="Work" ref={containerRef}  className="flex flex-col justify-start max-w-[100vw] lg:w-[75%] sm:w-[80%] mx-auto sm:gap-10 md:gap-10 gap-10 md:pt-20">
      <div className="flex flex-col gap-2">
        <p className="text-3xl text-white font-semibold">Work</p>
      </div>

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

      <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <p className='text-zinc-400 text-sm col-span-2'>2024 - 2025</p>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-xl'>HotSpot</p>
            <div className="flex items-center gap-2">
              <img src={swiftuiLgo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={swiftLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm' />
              {/* <img src={nodeLogo} alt='' className='w-6 h-6 rounded-sm' /> */}

            </div>

          </div>
          <p className='text-sm text-cyan-400'>IOS Application Developer</p>
          <div className="flex flex-col mt-8 gap-5">
          <div className="flex items-start gap-4">
              <img src={pythonLogo} alt="" className="w-5 h-5 rounded-sm" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Integrated Firebase Functions into the iOS app to offload backend logic, improving performance and reducing client-side complexity.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Developed a scheduled task to seed the database with processed data using the OpenAI API to analyze the data and manipulate key fields based on the outcome.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Built an automated task to parse incoming emails, extract event details using the OpenAI API, and import relevant events into the database.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={swiftuiLgo} alt="" className="w-5 h-5 rounded-sm" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Migrated a UIKit-based Storyboard app to SwiftUI, preserving all original functionality while enhancing maintainability.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Translated Figma designs into pixel-perfect SwiftUI views, ensuring an intuitive and visually consistent user experience.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Leveraged SwiftUI's state management to create a smooth, responsive, and interactive user interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={swiftLogo} alt="" className="w-5 h-5 rounded-sm" />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Leveraged extensions to enhance reusability for dates, fonts, and views, improving code modularity and maintainability.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Designed `ObservableObject` classes for global state management and used Swift structs for data modeling and type safety.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Implemented push notifications by managing user authorization and securely handling device tokens.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className="text-sm text-zinc-300">
                    Worked with delegates to capture device tokens, configure settings in the AppDelegate, and handle Google Maps API events using a delegate-based design to update state dynamically.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Work

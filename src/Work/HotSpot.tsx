import React from 'react'
import goLogo from "../assets/go.png"
import pythonLogo from "../assets/python.webp"

import swiftuiLgo from "../assets/swiftui.png"
import swiftLogo from "../assets/swift.svg"

const HotSpot = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <p className='text-zinc-400 text-sm col-span-2'>2024 - Current</p>
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
  )
}

export default HotSpot

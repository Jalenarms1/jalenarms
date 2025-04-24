import React from 'react'
import tailwindLogo from "../assets/tailwind.png"
import reactLogo from "../assets/react.svg"
import goLogo from "../assets/go.png"
import sqlLogo from "../assets/sql1.png"
import nodeLogo from "../assets/nodejs.png"


const StarHealth = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2">
        <p className="text-zinc-400 text-sm col-span-2">2022 - 2023</p>
        <div className="flex flex-col col-span-10">
            <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className="font-semibold text-white text-xl">StarHealth</p>
                <div className="flex items-center gap-2">
                    {/* Replace with actual logo images */}
                    <img src={reactLogo} alt='' className='w-6 h-6 rounded-sm' />
                    <img src={tailwindLogo} alt='' className='w-5 h-5 rounded-sm' />
                    <img src={nodeLogo} alt='' className='w-5 h-5 rounded-sm' />
                    <img src={sqlLogo} alt='' className='w-5 h-5 rounded-sm' />
                </div>
            </div>
            <p className="text-sm text-cyan-400">Fullstack Software Developer</p>
            <div className="flex flex-col mt-8 gap-5">
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={reactLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Led the migration of the application to a modern Next.js
                            architecture utilizing the T3-Stack, leveraging tRPC for
                            end-to-end type safety and Prisma as an ORM for efficient database
                            interactions.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Developed a dynamic directory page featuring advanced search and
                            filtering capabilities, enabling users to efficiently navigate and
                            explore the application's extensive dataset.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={sqlLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Restructured the existing database schema, resulting in improved
                            data retrieval performance and enhanced frontend functionality.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Created views to improve execution for certain queries
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Indexed certain tables to compliment the app's search and filter feature
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

  )
}

export default StarHealth

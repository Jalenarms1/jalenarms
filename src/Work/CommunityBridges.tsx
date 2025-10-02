import React from 'react'
import sqlLogo from "../assets/sql1.png"
import reactLogo from "../assets/react.svg"
import csharpLogo from "../assets/csharp-logo.png"
import pythonLogo from "../assets/python.webp"
import dotnetLogo from "../assets/dotnet-logo.svg"
import blazorLogo from "../assets/blazorLogo.png"


const CommunityBridges = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <p className='text-zinc-400 text-sm col-span-2'>2023 - Current</p>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-xl'>Community Bridges Inc.</p>
            <div className="flex items-center gap-2">
              <img src={csharpLogo} alt='' className='w-7 h-7 rounded-sm' />
              <img src={dotnetLogo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={blazorLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={reactLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={sqlLogo} alt='' className='w-6 h-6 rounded-sm' />

            </div>

          </div>
          <p className='text-sm text-cyan-400'>Software Engineer/Data Engineer</p>
          <div className="flex flex-col mt-8 gap-5">
            <div className="flex items-start gap-4">
              <img src={dotnetLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Build HIPAA compliant web applications that incorporate role-based access control and field history auditing</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Build and maintain internal APIs to communicate with various in-house-client applications</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Design reusable frameworks that compliment business needs</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Build client applications using Blazor WASM or React.js that staff utilize to do their job</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>Responsible for IIS deployment of client and server applications</p>
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
        
  
          </div>
        </div>
      </div>
  )
}

export default CommunityBridges

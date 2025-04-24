import React from 'react'
import tailwindLogo from "../assets/tailwind.png"
import reactLogo from "../assets/react.svg"
import goLogo from "../assets/go.png"
import sqlLogo from "../assets/sql1.png"

const SillySocksAndMore = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2">
        <p className="text-zinc-400 text-sm col-span-2">2023 - 2024</p>
        <div className="flex flex-col col-span-10">
            <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className="font-semibold text-white text-xl">Silly Socks and More</p>
            <div className="flex items-center gap-2">
                {/* Replace with actual logo images */}
                <img src={goLogo} alt='' className='w-6 h-6 rounded-sm' />
                <img src={sqlLogo} alt='' className='w-6 h-6 rounded-sm' />
                <img src={reactLogo} alt='' className='w-5 h-5 rounded-sm' />
                <img src={tailwindLogo} alt='' className='w-5 h-5 rounded-sm' />
            </div>
            </div>
            <p className="text-sm text-cyan-400">Lead Fullstack Developer</p>
            <div className="flex flex-col mt-8 gap-5">
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={reactLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Led the development of an e-commerce platform
                            using Go, React.js, and Tailwind CSS, enabling online product
                            sales using Stripe API integration.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Implemented product search and filtering functionalities,
                            allowing customers to easily find items by category and keywords.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                            Designed and developed an intuitive admin interface, providing
                            comprehensive control over order management, product catalogs,
                            and internal operations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    {/* Replace with actual logo image */}
                    <img src={goLogo} alt="" className="w-5 h-5 rounded-sm" />
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                                Created an http server to handle requests from the client and control the flow of data throughout the application
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <p>-</p>
                            <p className="text-sm text-zinc-300">
                                Integrated stripe functionality for redirecting the user to a personalized ordering page, and handling stripe webhooks for payment status
                            </p>
                        </div>

                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SillySocksAndMore

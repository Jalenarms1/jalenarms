import React, { useEffect, useRef } from 'react'
import {motion, useInView} from "framer-motion"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BsPersonFill } from "react-icons/bs";


const Contact = ({onIsInView}: {onIsInView: () => void}) => {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })

  useEffect(() => {
      if (containerInView) { onIsInView() }
  }, [containerInView])

  return (
    <motion.div ref={containerRef} initial={{opacity: 0, y: 50}} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.8, ease: "easeOut"}} id="Contact"  className="flex flex-col justify-start max-w-[100vw] lg:w-[75%] md:w-[80%] mx-auto sm:gap-10 md:gap-10 gap-10 pt-20 md:p-0 p-5 md:h-[75vh] min-h-screen">
        <div className="flex items-start gap-10 md:flex-row flex-col">
            <div className="flex flex-col w-full md:w-[60%] gap-10">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-3">
                        <p className="text-3xl text-white font-semibold">Contact</p>
                        <p className='text-sm text-zinc-300'>I look forward to hearing from you!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center  gap-10">
                        <div className="flex flex-col gap-2 w-full">
                            <p className='text-zinc-300'>Name</p>
                            <Input type='text' className=' border-zinc-700 bg-zinc-200 text-black' />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <p className='text-zinc-300'>Email</p>
                            <Input type='email' className=' border-zinc-700 bg-zinc-200' />
                        </div>

                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className='text-zinc-300'>Message</p>
                        <Textarea rows={50} className='w-full h-20 bg-zinc-200' />
                    </div>
                    <div className="w-full flex justify-end ">
                        <button className='px-6 py-2 bg-yellow-400 active:bg-yellow-500 text-black rounded-md'>Send</button>
                    </div>

                </div>

            </div>

            <div className="md:w-[1px] md:h-full h-[0.5px] w-full bg-zinc-700"></div>

            <div className="flex flex-col w-full md:w-[40%] gap-10">
                <div className="flex items-center gap-3 w-full md:border-b border-b-0 border-zinc-700 pb-1">
                    <p className="text-3xl text-white font-semibold">References</p>
                </div>
                <div className="flex flex-col gap-10" >
                    <div className="flex items-start gap-5">
                        <BsPersonFill className='text-lg text-zinc-300' />

                        <div className="flex flex-col">
                            <p className='text-white'>Angel Rodriguez</p>
                            <p className='text-zinc-300'>Senior Software Developer at BigTime Software</p>
                            <p className='text-zinc-300 text-sm'>602-341-0796</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <BsPersonFill className='text-lg text-zinc-300' />

                        <div className="flex flex-col">
                            <p className='text-white'>Addison Albrecht</p>
                            <p className='text-zinc-300'>Front-End Web Developer at Northwestern Mutual</p>
                            <p className='text-zinc-300 text-sm'>262-308-3338</p>
                        </div>
                    </div>

                    

                </div>
            </div>

        </div>
    </motion.div>
  )
}

export default Contact

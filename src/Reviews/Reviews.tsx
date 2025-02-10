import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import {motion, useInView} from "framer-motion"
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";


const Reviews = ({onIsInView}: {onIsInView: () => void}) => {
  const containerRef = useRef(null)
  const containerInView = useInView(containerRef, { once: false })

  useEffect(() => {
      if (containerInView) { onIsInView() }
  }, [containerInView])

  const goToUrl = (url: string) => {
    window.open(url, "_blank")
}

  return (
    <motion.section ref={containerRef} initial={{opacity: 0, y: 50}} animate={containerInView ? { opacity: 1, y: 0 } : {}} transition={{duration: 0.8, ease: "easeOut"}} id="Reviews"  className="flex flex-col justify-start max-w-[100vw] md:w-[80%] mx-auto sm:gap-10 md:gap-10 gap-10 mt-20">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <p className="text-3xl text-white font-semibold">Reviews</p>
                <p className="text-zinc-400 text-lg">5</p>
            </div>
            <SiUpwork onClick={() => goToUrl("https://www.upwork.com/freelancers/~01cd6b779e11f90eb8?mp_source=share")} className='text-3xl text-green-500 active:text-green-600 cursor-pointer' />

        </div>
        <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-[75vw] mx-auto"
        >
        <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <div className="p-3 flex flex-col justify-between h-60 border border-zinc-800 rounded-md bg-zinc-800">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 ">
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <p className="text-white">5.0</p>
                        </div>
                        <p className="text-white font-semibold text-base line-clamp-1">UI/UX Graphic Designer with Swift/Xcode Experience for App Development</p>
                        <div>
                            <i className="text-sm text-zinc-200 max-w-full">"Jalen is very diligent and is wonderful to work with. He is very prompt and caring and puts in a wholehearted effort. He puts in a lot of effort and is one of the best people we have worked with. Highly recommend"</i>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-zinc-300">Nov 2, 2024 - Jan 6, 2025</p>
                    </div>
                
                </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <div className="p-3 flex flex-col justify-between h-60 bg-zinc-800 border border-zinc-800 rounded-md">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 ">
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <p className="text-white">5.0</p>
                        </div>
                        <p className="text-white font-semibold text-base">Front end development</p>
                        <div>
                            <i className="text-sm text-zinc-200 max-w-full mt-40">"Talented Professional"</i>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-zinc-300">Sep 24, 2023 - Oct 5, 2023</p>
                    </div>
                
                </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <div className="p-3 flex flex-col justify-between h-60 bg-zinc-800 border border-zinc-800 rounded-md">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 ">
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <p className="text-white">5.0</p>
                        </div>
                        <p className="text-white font-semibold text-base">Web Design using HTML, CSS, Javascript</p>
                        <div>
                            <i className="text-sm text-white max-w-full">"Cannot say this enough about the professionalism that was displayed. Great work ethic and very knowledgeable about coding websites."</i>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-zinc-300">Feb 8, 2023 - Feb 25, 2023</p>
                    </div>
                
                </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <div className="p-3 flex flex-col justify-between h-60 bg-zinc-800 border border-zinc-800 rounded-md">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 ">
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <p className="text-white">5.0</p>
                        </div>
                        <p className="text-white font-semibold text-base">Deploy Website via last contract</p>
                        {/* Deploy Website via last contract */}
                        <div>
                            <i className="text-sm text-white max-w-full">"Amazing work cannot complain one bit. Will recommend to anyone needing services pertaining to website creation. 10 out of 10 will be using his services when needed again."</i>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-zinc-300">Feb 12, 2023 - Feb 25, 2023</p>
                    </div>
                
                </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                <div className="p-3 flex flex-col justify-between h-60 bg-zinc-800 border border-zinc-800 rounded-md">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 ">
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <FaStar className="text-sm text-yellow-500" />
                            <p className="text-white">5.0</p>
                        </div>
                        <p className="text-white font-semibold text-base">Database Restructuring + Front-end Hookup</p>
                        {/* Database Restructuring + Front-end Hookup */}
                        <div>
                            <i className="text-sm text-white max-w-full">"He’s great"</i>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-zinc-300">Dec 8, 2022 - Jan 1, 2023</p>
                    </div>
                
                </div>
            </CarouselItem>
            {/* "He’s great" */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </motion.section>
  )
}

export default Reviews

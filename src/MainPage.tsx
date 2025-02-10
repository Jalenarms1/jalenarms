import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { SiUpwork } from "react-icons/si";
import { LuCitrus } from "react-icons/lu";
import About from "./About/About";
import { useEffect, useRef, useState } from "react";
import Work from "./Work/Work";
import { ScrollArea } from "@/components/ui/scroll-area"
import TechnologiesAndSkills from "./About/TechnologiesAndSkills";
import { useInView } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";
import {motion} from "framer-motion"
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";
import { Sidebar } from "./Sidebar";
import { downloadResume } from "./utils";

export type AppView = "About" | "Work" | "Reviews" | "Contact"

const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/Jalen%20Arms%20-%20Resume%202025.pdf?alt=media&token=a4cfc56f-84e5-481c-87bb-16f42dc88f31"

const MainPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false })
    const workRef = useRef(null);
    const workIsInView = useInView(workRef, { once: false })
    const contactRef = useRef(null);
    const contactIsInView = useInView(contactRef, { once: false })

    const [currentView, setCurrentView] = useState<AppView>("About")

    const handleScroll = (id: AppView) => {
      const element = document.getElementById(id);
      if (!element) {
        console.error(`Element with id "${id}" not found`);
        return;
      }

      const headerOffset = id == "About" ? 200 : 150;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const currentScroll = window.scrollY;
      const offsetPosition = elementTop + currentScroll - headerOffset;

      console.log(`Element Rect Top: ${elementTop}`);
      console.log(`Current Scroll Y: ${currentScroll}`);
      console.log(`Calculated Offset Position: ${offsetPosition}`);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setCurrentView(id);
    };

    

    useEffect(() => {
      if (isInView) {
        setCurrentView("About")
      }
    }, [isInView])

    useEffect(() => {
      if (workIsInView) {
        setCurrentView("Work")
      }
    }, [workIsInView])

    useEffect(() => {
      if (contactIsInView) {
        setCurrentView("Contact")
      }
    }, [contactIsInView])

    

  return (
    <div className="flex flex-col bg-zinc-900 app-font items-center w-full  md:pt-0">
      <div className="fixed top-0 z-[2] items-center bg-zinc-950 rounded-bl-md rounded-br-md shadow-sm shadow-zinc-900 p-5 px-5 flex justify-between w-full sm:w-[90vw] sm:mx-auto ">
          <LuCitrus className="text-2xl text-yellow-400" />

          <div className="sm:flex hidden  items-center gap-2 r p-2 ">
              <button onClick={() => handleScroll("About")} className={`${currentView == "About" ?  " rounded-md  text-cyan-400" : "text-zinc-400"}  py-1 px-3 `}>About</button>
              <button onClick={() => handleScroll("Work")} className={`${currentView == "Work" ?  " rounded-md  text-cyan-400" : "text-zinc-400"} py-1 px-3`}>Work</button>
              {/* <button onClick={() => handleScroll("Reviews")} className={`${currentView == "Reviews" ?  " rounded-md  text-cyan-400" : "text-zinc-400"} py-1 px-3`}>Reviews</button> */}
              <button onClick={() => handleScroll("Contact")} className={`${currentView == "Contact" ?  " rounded-md  text-cyan-400" : "text-zinc-400"} py-1 px-3`}>Contact</button>
              <button onClick={() => handleScroll("Contact")} className={`py-1 px-3`}>Download CV</button>
          </div>
          <Sidebar updateView={(view) => setCurrentView(view)} currentView={currentView} />
      </div>
      <div className="flex flex-col flex-1 min-h-screen overflow-hidden p-5">
        <div ref={ref} className="md:h-10 w-full"></div>
        <About onIsInView={() => setCurrentView("About")} onDownloadResume={downloadResume}  />
        <TechnologiesAndSkills onIsInView={() => setCurrentView("Work")} />
        <div ref={workRef} className="h-20 w-full"></div>
        <Work onIsInView={() => setCurrentView("Work")} />

      </div>
      <Reviews />
      <Contact onIsInView={() => setCurrentView("Contact")} />
      <div ref={contactRef} className="h-20 w-full"></div>

      <footer className="w-full bg-zinc-800 mt-20 z-[2]  rounded-tl-md rounded-tr-md shadow-sm shadow-zinc-900 p-10 px-5 md:px-10 grid sm:grid-cols-8 grid-cols-1 md:gap-0 gap-10 sm:w-[90vw] sm:mx-auto ">
        <div className="flex flex-col items-start gap-2 col-span-2">
          <img className='shadow-md shadow-neutral-700 w-8 h-8 mb-2 rounded-full hover:shadow-lg hover:shadow-neutral-600 cursor-pointer' src="https://firebasestorage.googleapis.com/v0/b/silly-socks-e0923.firebasestorage.app/o/anonymous-boy-icon-cartoon-style-vector.jpg?alt=media&token=e24c3ef2-6b93-42dc-aadd-c7b0a3ca2f82" />
          <div className="flex flex-col">
            <p className="text-base text-zinc-400 font-semibold">Jalen Arms</p>
            <p className="text-white text-sm mt-1">Fullstack</p>
            <p className="text-cyan-400 text-sm">Software Developer</p>
          </div>
          
        </div>  

        <div className="flex flex-col gap-5 col-span-2">
          <p className="text-sm text-white">Socials</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-zinc-300">Github</p>
            <p className="text-sm text-zinc-300">LinkedIn</p>
            <p className="text-sm text-zinc-300">Upwork</p>

          </div>
        </div>

        <div className="flex flex-col gap-5 col-span-2">
          <p className="text-sm text-white">Links</p>
          <div className="flex flex-col gap-2">
            <p onClick={() => handleScroll("About")} className="text-sm text-zinc-300 active:underline">About</p>
            <p onClick={() => handleScroll("Work")} className="text-sm text-zinc-300 active:underline ">Work</p>
            <p onClick={() => handleScroll("Reviews")} className="text-sm text-zinc-300 active:underline">Reviews</p>
            <p onClick={() => handleScroll("Contact")} className="text-sm text-zinc-300 active:underline">Contact</p>


          </div>
        </div>

        <div className="flex flex-col gap-5 col-span-2">
          <p className="text-sm text-white">Resume</p>
          <div className="flex flex-col gap-2">
            <p onClick={downloadResume} className="text-sm text-zinc-300 active:underline">Download CV</p>

          </div>
        </div>
        
      </footer>
    </div>
  );
};

export default MainPage;

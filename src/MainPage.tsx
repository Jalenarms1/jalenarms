import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { SiUpwork } from "react-icons/si";
import { LuCitrus } from "react-icons/lu";
import About from "./About/About";
import { useState } from "react";
import Work from "./Work/Work";
import { ScrollArea } from "@/components/ui/scroll-area"


type AppView = "About" | "Work" | "Reviews" | "Contact"

const MainPage = () => {
    const [currentView, setCurrentView] = useState<AppView>("About")

    const handleScroll = (id: AppView) => {
      const element = document.getElementById(id);
      if (!element) {
        console.error(`Element with id "${id}" not found`);
        return;
      }

      const headerOffset = 200;
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
    

  return (
    <div className="flex flex-col bg-zinc-900 app-font items-center  w-full  md:pt-0 ">
        {/* <div className="flex flex-col md:w-3/4 gap-20 w-full relative text-white min-h-screen overflow-y-scroll">
          <About onIsInView={() => setCurrentView("About")} />
          <Work onIsInView={() => setCurrentView("Work")} />
        </div> */}
        <div className="fixed top-0 z-[2] items-center bg-zinc-950 rounded-bl-md rounded-br-md shadow-sm shadow-zinc-900 p-5 px-5 flex justify-between w-full sm:w-[90vw] sm:mx-auto ">
            <LuCitrus className="text-2xl text-yellow-400" />

            <div className="flex  items-center gap-2 r p-2">
                <button onClick={() => handleScroll("About")} className={`${currentView == "About" ?  " rounded-md  text-cyan-400" : "text-zinc-400"}  py-1 px-3 `}>About</button>
                <button onClick={() => handleScroll("Work")} className={`${currentView == "Work" ?  " rounded-md  text-cyan-400" : "text-zinc-400"} py-1 px-3`}>Work</button>
                <button onClick={() => handleScroll("Reviews")} className={`${currentView == "Reviews" ?  " rounded-md  text-cyan-400" : "text-zinc-400"} py-1 px-3`}>Reviews</button>
                <button onClick={() => handleScroll("Contact")} className={`${currentView == "Contact" ?  " rounded-md  text-cyan-400" : "text-zinc-400"} py-1 px-3`}>Contact</button>
            </div>
        </div>
        <About onIsInView={() => setCurrentView("About")}  />
        <Work onIsInView={() => setCurrentView("Work")} />

    </div>
  );
};

export default MainPage;

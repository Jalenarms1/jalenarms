import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import {motion} from "framer"
import { SiUpwork } from "react-icons/si";
import { LuCitrus } from "react-icons/lu";
import Hero from "./Hero/Hero";


const MainPage = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // Adjust this based on your header height
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

  return (
    <div className="flex flex-col relative px-16 bg-zinc-900 app-font ">
        <div className="sticky z-[2] top-0 w-full items-center bg-zinc-950 bg-opacity-30 rounded-bl-md rounded-br-md shadow-sm shadow-zinc-950 p-3 px-5 flex justify-between">
            <LuCitrus className="text-2xl text-yellow-400" />

            <div className="flex  items-center gap-2 r p-2">
                <button onClick={() => handleScroll("home")} className="text-white border-b border-b-zinc-700 pb-1 px-3">Home</button>
                <a href="#about" className="text-zinc-400  border-b-zinc-700 pb-1 px-3">About</a>
                <button className="text-zinc-400  border-b-zinc-700 pb-1 px-3">Work</button>
                <button className="text-zinc-400  border-b-zinc-700 pb-1 px-3">Reviews</button>
            </div>
            <div className="flex items-start gap-4">
                <button className="text-zinc-800 bg-white px-2 py-1 rounded-lg active:bg-zinc-300 transition-all ">Contact me</button>
                
            </div>
        </div>
        <Hero />
        {/* <Hero /> */}

    </div>
  );
};

export default MainPage;

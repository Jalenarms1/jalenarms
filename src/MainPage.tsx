import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { SiUpwork } from "react-icons/si";
import { LuCitrus } from "react-icons/lu";
import About from "./About/About";


const MainPage = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 200; // Adjust this based on your header height
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };
    

  return (
    <div onScroll={(e) => {
        let target = e.target as HTMLElement
        console.log(target.scrollTop);
        
    }} className="flex flex-col relative bg-zinc-900 app-font items-center overflow-hidden pt-28 ">
        <div className="fixed top-0 z-[2] items-center bg-zinc-950 rounded-bl-md rounded-br-md shadow-sm shadow-zinc-950 p-1 px-5 flex justify-between w-full mx-auto ">
            <LuCitrus className="text-2xl text-yellow-400" />

            <div className="flex  items-center gap-2 r p-2">
                <button onClick={() => handleScroll("home")} className=" border rounded-md border-zinc-700 py-1 px-3 text-cyan-400">About</button>
                <button className="text-zinc-400  border-b-zinc-700 py-1 px-3">Work</button>
                <button className="text-zinc-400  border-b-zinc-700 py-1 px-3">Reviews</button>
                <button className="text-zinc-400  border-b-zinc-700 py-1 px-3">Contact</button>
            </div>
            {/* <div className="items-start gap-4 md:block hidden">
                <div className="text-zinc-950 bg-zinc-950 px-2 py-1 rounded-lg transition-all "></div>
                
            </div> */}
        </div>
        <About />
        {/* <Hero /> */}

    </div>
  );
};

export default MainPage;

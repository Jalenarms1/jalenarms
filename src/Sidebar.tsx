import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiMenu4Fill } from "react-icons/ri";
import { AppView } from "./MainPage";
import { downloadResume } from "./utils";
import { useState } from "react";


export function Sidebar({updateView, currentView}: {updateView: (AppView) => void, currentView: AppView}) {
    const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false)
    
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
  
        updateView(id);

        setIsSheetOpen(false)
      };
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <RiMenu4Fill onClick={() => setIsSheetOpen(true)} className="text-white text-2xl" />
        
      </SheetTrigger>
      <SheetContent className="bg-zinc-300">
        <div className="flex flex-col items-start py-5 gap-3">
            <button onClick={() => handleScroll("About")} className={`${currentView == "About" ?  " rounded-md  text-zinc-900" : "text-zinc-400"}  py-1 px-3 `}>About</button>
            <button onClick={() => handleScroll("Work")} className={`${currentView == "Work" ?  " rounded-md  text-zinc-900" : "text-zinc-400"} py-1 px-3`}>Work</button>
              {/* <button onClick={() => handleScroll("Reviews")} className={`${currentView == "Reviews" ?  " rounded-md  text-zinc-900" : "text-zinc-400"} py-1 px-3`}>Reviews</button> */}
            <button onClick={() => handleScroll("Contact")} className={`${currentView == "Contact" ?  " rounded-md  text-zinc-900" : "text-zinc-400"} py-1 px-3`}>Contact</button>
            <button onClick={downloadResume} className={`py-1 px-3 text-zinc-400`}>Download CV</button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

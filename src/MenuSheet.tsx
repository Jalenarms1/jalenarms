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
import { RiMenu5Fill } from "react-icons/ri"

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='sm:hidden block'>
            <RiMenu5Fill className='text-2xl text-neutral-400 active:text-neutral-600' />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col pt-10 gap-3">
          <p className="text-lg">About</p>
          <p className="text-lg">Showcase</p>

          <p></p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

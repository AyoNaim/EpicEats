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
import Link from 'next/link'
import NavLinks from "./NavLinks"
import { geistMono } from "@/Customfonts"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Link href={'./'}>
            <img src='./menu.svg' alt='hamburger' width={40}  height={40}/>
        </Link>
      </SheetTrigger>
      <SheetContent className="flex justify-end items-center">
        <div className="h-full w-11/12 bg-red-500 flex flex-col justify-start items-center">
          <div className="h-1/3 w-full bg-blue-500 flex justify-end">
            <NavLinks text="Developer" type="contact" icon="arrow.svg" className="hover:bg-red-500"/>
          </div>
          <div className={`h-2/3 w-full bg-amber-500 flex flex-col justify-evenly text-4xl ${geistMono.className}`}>
            <Link href={'./'}><p className="text-green-600">Home</p></Link>
            <Link href={'./'} className="transition-all duration-500 hover:text-green-500"><p>Cuisines</p></Link>
            <Link href={'./'} className="hover:text-green-500"><p>Reservations</p></Link>
            <Link href={'./'} className="hover:text-green-500"><p>Contact</p></Link>
          </div>
          <div className="h-1/3 w-full bg-red-500 flex justify-start items-end">
            <div className="bg-white w-1/3 h-2/3"></div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { geistMono } from "@/Customfonts"
import { CarouselDemo } from "./Carousel"
import NavLinks from "./NavLinks"

type openType = {
  open: boolean,
  onClose: () => void
}

export function FoodInfo({open, onClose}: openType) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[350px] h-[700px] md:w-[800px] md:h-[500px] rounded-lg flex justify-center items-center">
        <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4 w-full h-full'>
        <div className=''>
          <CarouselDemo />
        </div>
        <div className={`flex flex-col gap-2 items-start ${geistMono.className}`}>
          <p>Cusine Name: Truffle Risotto</p>
          <p>Origin: Italy</p>
          <p>Price: $2999.99</p>
          <NavLinks text="Make a reservation" type="reservation" icon="arrow.svg" className="md:mt-14"/>
        </div>
        <div className={`md:col-span-2 flex flex-col justify-between items-center gap-2 ${geistMono.className}`}>
          <p className="font-bold">A Taste of Luxury, Priced Just Right</p>
          <p className="text-wrap">At Epiceats, we offer the finest dishes, crafted with premium ingredients and impeccable attention to detail. Experience bold flavors and luxurious presentations, all at an accessible price. Enjoy exceptional dining that delivers both elegance and value, where quality is never compromised.</p>
        </div>
       </div>
      </DialogContent>
    </Dialog>
  )
}

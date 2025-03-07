'use client'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { CardContent } from "./ui/card";
import { geistMono } from "@/Customfonts";

const foods = [
  { name: "Truffle Risotto", url: "risotto.jpg", price: '$2200' },
  { name: "Pasta Carbonara", url: "carbonara.jpg", price: '$1800' },
  { name: "seared scallops", url: "scallops.jpg", price: "$1700" },
  { name: "grilled steak", url: "steak.jpg", price: "$1900" },
  { name: "lamb and aparagus", url: "lamb.jpg", price: "$2400", }
];

export function CarouselDemo() {
  return (
    <Carousel
      className="w-full max-w-xs relative cursor-pointer"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {foods.map((food, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex justify-between flex-col gap-4">
              <div 
                className="rounded-xl border bg-card text-card-foreground shadow"
                style={{
                  backgroundImage: `url(${food.url})`,
                  backgroundSize: 'cover'
                }}
              >
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{food.name}</span>
                </CardContent>
              </div>
              <p className={`${geistMono.className} flex justify-center items-center font-thin`}>
                {food.name}
              </p>
              <p className={`${geistMono.className} flex justify-center items-center font-semibold`}>
                {food.price}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

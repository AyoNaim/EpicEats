import React from 'react'
import localFont from "next/font/local";

const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistSans = localFont({
    src: "../app/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
const About = () => {
  return (
    <section className='flex justify-center items-center w-screen h-screen'>
        <div className='w-11/12 h-5/6 flex gap-4 items-start flex-col'>
            <div className=''>
                <p className={`text-lg font-thin ${geistMono.className}`}>Welcome to <strong>Epiceats</strong></p>
            </div>
            <div className=''>
                <p className={`text-[29px] md:text-[50px] ${geistMono.className} tracking-tight leading-tight`}>
                "Our Story, Your Experience" Born from a love of food and hospitality, Epiceats brings together the finest ingredients, a passion for innovation, and a dedication to service. We invite you to be part of our story—one that celebrates food, community, and the joy of sharing a meal.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
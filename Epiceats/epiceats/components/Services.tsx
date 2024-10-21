import React from 'react'
import localFont from 'next/font/local';
import NavLinks from './NavLinks';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

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

const Services = () => {
  return (
    <section className='mt-10 w-screen h-[1000px] flex flex-col justify-center items-center bg-pink-200'>
        <div className='w-11/12 h-full'>
          <div className='w-full h-1/2 flex flex-col md:flex-row justify-between items-center'>
            <p className='w-1/3 hidden md:block'>OUR EXPERTISE?</p>
            <p className={`text-[40px] md:text-[50px] md:mt-32 mr-12 w-2/3 ${geistMono.className}`}>Exquisite dishes, perfected by culinary experts for refined palates.</p>
          </div>
          <div className='w-full border border-black border-x-0 border-b-0 h-96 relative'>
            <img src='eye.svg' alt='eye' width={90} height={90} className='absolute -top-9' />
            <div className='flex justify-center items-center mt-10 w-full md:w-2/3 absolute -left-1 md:left-96 lg:left-96 h-full'>
              <div className='flex flex-col justify-between items-center gap-12'>
                <div className='h-1/2 w'>
                  <p className={`${geistMono.className} font-bold`}>OUR SERVICES</p>
                </div>
                <div className='w-full h-1/2'>
                  <p className={`text-wrap text-[20px] ${geistMono.className}`}>Tired of the same old dining experiences? At Epiceats, we offer a refreshing change. Immerse yourself in a world of bold flavors, exceptional service, and a setting that’s as elegant as it is inviting. Reserve your table now, and prepare to enjoy an evening of dining like never before.</p>
                </div>
                <div>
                  <NavLinks text='make a booking' type='contact' icon='arrow.svg' />
                </div>
              </div>
            </div>  
          </div>
        </div>
    </section>
  )
}

export default Services
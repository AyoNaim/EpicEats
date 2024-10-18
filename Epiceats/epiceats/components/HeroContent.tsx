import React, { useEffect } from 'react'
import NavLinks from './NavLinks'
import localFont from 'next/font/local';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';


const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HeroContent = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to('.navlink', {
      y: -100,
      // skewX: 10,
      rotation: 5,
      stagger: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: '.navlink',
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        toggleActions: 'play reverse play reverse'
      }
    })
  })
  return (
    <section className='w-full h-screen bg-green-500 flex justify-center items-center'>
        <div className='w-11/12 h-full'>
            <div className='w-full h-full flex flex-col justify-between items-center'>
                <div className='w-full flex items-start justify-start md:mt-10'>
                  <p className={`${geistMono.className} text-[60px] md:text-[75px] text-wrap mt-15`}>Taste the Luxury of  <br/> Gourmet Flavors</p>
                  {/* <img src='./food.svg' alt='food' width={50} height={50} className='hidden md:block' /> */}
                </div>
                <div className='flex justify-start items-start'>
                  <div className='flex justify-center items-center mt-10'>
                    <p> How can we help you? </p>
                  </div>
                  <div className='flex flex-col justify-start items-center gap-4'>
                    <NavLinks className='navlink' text='I would like to see what you are doing' type='food' icon='./arrow.svg' />
                    <NavLinks className='navlink' text='I want to know your specialties' type='food' icon='./arrow.svg' />
                    <NavLinks className='navlink' text='Tell me more about the restaurant' type='food' icon='./arrow.svg' />
                    <NavLinks className='navlink' text='I am here to make a reservation' type='food' icon='./arrow.svg' />
                  </div>
                  <div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroContent
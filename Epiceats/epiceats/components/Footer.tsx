import { geistMono } from '@/Customfonts'
import React from 'react'

const Footer = () => {
  return (
    <section className='w-screen flex justify-center items-center'>
        <div className={`w-11/12 h-20 flex justify-between md:justify-normal md:gap-5 items-end text-sm font-semibold ${geistMono.className}`}>
            <p>©2024 Epiceats</p>
            <p className='hidden md:block'>Privacy Policy</p>
            <p className='hidden md:block'>ayonaim101@gmail.com</p>
            <p className='hidden md:block'>English</p>
        </div>
    </section>
  )
}

export default Footer
import { geistMono } from '@/Customfonts'
import React from 'react'

const Footer = () => {
  return (
    <section className='w-screen flex justify-center items-center'>
        <div className={`w-11/12 h-20 flex gap-5 items-end text-sm font-semibold ${geistMono.className}`}>
            <p>©2024 Epiceats</p>
            <p>Privacy Policy</p>
            <p>ayonaim101@gmail.com</p>
            <p>English</p>
        </div>
    </section>
  )
}

export default Footer
'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { geistMono } from '@/app/layout'


const Cookies = () => {
    const [openCookies, setopenCookies] = useState<boolean>(true)
    const handleOpenCookies = () => {
        setopenCookies(false)
    }
  return (
    <div className={`${openCookies ? 'bg-red-500 w-screen bottom-0 h-80 lg:h-32 flex justify-center items-center border border-black' : 'opacity-0 hidden'} `}>
        <div className='w-11/12 h-5/6 flex flex-col gap-3'>
            <div className='flex items-start justify-start'>
                <p className='font-semibold text-lg'>We value your privacy</p>
            </div>
            <div className='w-full flex flex-col gap-4 md:flex-row justify-between items-center'>
                <p className='text-sm text-wrap'>
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <div className={`flex flex-col lg:flex-row md:flex-row justify-normal items-center gap-2`}>
                    <Button onClick={handleOpenCookies} className='w-96 md:w-28 h-12 rounded-3xl bg-white text-black border border-black'>Customize</Button>
                    <Button onClick={handleOpenCookies} className='w-96 md:w-28 h-12 rounded-3xl bg-white text-black border border-black'>Reject All</Button>
                    <Button onClick={handleOpenCookies} className='w-96 md:w-28 h-12 rounded-3xl bg-red-500 text-black border border-black'>Accept All</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cookies
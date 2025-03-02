import { geistMono } from '@/Customfonts'
import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import Link from 'next/link'
import FooterMobile from './FooterMobile'

const Footer = () => {
  return (
    <footer className='w-full md:h-72 h-[600px] bg-zinc-200'>
      <div className='md:hidden h-full w-full'><FooterMobile /></div>
      <div className='md:flex md:justify-center md:items-center w-full h-full hidden'>
        <div className='footer-container w-11/12 h-5/6 flex justify-between items-center'>
          <div className='h-full w-full'>
            <div className='flex flex-col justify-center items-center h-2/3 w-1/3 gap-6'>
              <p className={`${geistMono.className} font-semibold text-[17px]`} >GET UPDATES ON FUN STUFFS YOU PROBABLY WANT TO KNOW ABOUT IN YOUR INBOX</p>
              <Input placeholder='Email Address' className='outline-none border-0 border-b'/>
            </div>
            <div className='flex justify-between items-center w-10 mt-14 gap-4'>
              <Image src={'./apple.svg'} alt='logo' width={40} height={40} />
              <Image src={'./paypal.svg'} alt='logo' width={40} height={40} />
              <Image src={'./mastercard.svg'} alt='logo' width={40} height={40} />
              <Image src={'./visa.svg'} alt='logo' width={40} height={40} />
            </div>
          </div>
          <div className='h-full w-1/2 flex justify-between'>
            <div className='h-full w-1/2 flex flex-col gap-4'>
              <p className='font-bold'>Menu</p>
              <div className={`flex flex-col ${geistMono.className}`}>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Shop All</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>About Us</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Community</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Cuisines</Link>
                </div>
            </div>
            <div className='h-full w-1/2'>
              <div className='h-full w-full flex flex-col gap-4'>
                <p className='font-semibold'>Support</p>
                <div className={`flex flex-col ${geistMono.className}`}>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Shipping & Returns</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Help & FAQ</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Terms and Conditions</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Privacy Policy</Link>
                  <Link href={'./'} className='text-[14px] hover:text-zinc-400'>Contact</Link>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <Link href={'./'}><Image src={'./instagram.svg'} alt='instagram' width={40} height={40} /></Link>
              <Link href={'./'}><Image src={'./twitter.svg'} alt='twitter' width={40} height={40} /></Link>
              <Link href={'./'}><Image src={'./facebook.svg'} alt='facebook' width={40} height={40} /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
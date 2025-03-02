import { geistMono } from '@/Customfonts'
import { Input } from './ui/input'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FooterMobile = () => {
  return (
    <footer className='flex justify-center items-center w-full h-full'>
        <div className='w-10/12 h-5/6 flex flex-col gap-4'>
            <div className='flex flex-col justify-center items-center w-2/3 gap-6'>
                <p className={`${geistMono.className} font-semibold text-[17px] text-wrap`} >GET UPDATES ON FUN STUFFS YOU PROBABLY WANT TO KNOW ABOUT IN YOUR INBOX</p>
                <Input placeholder='Email Address' className='outline-none border-0 border-b'/>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>Menu</p>
              <div className={`flex flex-col ${geistMono.className}`}>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Shop All</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>About Us</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Community</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Cuisines</Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold'>Support</p>
                <div className={`flex flex-col ${geistMono.className}`}>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Shipping & Returns</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Help & FAQ</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Terms and Conditions</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Privacy Policy</Link>
                  <Link href={'./'} className='text-[13px] hover:text-zinc-400'>Contact</Link>
                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <div className='flex justify-between items-center gap-2'>
                    <Image src={'./apple.svg'} alt='logo' width={40} height={40} />
                    <Image src={'./paypal.svg'} alt='logo' width={40} height={40} />
                    <Image src={'./mastercard.svg'} alt='logo' width={40} height={40} />
                    <Image src={'./visa.svg'} alt='logo' width={40} height={40} />
                </div>
                <div className='flex justify-between gap-2'>
                    <Link href={'./'}><Image src={'./instagram.svg'} alt='instagram' width={30} height={30} /></Link>
                    <Link href={'./'}><Image src={'./twitter.svg'} alt='twitter' width={30} height={30} /></Link>
                    <Link href={'./'}><Image src={'./facebook.svg'} alt='facebook' width={30} height={30} /></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterMobile
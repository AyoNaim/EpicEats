import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-center w-screen h-24'>
      <div className='flex justify-between items-center h-full w-11/12'>
        <div className='flex justify-between items-center gap-2'>
          <img src='./logo.svg' alt='logo' width={50} height={50} />
          <p className='text-[25px] font-semibold'>Epiceats</p>
        </div>
        <div className='lg:flex justify-between items-center gap-4 hidden'>
          <NavLinks text='cuisines' type='food' icon='./arrow.svg' />
          <NavLinks text='reservations' type='bookings' icon='./arrow.svg' />
          <NavLinks text='contact' type='contact' icon='./arrow.svg' />
        </div>
        <div className='block lg:hidden'>
          <Link href={'./'}>
            <img src='./menu.svg' alt='hamburger' width={40}  height={40}/>
          </Link>
        </div>
      </div>    
    </nav>
  )
}

export default Navbar
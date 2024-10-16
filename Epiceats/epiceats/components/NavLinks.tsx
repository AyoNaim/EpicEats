import React from 'react'
import { Button } from './ui/button'

type LinkProps = {
    text: string,
    type: string,
    icon: string
} 
const NavLinks = ({text, type, icon}: LinkProps) => {
  return (
    <Button className={`group ${type === 'food' ? 'rounded-3xl' : type === 'contact' ? 'rounded-3xl' : '' } group-hover:animate-all duration-500 flex justify-between items-center gap-2 border border-black bg-red-500`}>
        <img src={icon} alt='icon' width={20} height={20} className='transition ease-in-out hidden opacity-0 group-hover:block group-hover:opacity-100' />
        <p>{text}</p>
    </Button>
  )
}

export default NavLinks
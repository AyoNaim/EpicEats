'use client'
import React, { useState } from 'react'
import { FoodInfo } from './FoodInfo';

const Cuisine = () => {
  const [open, setopen] = useState(false)
  const handleOpen = () => {
    setopen(true)
  }
  return (
    <section className='w-screen h-auto flex justify-center items-center mt-5 mb-5'>
        <div className="w-11/12 h-full flex flex-col justify-between items-center md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
            <div className="md:col-span-2 w-full h-full rounded-[20px] group relative">
                <img src='food.jpg' alt='food' className='w-full h-full bg-cover rounded-[20px] cursor-pointer object-cover hover:blur-sm'/>
                <div className='bg-green-500 border border-black shadow-2xl cursor-pointer w-20 h-20 rounded-full absolute left-3/4 md:top-3/4 bottom-3 hidden group-hover:flex group-hover:justify-center group-hover:items-center ease-in-out transition-all duration-1000'>
                  <img src='arrow.svg' alt='arrow' width={30} height={30} />
                </div>
            </div>
            <div className="md:row-span-2 md:col-start-3 w-full h-full rounded-[20px] group">
            <img src='dish.jpg' alt='food' className='w-full h-full bg-cover rounded-[20px] cursor-pointer object-cover hover:blur-sm'/>
            </div>
            <div className="md:col-start-2 md:row-start-2 w-full h-full rounded-[20px] group">
            <img src='cuisine.jpg' alt='food' className='w-full h-full bg-cover rounded-[20px] cursor-pointer object-cover hover:blur-sm'/>
            </div>
            <div className="md:col-start-1 md:row-start-2 w-full h-full rounded-[20px] group">
            <img src='food.jpg' alt='food' className='w-full h-full bg-cover rounded-[20px] cursor-pointer object-cover hover:blur-sm'/>
            <FoodInfo />
            </div>
        </div>
    </section>
  )
}

export default Cuisine
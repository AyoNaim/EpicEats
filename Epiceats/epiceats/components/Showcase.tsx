import React from 'react'
import { CarouselDemo } from './Carousel'

const Showcase = () => {
  return (
    <section className='w-full h-5/6 flex justify-center items-center'>
        <div className='w-2/3 h-5/6 flex justify-center'>
            <CarouselDemo/>
        </div>
    </section>
  )
}

export default Showcase
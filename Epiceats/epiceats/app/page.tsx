import About from '@/components/About'
import Cookies from '@/components/Cookies'
import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <section className='w-screen h-screen'>
        <Hero />
        <About />
        <Cookies />
    </section>
  )
}

export default Home
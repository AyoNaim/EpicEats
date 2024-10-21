import About from '@/components/About'
import Cookies from '@/components/Cookies'
import Cuisine from '@/components/Cuisine'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <section className='w-screen h-screen'>
        <Hero />
        <About />
        <Services />
        <Cuisine />
        <Cookies />
    </section>
  )
}

export default Home
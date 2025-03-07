import About from '@/components/About'
import Cookies from '@/components/Cookies'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Showcase from '@/components/Showcase'
import React from 'react'

const Home = () => {
  return (
    <section className='w-screen h-screen'>
        <Hero />
        <About />
        <Services />
        <Cookies />
        <Showcase />
        <Footer />
    </section>
  )
}

export default Home
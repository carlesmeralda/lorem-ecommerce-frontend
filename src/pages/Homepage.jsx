import React from 'react'
import Navbar from '../layouts/Navigation/Navbar/Navbar'
import Hero from '../layouts/Hero/Hero'
import About from '../layouts/About/About'
import Products from '../layouts/Products/Products'

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
    </>
  )
}

export default Homepage

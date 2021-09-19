import React from 'react'
import Navbar from '../layouts/Navigation/Navbar/Navbar'
import Hero from '../layouts/Hero/Hero'
import About from '../layouts/About/About'
import Products from '../layouts/Products/Products'
import Discover from '../layouts/Discover/Discover'

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Discover />
    </>
  )
}

export default Homepage

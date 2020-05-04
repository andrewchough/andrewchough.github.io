import React from 'react'
import '../../static/app.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

export default () => (
  <div className="container">
    <Navbar />
    <Hero picLink="../../static/images/me.png" />
    <About />
  </div>
)

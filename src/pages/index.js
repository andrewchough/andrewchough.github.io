import React from 'react'
import '../../static/app.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default () => (
  <div className="w-full">
    <Navbar />
    <Hero picLink="../../static/images/me.png" />
  </div>
)

import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import Work from '../components/Work'
import Education from '../components/Education'

const Experience = () => {

  return (
    <div className="grid md:grid-cols-6 items-center block__container">
      <div className="md:col-span-2 h-full">
        <Work />
      </div>
      <div className="md:col-span-2 h-full">
        <Education />
      </div>
      <div className="md:col-span-2 block__header md:py-10 py-4">
        <h2 className="text-4xl font-semibold">EXPERIENCE</h2>
      </div>
    </div>
  )
}

export default Experience;


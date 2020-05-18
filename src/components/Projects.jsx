import React from 'react'

export default function Projects () {
  return (
    <div className="grid md:grid-cols-8 items-center block__container">
      <div className="md:col-span-2 block__header md:py-10 py-4 md:hidden">
        <h2 className="text-4xl font-semibold">PROJECTS</h2>
      </div>
      <div className="md:col-span-2 block__section px-8 py-16 h-full">
        <a href="https://github.com/kunaljaydesai/CrimeApp" target="_blank" rel="noopener noreferrer">
          <img className="projects__hurt-alert"></img>
        </a>
        <p className="my-4 text-sm">
          A web and mobile application to allow students to report suspicious activity within Berkeley, CA.
          Winner of the Code4Impact award at AngelHack Silicon Valley.
        </p>
        <p className="my-4 text-sm">
          <b>Technology used:</b>
          <br/>
          Sketch, HTML, CSS
        </p>
      </div>
      <div className="md:col-span-2 block__section px-8 py-16 h-full">
        <a href="https://github.com/anthonykim02/poke-locate" target="_blank" rel="noopener noreferrer">
          <img className="projects__poke-locate"></img>
        </a>
        <p className="my-4 text-sm">
        A complement iOS application for the mobile app Pokémon GO.
        Users report Pokémon they find onto a map, which displays locations of other
        Pokémon.
        </p>
        <p className="my-4 text-sm">
          <b>Technology used:</b>
          <br/>
          Photoshop, Sketch, Swift
        </p>
      </div>
      <div className="md:col-span-2 block__section px-8 py-16 h-full">
        <a href="https://github.com/andrewchough/polis-website" target="_blank" rel="noopener noreferrer">
          <img className="projects__cocoon"></img>
        </a>
        <p className="my-4 text-sm">
        A landing page for the Polis, presented and demonstrated at Boston
        College&apos;s Accelerate@Shea: Demo Day, which showcases up and coming entrepreneurs.
        </p>
        <p className="my-4 text-sm">
          <b>Technology used:</b>
          <br/>
          Sketch, HTML, CSS
        </p>
      </div>
      <div className="md:col-span-2 block__header md:py-10 py-4 md-max:hidden">
        <h2 className="text-4xl font-semibold">PROJECTS</h2>
      </div>
    </div>
  )
}

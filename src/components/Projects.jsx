import React from 'react'

export default function Projects () {
  return (
    <div className="grid md:grid-cols-8 items-center block__container">
      <div className="md:col-span-2 block__header md:py-10 py-4 md:hidden">
        <h2 className="text-4xl font-semibold">PROJECTS</h2>
      </div>
      <div className="md:col-span-2 block__section px-8 py-16 h-full">
        <a href="https://www.rebuildblackbusiness.com/" target="_blank" rel="noopener noreferrer">
          <img className="projects__RBB projects__item"
            alt="Image of the Rebuild Black Businesses logo"
          />
        </a>
        <h5 className="font-semibold uppercase mt-4">Rebuild Black Businesses</h5>
        <p className="mb-4 mt-2 text-sm font-light">
        An open-source project created to identify and support Black owned businesses around the country
        as well as to direct allies to the proper resources.
        </p>
        <p className="my-4 text-sm font-light">
          <b>Technology used:</b>
          <br/>
          Figma, React (Gatsby), CSS (ChakraUI)
        </p>
      </div>
      <div className="md:col-span-2 block__section px-8 py-16 md-max:pt-0 h-full">
        <a href="https://github.com/kunaljaydesai/CrimeApp" target="_blank" rel="noopener noreferrer">
          <img className="projects__hurt-alert projects__item"
            alt="Image of the Hurt Alert logo"
          />
        </a>
        <h5 className="font-semibold uppercase mt-4 mb-0 md:mb-8 lg:mb-0">Hurt Alert</h5>
        <p className="mb-4 mt-2 text-sm font-light">
          A web and mobile application to allow students to report suspicious activity within Berkeley, CA.
          Winner of the Code4Impact award at AngelHack Silicon Valley.
        </p>
        <p className="my-4 text-sm font-light">
          <b>Technology used:</b>
          <br/>
          Sketch, HTML, CSS
        </p>
      </div>
      <div className="md:col-span-2 block__section px-8 py-16 md-max:py-0 h-full">
        <a href="https://github.com/anthonykim02/poke-locate" target="_blank" rel="noopener noreferrer">
          <img className="projects__poke-locate projects__item"
            alt="Image of the Poke Locate logo"
          />
        </a>
        <h5 className="font-semibold uppercase mt-4 mb-0 md:mb-8 lg:mb-0">Poké Locate</h5>
        <p className="mb-4 mt-2 text-sm font-light">
        A complement iOS application for the mobile app Pokémon GO.
        Users report Pokémon they find onto a map, which displays locations of other
        Pokémon.
        </p>
        <p className="my-4 text-sm font-light">
          <b>Technology used:</b>
          <br/>
          Photoshop, Sketch, Swift
        </p>
      </div>
      <div className="md:col-span-2 block__header md:py-10 py-4 md-max:hidden">
        <h2 className="text-4xl font-semibold">PROJECTS</h2>
      </div>
    </div>
  )
}

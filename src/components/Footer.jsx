import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer () {
  return (
    <div className="grid grid-cols-1 items-center block__section border-black border-solid">
      <div className="m-auto">
        <a href="https://github.com/andrewchough" target="_blank" rel="noopener noreferrer">
          <FaGithub className="margin-auto inline my-6 mx-4 text-purple-600" />
        </a>
        <a href="https://www.linkedin.com/in/andrewchough/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin  className="margin-auto inline my-6 mx-4 text-purple-600" />
        </a>
        <a href="mailto:andrewchough@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="margin-auto inline my-6 mx-4 text-purple-600" />
        </a>
      </div>
      {/* <div className="md:col-span-2 block__header md:py-6 py-4">
        <h2 className="text-4xl font-semibold">ON THE WEB</h2>
      </div>
      <div className="md:col-span-3 block__section p-8 h-full svg-container">
        <h4 className="text-center font-normal mb-2">GITHUB</h4>
        <a href="https://www.linkedin.com/in/andrewchough/" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" className="margin-auto" />
        </a>
      </div>
      <div className="md:col-span-1 block__section p-8 h-full svg-container">
        <h4 className="text-center font-normal mb-2">LINKEDIN</h4>
        <a href="https://www.linkedin.com/in/andrewchough/" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" className="margin-auto" />
        </a>
      </div>
      <div className="md:col-span-1 block__section p-8 h-full svg-container">
        <h4 className="text-center font-normal mb-2">FACEBOOK</h4>
        <a href="https://www.linkedin.com/in/andrewchough/" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" className="margin-auto" />
        </a>
      </div>
      <div className="md:col-span-1 block__section p-8 h-full svg-container">
        <h4 className="text-center font-normal mb-2">GITHUB</h4>
        <a href="https://www.linkedin.com/in/andrewchough/" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" className="margin-auto" />
        </a>
      </div> */}
    </div>
  )
}

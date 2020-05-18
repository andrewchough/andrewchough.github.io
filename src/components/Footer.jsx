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
          <FaLinkedin className="margin-auto inline my-6 mx-4 text-purple-600" />
        </a>
        <a href="mailto:andrewchough@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="margin-auto inline my-6 mx-4 text-purple-600" />
        </a>
      </div>
    </div>
  )
}

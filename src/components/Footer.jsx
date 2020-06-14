import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer () {
  return (
    <div className="grid grid-cols-1 items-center block__section border-black border-solid">
      <div className="mx-auto mt-8 mb-3 md:hidden">
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1ALlfH1E9uvWa0417cLdCJE5AOmXwkXpR/view?usp=sharing"
          className="bg-purple-500 text-white py-2 px-8 round-15 w-32 navbar__resume-button focus:outline-none focus:shadow-outline">
          RESUME
        </a>
      </div>
      <div className="m-auto">
        <a href="https://github.com/andrewchough" target="_blank" rel="noopener noreferrer">
          <FaGithub className="margin-auto inline my-6 mx-4 text-purple-600 footer__item" />
        </a>
        <a href="https://www.linkedin.com/in/andrewchough/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="margin-auto inline my-6 mx-4 text-purple-600 footer__item" />
        </a>
        <a href="mailto:andrewchough@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="margin-auto inline my-6 mx-4 text-purple-600 footer__item" />
        </a>
      </div>
      <div className="mx-auto my-4">
        <p className="font-thin text-xs footer">COPYRIGHT © 2020 ANDREW CHOUGH</p>
      </div>
    </div>
  )
}

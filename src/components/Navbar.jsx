import React from 'react'

export default function Navbar () {
  return (
    <div className="flex items-center justify-between flex-wrap p-5 bg-purple-700 navbar__container">
      <div className="flex items-center flex-shrink-0 navbar__name__container">
        <a href="/" className="hover:underline font-medium text-2xl tracking-tight text-white lg:ml-5 navbar__name">ANDREW CHOUGH</a>
      </div>
      <div className="float-right">
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1ALlfH1E9uvWa0417cLdCJE5AOmXwkXpR/view?usp=sharing"
          className="bg-purple-500 text-white py-2 px-8 round-15 w-32 navbar__resume-button focus:outline-none focus:shadow-outline md-max:hidden">
          RESUME
        </a>
      </div>
    </div>
  )
}

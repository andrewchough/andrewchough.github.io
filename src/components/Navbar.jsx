import React from 'react'
import { Link } from 'gatsby'

export default function Navbar () {
  return (
    <div className="flex items-center justify-between flex-wrap p-5 bg-purple-700 navbar__container">
      <div className="flex items-center flex-shrink-0 navbar__name__container">
        <span className="font-medium text-2xl tracking-tight text-white lg:ml-5 navbar__name">ANDREW CHOUGH</span>
      </div>
      <div className="float-right">
        <Link className="font-medium text-l tracking-tight text-white mr-12 hover:underline navbar__contact-link" to="/contact">CONTACT</Link>
        <button className="bg-purple-500 text-white py-2 px-4 round-15 w-32 navbar__resume-button focus:outline-none focus:shadow-outline">RESUME</button>
      </div>
    </div>
  )
}

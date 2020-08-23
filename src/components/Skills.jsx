import React from 'react'

export default function Skills () {
  return (
    <div className="grid md:grid-cols-8 items-center">
      {/* Mobile title */}
      <div className="md:col-span-2 block__header md:py-10 py-4 md:hidden">
        <h2 className="text-4xl font-semibold block__title">SKILLS</h2>
      </div>
      {/* Desktop title */}
      <div className="md:col-span-2 block__header md:py-10 py-4 md-max:hidden">
        <h2 className="text-4xl font-semibold block__title block__title--right">SKILLS</h2>
      </div>
      <div className="md:col-span-3  p-16 md-max:p-8 h-full">
        <img className="skills__xd__image mx-auto" alt="Picture of the Adobe XD logo"></img>
        <div className="text-center">
          <h2 className="my-4">UI/UX Prototyping &amp; Design</h2>
          <ul>
            <li className="font-light">•&nbsp;Adobe XD</li>
            <li className="font-light">•&nbsp;Sketch</li>
            <li className="font-light">•&nbsp;Adobe Photoshop</li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-3  p-16 md-max:pt-0 md-max:p-8 lh-full">
        <img className="skills__react__image mx-auto" alt="Picture of the React logo"></img>
        <div className="text-center">
          <h2 className="my-4">Tech Stack</h2>
          <ul>
            <li className="font-light">•&nbsp;Javascript (React, Redux, jQuery)</li>
            <li className="font-light">•&nbsp;CSS (SASS, Bootstrap)</li>
            <li className="font-light">•&nbsp;Ruby on Rails</li>
            <li className="font-light">•&nbsp;Python</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

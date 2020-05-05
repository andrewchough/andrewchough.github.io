import React from 'react'

export default function Skills () {
  return (
    <div className="grid md:grid-cols-6 lg:grid-cols-8 items-center block__container">
      <div className="md:col-span-2 block__header md:py-10 py-4">
        <h2 className="text-4xl font-semibold">SKILLS</h2>
      </div>
      <div className="md:col-span-3 block__section p-16 h-full">
        <img className="skills__xd__image mx-auto"></img>
        <div className="text-center">
          <h2 className="my-4">UI/UX Prototyping &amp; Design</h2>
          <ul>
            <li className="font-thin">•&nbsp;Adobe XD</li>
            <li className="font-thin">•&nbsp;Sketch</li>
            <li className="font-thin">•&nbsp;Adobe Photoshop</li>
          </ul>
        </div>
      </div>
      <div className="md:col-span-3 block__section p-16 lh-full">
        <img className="skills__react__image mx-auto"></img>
        <div className="text-center">
          <h2 className="my-4">Tech Stack</h2>
          <ul>
            <li className="font-thin">•&nbsp;Javascript (React, Redux, jQuery)</li>
            <li className="font-thin">•&nbsp;CSS (SASS, Bootstrap)</li>
            <li className="font-thin">•&nbsp;Ruby on Rails</li>
            <li className="font-thin">•&nbsp;Python</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

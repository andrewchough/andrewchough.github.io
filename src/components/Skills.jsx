import React from 'react'

export default function Skills () {
  return (
    <div className="grid md:grid-cols-6 items-center block__container">
      <div className="md:col-span-2 block__header md:py-10 py-4">
        <h2 className="text-4xl font-semibold">SKILLS</h2>
      </div>
      <div className="md:col-span-2 block__section p-12 lg:p-20">
        <img className="skills__xd__image mx-auto"></img>
      </div>
      <div className="md:col-span-2 block__section p-12 lg:p-20">
        <img className="skills__react__image mx-auto h-16"></img>
      </div>
    </div>
  )
}

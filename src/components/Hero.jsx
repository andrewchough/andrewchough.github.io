import React from 'react'

export default function Hero (props) {
  return (
    <div className="w-full hero__background-image">
      <div className="hero__background-color w-full md:h-full">
        <div className="grid md:grid-cols-5 grid-cols-1 grid-flow-col h-full md-max:pt-16">
          <div className="col-span-3 hero__column md-max:hidden">
            <div className="text-white text-6xl text-center hero__name sm-max:hidden md:block">ANDREW CHOUGH</div>
            <hr className="text-white hero__line sm-max:hidden md:block" />
            <div className="text-white text-2xl text-center sm-max:hidden hero__name">
              <p>UI/UX <span className="text-light-blue underline">Designer</span> | Software <span className="underline text-light-green">Engineer</span></p>
            </div>
          </div>
          <div className="col-span-2 my-auto">
            <img className="hero__image md-max:m-auto sm-max:w-3/4 md:m-0" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-flow-col h-full sm-max:block sm:hidden">
          <div className="col-span-1 hero__column">
            <div className="text-white text-xl text-center md-max:block hero__name my-12">
              UI/UX Designer | Software Engineer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Hero (props) {
  return (
    <div className="w-full hero__background-image">
      <div className="hero__background-color w-full md:h-full">
        <div className="grid md:grid-cols-2 grid-cols-1 grid-flow-col h-full">
          <div className="col-span-1 hero__column md-max:hidden">
            <div className="text-white text-6xl text-center hero__name sm-max:hidden md:block">ANDREW CHOUGH</div>
            <hr className="text-white hero__line sm-max:hidden md:block" />
            <div className="text-white text-2xl text-center sm-max:hidden hero__name">UI/UX Designer | Software Engineer</div>
          </div>
          <div className="col-span-1 hero__column">
            <img className="hero__image md-max:m-auto md-max:w-3/4 md:m-0" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-flow-col h-full sm-max:block sm:hidden">
          <div className="col-span-1 hero__column">
            <div className="text-white text-2xl text-center md-max:block hero__name my-12">
              UI/UX Designer | Software Engineer
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

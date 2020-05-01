import React from 'react'

export default function Hero (props) {

  return (
    <div className="w-full hero__background-image">
      <div className="hero__background-color w-full h-full">
        <div className="grid grid-cols-2 grid-flow-col row-span-6 h-full">
          <div className="text-white text-5xl text-center hero__name">ANDREW CHOUGH</div>
          <img src='../../static/images/me.png' />
        </div>
      </div>
    </div>
  )
}

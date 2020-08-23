/* eslint-disable no-trailing-spaces */
import React from 'react'
import PropTypes from 'prop-types'

Hero.propTypes = {
  theme: PropTypes.bool.isRequired
}

export default function Hero (props) {
  return (
    <div className={props.theme ? 'w-full hero__background hero__background-image' : 'w-full hero__background hero__light'}>
      <div className="hero__background-color w-full md:h-full">
        <div className="grid md:grid-cols-5 grid-cols-1 grid-flow-col h-full md-max:pt-16">
          <div className="col-span-3 hero__column md-max:hidden">
            <div className="text-6xl text-center hero__name sm-max:hidden md:block">ANDREW CHOUGH</div>
            <hr className="hero__line sm-max:hidden md:block" />
            <div className="text-2xl text-center sm-max:hidden hero__name">
              <p>UI/UX <span className={ `${props.theme ? 'text-light-blue' : 'text-dark-blue'} underline`}>Designer</span> | 
              Software <span className={ `${props.theme ? 'text-light-green' : 'text-dark-green'} underline`}>Engineer</span></p>
            </div>
          </div>
          <div className="col-span-2 my-auto">
            <img className="hero__image md-max:m-auto sm-max:w-3/4 md:m-0"
              alt="Picture of Andrew Chough"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-flow-col h-full sm-max:block sm:hidden">
          <div className="col-span-1 hero__column">
            <div className="text-xl text-center md-max:block hero__name my-12">
              <p>UI/UX <span className={ `${props.theme ? 'text-light-blue' : 'text-dark-blue'} underline`}>Designer</span> | 
              Software <span className={`${props.theme ? 'text-light-green' : 'text-dark-green'} underline`}>Engineer</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

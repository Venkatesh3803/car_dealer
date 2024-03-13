import React from 'react'
import car from "../assets/carbg.png"
import "../App.css"
import HeroFilters from './HeroFilters'

const Hero = () => {
  return (
    <>
      <div className="hero relative top-0 h-[90vh] w-full flex " >
        <div className=" flex px-32 justify-center flex-col gap-2">
          <p className='text-white font-semibold text-lg'>BUY NEW OR USED CAR ONLINE</p>
          <h1 className='text-7xl text-white font-bold z-10 w-[90%]'>FIND YOUR DREAM <span className='text-red-600'>CAR</span></h1>
          <p className='text-white text-lg'>Get the Latest car reviews & Best Deals</p>
          <button className='bg-red-600 border px-[3rem] py-[1rem] text-white rounded-md cursor-pointer font-semibold w-fit'>OUR INVENTRY</button>
        </div>
        <img className='object-cover absolute top-20 right-11 w-[54%]' src={car} alt="" />
      <HeroFilters />
      </div>
    </>
  )
}

export default Hero
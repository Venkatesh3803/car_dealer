import React from 'react'

const HeroFilters = () => {
  return (
    <div className='h-[25vh] w-[90%] m-auto left-[5%] bg-red-50 absolute -bottom-32 rounded-lg p-10 flex items-center justify-center gap-5 shadow-2xl'>
        <select name="" id="" className='w-full p-5 rounded-lg '>
          <option value="">Brands</option>
          <option value="">Audi</option>
          <option value="">Bently</option>
          <option value="">Ferrari</option>
          <option value="">Ford</option>
          <option value="">Lexus</option>
          <option value="">MayBach</option>
          <option value="">BMW</option>
        </select>
        <select name="" id="" className='w-full  p-5 rounded-lg '>
          <option value="">Model</option>
        </select>
        <select name="" id="" className='w-full p-5 rounded-lg '>
          <option value="">Year</option>
        </select>
        <button className='w-full border border-gray-500 p-4 font-semibold text-xl rounded-md bg-red-500 text-white'>Search</button>
      
    </div>
  )
}

export default HeroFilters
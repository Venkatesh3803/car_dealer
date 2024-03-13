import React from 'react'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

const ExtraFeauters = () => {
    return (
        <div className='w-full bg-slate-100 pt-20 pb-20 relative'>
            <div className="w-[90%] m-auto">
                <div className="flex justify-between">
                    <div className=" flex gap-3 flex-col">
                        <p className='text-red-500 text-xl underline '>20% OFF FOR ONLINE BOOKING</p>
                        <h1 className='text-6xl font-semibold'>Our Extra Features</h1>
                    </div>
                    <div className="flex gap-3 w-[50%] self-end right-0">
                        <div className="border border-r-2 border-red-500"></div>
                        <p className='text-lg text-gray-600'>For 15 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of</p>
                    </div>
                </div>

                <div className="mt-28 flex gap-4">
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className='w-32' src={icon1} alt="" />
                        <h2 className='font-semibold text-2xl'>Trusted Car Dealership</h2>
                        <p className='text-gray-600 text-center'>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className='w-16' src={icon2} alt="" />
                        <h2 className='font-semibold text-2xl'>Special Gift Offer</h2>
                        <p className='text-gray-600 text-center'>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className='w-20' src={icon3} alt="" />
                        <h2 className='font-semibold text-2xl'>Flexible Pricing
                        </h2>
                        <p className='text-gray-600 text-center'>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <img className='w-20' src={icon4} alt="" />
                        <h2 className='font-semibold text-2xl'>Expert Car Service</h2>
                        <p className='text-gray-600 text-center'>Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtraFeauters
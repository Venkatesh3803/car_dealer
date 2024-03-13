import React from 'react'
import vintage from "../assets/vintage.jpg"
import supercar from "../assets/supercar.jpg"
import seden from "../assets/seden.jpg"
import lambo from "../assets/lambo.jpg"

const Catergory = () => {
    return (
        <div className='w-full bg-white pt-20 pb-20'>
            <div className="w-[90%] m-auto  h-full ">
                <div className="flex
                flex-col items-center gap-4">
                    <p className='text-red-500 text-xl underline'>20% OFF FOR ONLINE BOOKING</p>
                    <h1 className='text-5xl font-semibold w-[60%] text-center'>Browse By Your Favorite <span className='text-red-600'>Vehicles</span>types  </h1>
                </div>
                <div className=" mt-20">
                    {/* rows */}
                    <div className="flex gap-5 w-[100%] h-[80vh]">
                        <div className="flex-1 rounded-xl overflow-hidden">
                            <img className='w-[100%] h-full object-cover overflow-hidden hover:scale-[1.1] transition-all' src={vintage} alt="" />
                        </div>
                        <div className="flex-1 rounded-xl overflow-hidden">
                            <img className='w-[100%] h-full object-cover overflow-hidden hover:scale-[1.1] transition-all' src={supercar} alt="" />
                        </div>

                        {/* colums */}
                        <div className="flex-1 flex flex-col gap-5 overflow-hidden">
                            <div className="flex-1 rounded-xl overflow-hidden">
                                <img className='w-[100%] h-full object-cover overflow-hidden hover:scale-[1.1] transition-all' src={seden} alt="" />
                            </div>
                            <div className="flex-1 rounded-xl overflow-hidden">
                                <img className='w-[100%] h-full object-cover overflow-hidden hover:scale-[1.1] transition-all' src={lambo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catergory
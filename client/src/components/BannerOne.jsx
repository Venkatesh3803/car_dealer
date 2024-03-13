import React from 'react'
import b1 from "../assets/1.png"
import b2 from "../assets/2.png"
import b3 from "../assets/3.png"
import b4 from "../assets/4.png"
import b5 from "../assets/5.png"
import b6 from "../assets/6.png"
import car from "../assets/car.png"

const BannerOne = () => {
    const brands = [
        {
            id: 1,
            image: b1,
            name: 'Acra'
        },
        {
            id: 2,
            image: b2,
            name: 'Ford'
        },
        {
            id: 3,
            image: b3,
            name: 'Bentley'
        },
        {
            id: 4,
            image: b4,
            name: 'Cheavrolet'
        },
        {
            id: 5,
            image: b5,
            name: 'Ferrari'
        },
        {
            id: 6,
            image: b6,
            name: 'Mercedies'
        },
    ]
    return (
        <div className='bg-slate-100 w-full'>
            <div className="w-[90%] m-auto  h-full pt-56 flex" >
                <div className=" flex-[4] p-5 flex flex-col gap-3">
                    <p className='text-red-500 text-xl underline '>20% OFF FOR ONLINE BOOKING</p>
                    <h1 className='text-6xl font-semibold'>We,Re Trusted Your Car <span className='text-red-600'>Dealer</span> </h1>
                    <div className="bg-black flex flex-wrap">
                        {brands.map((b, i) => {
                            return (
                                <div key={i} className='w-1/2 h-52 flex items-center justify-center flex-col text-white border border-gray-800'>
                                    <img className='object-cover' src={b.image} alt="" />
                                    <p className='font-bold text-xl'>{b.name}</p>
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className="flex-[6]  flex flex-col gap-2">
                    <div className="flex gap-3 w-[70%] self-end right-0">
                        <div className="border border-r-2 border-red-500"></div>
                        <p className='text-lg text-gray-600'>For 15 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of</p>
                    </div>
                    <div className=" m-auto flex gap-4 w-[90%]">
                        <div className="border p-5 transition-all  rounded-sm border-gray-300 w-[30%]  text-red-600 text-7xl hover:bg-slate-200">12 <span className='text-black text-xl font-semibold '>Dealers</span>
                        </div>
                        <div className="border p-5 transition-all  rounded-sm border-gray-300 w-[30%]  text-red-600 text-7xl hover:bg-slate-200">12 <span className='text-black text-xl font-semibold '>Dealers</span>
                        </div>
                        <div className="border p-5 transition-all  rounded-sm border-gray-300 w-[30%]  text-red-600 text-7xl hover:bg-slate-200">12 <span className='text-black text-xl font-semibold '>Dealers</span>
                        </div>

                    </div>

                    <img className='-mt-20' src={car} alt="" />

                </div>
            </div>
        </div>
    )
}

export default BannerOne

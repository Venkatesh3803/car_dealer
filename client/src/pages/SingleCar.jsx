import React, { useContext, useEffect, useState } from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { CarRequests } from '../RequestMethods'
import { AuthContext } from '../Context/AuthContext'
import { toast } from 'react-toastify'

const SingleCar = () => {
    const { id } = useParams()
    const [car, setCar] = useState("");
    const { currentUser } = useContext(AuthContext)
    useEffect(() => {
        CarRequests(`/car/single/${id}`, "get").then((res) => {
            setCar(res)
        })
    }, [id])


    const handleBuy = () => {
        const data = {
            carId: id,
            dealerId: car?.dealerId,
            userId: currentUser._id,
            vechile_info: car
        }
        CarRequests('/deal/create', "post", data, currentUser.token).then((res) => {
            toast.success(res)
        })
    }
    return (
        <div>
            <Navber />
            <div className="w-full bg-pink-50 m-auto p-5">
                <div className="flex flex-col w-[80%] m-auto gap-5">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg cursor-pointer'>
                                    <li>Brand:-</li>
                                    <li className='text-gray-600'>{car.brand}</li>
                                </ul>
                                <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg cursor-pointer'>
                                    <li>Model:-</li>
                                    <li className='text-gray-600'>{car.model}</li>
                                </ul>
                                <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg cursor-pointer'>
                                    <li>Year:-</li>
                                    <li className='text-gray-600'>{car.manif_year}</li>
                                </ul>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <h1 className='text-[2.5rem] font-semibold'>{car.name}</h1>
                                <p className='text-gray-600 text-sm'>Boston, MA, United States</p>
                            </div>
                        </div>
                        <div className="font-semibold text-2xl">
                            <h2> ₹{car.price}</h2>
                        </div>

                    </div>
                    <img className='w-full h-[80vh] object-cover rounded-lg' src={car.image ? car.image : "https://clipground.com/images/no-image-png-5.jpg"} alt="" />
                    <p>{car.desc}</p>
                    <div className="flex items-center justify-between">
                        <div className="details">
                            <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg '>
                                <li>Fuel type:-</li>
                                <li className='text-gray-600'>{car.fuel_type}</li>
                            </ul>
                            <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg '>
                                <li>Driven KM</li>
                                <li className='text-gray-600'>{car.driven_km}</li>
                            </ul>
                            <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg '>
                                <li>Year:-</li>
                                <li className='text-gray-600'>{car.manif_year}</li>
                            </ul>
                            <ul className='flex gap-4 items-center p-3 text-xl  transition-all rounded-lg '>
                                <li>Mileage:-</li>
                                <li className='text-gray-600'>{car.mileage}</li>
                            </ul>

                        </div>
                        <div className="border border-gray-300 w-[30%] shadow-lg p-5 bg-slate-200">
                            <h1 className='font-semibold text-xl'>Dealer Info</h1>
                            <div className="flex items-center flex-col gap-3 mt-2">
                                <p>Name of the dealer</p>
                                <p>Company name</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur ex labore enim obcaecati laboriosam.</p>
                            </div>
                        </div>
                    </div>
                    <button className='bg-blue-600 border p-[1rem] text-white rounded-md cursor-pointer font-semibold w-full text-xl' onClick={() => handleBuy(car._id)}> Make Deal</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleCar

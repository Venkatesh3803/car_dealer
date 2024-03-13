import React, { useContext } from 'react'
import { LuFuel } from "react-icons/lu"
import { IoMdSpeedometer } from "react-icons/io";
import { GiGearStickPattern } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { CarRequests } from '../RequestMethods';
import { toast } from 'react-toastify';


const CarCard = ({ car, setData }) => {
    const { currentUser } = useContext(AuthContext);

    const handleDelete = (id) => {
        confirmAlert({
            title: 'Confirm to Delete this Car',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        CarRequests(`/car/${id}`, "delete", { dealerId: currentUser?._id }, currentUser.token).then((res) => {
                            toast.success(res)
                        })
                        setData(car.filter((item) => item._id !== id))
                        return
                    }

                },
                {
                    label: 'No',
                    onClick: () => { return }
                }
            ]
        });
    }

    return (
        <div className="w-[32%] h-full rounded-md overflow-hidden bg-slate-100 shadow-md" >
            <div className="h-[50%] w-full relative">
                <Link to={`/cars/${car._id}`}>
                    <img className='w-full h-[40vh] object-cover cursor-pointer' src={car.image ? car.image : "https://clipground.com/images/no-image-png-5.jpg"} alt="" />
                </Link>
                <div className="flex gap-2 absolute top-3 right-3">

                    {car.isSold &&
                        <span className='bg-red-600 px-3 py-1 rounded-md text-white font-thin text-sm '>Sold</span>
                    }
                    {car.dealerId === currentUser?._id &&
                        <Link to={`/editpage/${car._id}`}>
                            <span className='bg-green-600 px-3 py-1 rounded-md text-white font-thin text-sm cursor-pointer'>Edit</span>
                        </Link>
                    }
                    {car.dealerId === currentUser?._id &&
                        <span className='bg-red-600 px-3 py-1 rounded-md text-white font-thin text-sm cursor-pointer' onClick={() => handleDelete(car._id)}>Delete</span>
                    }
                </div>
            </div>
            <div className="py-5 px-8 flex flex-col gap-5">
                <div className="flex gap-2 flex-col">
                    <p className='text-red-600 text-lg '>{car.brand}</p>
                    <Link to={`/cars/${car._id}`}>
                        <h3 className='text-xl font-semibold cursor-pointer hover:text-red-600 transition-all'>{car.model} {car.manif_year} mo</h3>
                    </Link>
                    <p className='text-red-600 text-lg '>₹{car.price}</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-3 items-center">
                        <LuFuel className='text-xl' />
                        <div className="">
                            <p className='text-gray-500'>Fuel Type</p>
                            <p>{car.fuel_type}</p>
                        </div>
                    </div>
                    <div className="border-r border-gray-500"></div>
                    <div className="flex gap-3 items-center">
                        <IoMdSpeedometer className='text-xl' />
                        <div className="">
                            <p className='text-gray-500'>Mileage</p>
                            <p>{car.mileage}</p>
                        </div>
                    </div>
                    <div className="border-r border-gray-500"></div>
                    <div className="flex gap-3 items-center">
                        <GiGearStickPattern className='text-xl' />
                        <div className="">
                            <p className='text-gray-500'>Trasmission</p>
                            <p>Manual</p>
                        </div>
                    </div>

                </div>
                <hr />
                <Link to={`/cars/${car._id}`}>
                    <button>View Details...</button>
                </Link>
            </div>
        </div>
    )
}

export default CarCard

import React, { useContext, useEffect, useState } from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import FeaturedVehicle from '../components/FeaturedVehicle'
import { useParams } from 'react-router-dom'
import { UserRequests } from '../RequestMethods'
import { toast } from 'react-toastify'
import { AuthContext } from '../Context/AuthContext'

const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext)
    const { id } = useParams()
    const [inputs, setInputs] = useState("");

    useEffect(() => {
        {
            currentUser.isDealer ?
                UserRequests(`/dealer/single/${id}`, "get").then((res) => {
                    setInputs(res)
                })
                :
                UserRequests(`/user/single/${id}`, "get").then((res) => {
                    setInputs(res)
                })
        }
    }, [id])
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        UserRequests(`/user/${id}`, "patch", inputs, currentUser.token).then((res) => {
            toast.success(res)
        })
    }

    return (
        <div>
            <Navber />
            <div className="w-full ">
                <div className="h-[50vh] w-full relative">
                    <img className='h-full w-full object-cover' src="https://www.pixelstalk.net/wp-content/uploads/2016/09/Download-1080p-Cars-Pictures.jpg" alt="" />
                    <h1 className='absolute  left-[45%] top-[30%] text-white text-6xl'> Profile</h1>
                </div>
                <form className="w-[60%]  m-auto mt-10 mb-10 border border-gray-200 shadow-lg p-5 flex gap-14 flex-col" onSubmit={handleUpdate}>
                    <h1 className='text-2xl font-semibold'>User Info</h1>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-2 w-full">
                            <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg placeholder:text-gray-500 p-3 focus:outline-none text-lg' placeholder='First Name' name='firstname' value={inputs.firstname} required onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg placeholder:text-gray-500 p-3 focus:outline-none text-lg' placeholder='Last Name' name='lastname' value={inputs.lastname} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <p className='border-b border-gray-300 pb-3 text-lg'>{inputs.email}</p>
                    </div>
                    <div className="flex gap-10">
                        <select name="gender" id="" className='w-full p-3 rounded-lg border border-gray-300' value={inputs.gender} onChange={handleChange}>
                            <option value="">Gender</option>
                            <option >Male</option>
                            <option >Female</option>
                            <option >Other</option>
                        </select>
                        <div className="flex flex-col gap-2 w-full">
                            <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg placeholder:text-gray-500 p-3 focus:outline-none text-lg' placeholder='City' name='city' value={inputs.city} onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg placeholder:text-gray-500 p-3 focus:outline-none text-lg' placeholder='Country' name='country' value={inputs.country} onChange={handleChange} />
                        </div>

                    </div>
                    <button type='submit' className='bg-blue-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Submit</button>

                </form>

                <FeaturedVehicle profile />
            </div>

            <Footer />
        </div>
    )
}

export default ProfilePage


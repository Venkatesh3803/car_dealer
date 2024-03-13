import React, { useContext, useEffect, useState } from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import bg from "../assets/contactus.avif"
import { useParams } from 'react-router-dom'
import { CarRequests } from '../RequestMethods'
import { AuthContext } from '../Context/AuthContext'
import { toast } from 'react-toastify'

const EditPage = () => {
    const {currentUser} = useContext(AuthContext)
    const { id } = useParams();
    const [inputs, setInputs] = useState({})
    useEffect(() => {
        CarRequests(`/car/single/${id}`, "get").then((res) => {
            setInputs(res)
        })
    }, [id])

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        CarRequests(`/car/edit/${id}`, "patch", inputs, currentUser.token).then((res)=>{
            setInputs(res)
            toast.success(res)
        })
    }


    return (
        <div>
            <Navber />
            <div className="w-full ">
                <div className="h-[50vh] w-full">
                    <img className='h-full w-full object-cover' src={bg} alt="" />
                </div>
                <div className="w-[90%] m-auto">
                    <div className="flex flex-col gap-2 mt-10 px-5">
                        {/* <p className='text-red-500 text-lg underline'>Add Your Car Today</p> */}
                        <h1 className='text-3xl font-semibold'>Edit Car Info  </h1>
                    </div>
                    <form className='bg-white flex gap-5 flex-col p-10 rounded-lg ' onSubmit={handleUpdate}>

                        {/* title */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className='text-lg'>Name</label>
                            <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='name' name='name' value={inputs.name} required onChange={handleChange} />
                        </div>

                        {/* description */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className='text-lg'>Description</label>
                            <textarea type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Description' name='desc' value={inputs.desc} required onChange={handleChange} />
                        </div>

                        <div className="flex gap-5">

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Brand</label>
                                <select name="brand" id="" className='w-full p-3 rounded-lg border border-gray-300' value={inputs.brand} onChange={handleChange}>
                                    <option value="">Brands</option>
                                    <option>Tata</option>
                                    <option>Audi</option>
                                    <option>Bently</option>
                                    <option>Ferrari</option>
                                    <option>Ford</option>
                                    <option>Mahendra</option>
                                    <option>MayBach</option>
                                    <option>BMW</option>
                                    <option>Lamborgini</option>
                                    <option>Maruthi Suzuki</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Model</label>
                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='ex:- swift' name='model' value={inputs.model} required onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Fuel Type</label>
                                <select name="fuel_type" id="" className='w-full p-3 rounded-lg border border-gray-300'  value={inputs.fuel_type} onChange={handleChange}>
                                    <option value="">select</option>
                                    <option >Petrol</option>
                                    <option >Diesel</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Manifrature Year</label>
                                <select name="manif_year" id="" className='w-full p-3 rounded-lg border border-gray-300'  value={inputs.manif_year} onChange={handleChange}>
                                    <option value="">select</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Milage</label>
                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Ex:- 23.5' name='mileage' value={inputs.mileage} required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Driven KM</label>
                                <input type="number" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='20500' name='driven_km' required  value={inputs.driven_km} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Price</label>
                                <input type="number" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Price' name='price' value={inputs.price} required onChange={handleChange} />
                            </div>
                        </div>

                        {/* <img className='w-[30%] h-[30vh] rounded-lg object-cover' src={image} alt="" /> */}

                        {/* <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className='text-lg'>Image</label>
                            <input type="file" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' onChange={handleUpload} />
                        </div> */}

                        <button className='bg-blue-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Submit</button>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default EditPage

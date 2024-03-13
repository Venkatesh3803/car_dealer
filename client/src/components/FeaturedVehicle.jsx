import React, { useContext, useEffect, useState } from 'react'
import CarList from './CarList';
import { CarRequests } from '../RequestMethods';
import { AuthContext } from '../Context/AuthContext';


const FeaturedVehicle = ({ carsPage, profile }) => {
    const { currentUser } = useContext(AuthContext)
    const [data, setData] = useState([]);
    const [brand, setBrand] = useState("")
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [manif_year, setManif_year] = useState("")
    const [fuel, setFuel] = useState("")

    useEffect(() => {
        {
            profile ?
                CarRequests(`/car/all`, "get").then((res) => {
                    setData(res.filter((item) => item.dealerId === currentUser._id))
                })
                :
                CarRequests(`/car/all?fuel=${fuel}&name=${name}&model=${model}&brand=${brand}&year=${manif_year}`, "get").then((res) => {
                    setData(res)
                })
        }
    }, [brand, name, model, manif_year, fuel])


    return (
        <div className='w-full min-h-[88vh] bg-white pt-10'>
            <div className="w-[90%] m-auto  h-full ">
                {!carsPage && !profile &&
                    <div className="flex
                flex-col items-center gap-4">
                        <p className='text-red-500 text-xl underline'>20% OFF FOR ONLINE BOOKING</p>
                        <h1 className='text-5xl font-semibold w-[60%] text-center'>Find The Best Deals   </h1>
                    </div>
                }
                {carsPage &&
                    <>
                        <h1>Filters</h1>
                        <div className='w-full  bg-gray-200 flex gap-3 p-5'>
                            <div className="flex flex-col gap-2 w-full">

                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Model' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <select name="" id="" className='w-full p-2 rounded-lg ' onChange={(e) => setBrand(e.target.value)}>
                                <option value="">Brands</option>
                                <option>Tata</option>
                                <option>Hyundai</option>
                                <option>Honda</option>
                                <option>Toyota</option>
                                <option>Audi</option>
                                <option>Bently</option>
                                <option>Ferrari</option>
                                <option>Ford</option>
                                <option>Mahendra</option>
                                <option>Mercedies</option>
                                <option>BMW</option>
                                <option>Lamborgini</option>
                                <option>Maruthi Suzuki</option>
                            </select>
                            <select name="" id="" className='w-full p-2 rounded-lg' onChange={(e) => setFuel(e.target.value)}>
                                <option value="">fuel</option>
                                <option >Petrol</option>
                                <option >Diesel</option>
                            </select>
                            <select name="" id="" className='w-full p-2 rounded-lg ' onChange={(e) => setManif_year(e.target.value)}>
                                <option value="">Year</option>
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
                    </>
                }

                <CarList data={data} setData={setData} />
                {!carsPage && !profile &&
                    <div className="flex items-center justify-center">
                        <button className='bg-red-600 border self-center mt-20 mb-10 px-[3rem] py-[1rem] text-white rounded-md cursor-pointer font-semibold w-fit'>Explore All</button>
                    </div>
                }
            </div >

        </div >
    )
}

export default FeaturedVehicle

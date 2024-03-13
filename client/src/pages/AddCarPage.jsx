import React, { useContext, useState } from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import bg from "../assets/addbg.jpg"
import { CarRequests } from '../RequestMethods'
import { toast } from 'react-toastify'
import { AuthContext } from '../Context/AuthContext'
import axios from 'axios'

const AddCarPage = () => {
    const { currentUser } = useContext(AuthContext)
    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState("")

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'crowdFunding');
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            dealerId: currentUser._id,
            ...inputs,
            image
        }
        CarRequests("/car/create", "post", data, currentUser.token).then(res => {
            if (res) {
                toast.success("Created Sucessfully")
            }
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
                        <p className='text-red-500 text-lg underline'>Add Your Car Today</p>
                        <h1 className='text-3xl font-semibold'>Add your Car   </h1>
                    </div>
                    <form className='bg-white flex gap-5 flex-col p-10 rounded-lg ' onSubmit={handleSubmit}>

                        {/* title */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className='text-lg'>Name</label>
                            <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='name' name='name' required onChange={handleChange} />
                        </div>

                        {/* description */}
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className='text-lg'>Description</label>
                            <textarea type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Description' name='desc' required onChange={handleChange} />
                        </div>

                        <div className="flex gap-5">

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Brand</label>
                                <select name="brand" id="" className='w-full p-3 rounded-lg border border-gray-300' onChange={handleChange}>
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
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Model</label>
                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='ex:- swift' name='model' required onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Fuel Type</label>
                                <select name="fuel_type" id="" className='w-full p-3 rounded-lg border border-gray-300' onChange={handleChange}>
                                    <option value="">select</option>
                                    <option >Petrol</option>
                                    <option >Diesel</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Manifrature Year</label>
                                <select name="manif_year" id="" className='w-full p-3 rounded-lg border border-gray-300' onChange={handleChange}>
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
                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Ex:- 23.5' name='mileage' required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Driven KM</label>
                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='20500' name='driven_km' required onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="" className='text-lg'>Price</label>
                                <input type="text" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' placeholder='Price' name='price' required onChange={handleChange} />
                            </div>
                        </div>
                        {image &&
                            <img className='w-[30%] h-[30vh] rounded-lg object-cover' src={image} alt="" />
                        }
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="" className='text-lg'>Image</label>
                            <input type="file" className='border border-gray-300 w-full placeholder:text-lg p-3 focus:outline-none text-lg' onChange={handleUpload} />
                        </div>

                        <button className='bg-blue-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Submit</button>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AddCarPage

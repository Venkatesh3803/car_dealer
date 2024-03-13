import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthRequest } from '../RequestMethods';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate()
    const [dealer, setDealer] = useState(false)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: inputs.email,
            password: inputs.password
        }
        if (inputs.password !== inputs.confpass) return toast.warn("password does't match")


        try {
            {
                !dealer ?
                    AuthRequest("/dealer/register", "post", data).then((res) => {
                        toast.success(res)
                        if (res) {
                            navigate("/login")
                            setInputs({})
                        }
                    })

                    :

                    AuthRequest("/auth/register", "post", data).then((res) => {
                        toast.success(res)
                        if (res) {
                            navigate("/login")
                            setInputs({})
                        }
                    })
            }
        } catch (error) {
            toast.error(error.response.data)
            throw error
        }
    }

    return (
        <div className='register w-full flex items-center'>
            <div className="flex items-center justify-between w-[70%] m-auto">
                <div className=" flex-1 flex flex-col gap-3">
                    <h1 className='text-white text-3xl font-semibold'>Wellcome to Xtream</h1>
                    <p className='text-white text-5xl font-semibold'>Get Your Dream Car Today </p>
                </div>
                <div className="flex-1" >
                    <div className="flex gap-2 mb-2">

                        <span className='bg-white px-3 py-1 text-xl font-semibold cursor-pointer text-black' onClick={() => setDealer(false)}>User</span>
                        <span className='bg-white px-3 py-1 text-xl font-semibold cursor-pointer text-black' onClick={() => setDealer(true)}>Dealer</span>
                    </div>
                    {dealer ?
                        <form className='bg-white flex gap-5 flex-col p-10 rounded-lg w-[80%]' onSubmit={handleSubmit}>
                            <h3 className='text-3xl font-semibold'>Sign Up Dealer</h3>
                            <p>Your email address will not be published.</p>

                            <div className="flex flex-col gap-4">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg py-3 focus:outline-none text-lg' placeholder='First Name' name='firstname' required onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg py-3 focus:outline-none text-lg' placeholder='Last Name' name='lastname' required onChange={handleChange} />
                                    </div>
                                </div>
                                <input type="email" className='border-b border-gray-300 placeholder:text-xl pb-3 focus:outline-none text-xl' placeholder='Email' name='email' required onChange={handleChange} />
                                <input type="password" className='border-b border-gray-300 placeholder:text-xl pb-3 focus:outline-none text-xl' placeholder='Password' name='password' required onChange={handleChange} />
                                <input type="password" className='border-b border-gray-300 placeholder:text-xl pb-3 focus:outline-none text-xl' placeholder='Conf Password' name='confpass' required onChange={handleChange} />

                                <button type='submit' className='bg-red-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Register</button>

                                <p className='text-black text-sm '>Already have Account!
                                    <Link className='text-blue-600' to={"/login"}> Log In</Link></p>
                            </div>
                        </form> :
                        <form className='bg-white flex gap-5 flex-col p-10 rounded-lg w-[80%]' onSubmit={handleSubmit}>
                            <h3 className='text-3xl font-semibold'>Sign Up User</h3>
                            <p>Your email address will not be published.</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-2 w-full">
                                        <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg py-3 focus:outline-none text-lg' placeholder='First Name' name='firstname' required onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <input type="text" className='border-b border-gray-300 w-full placeholder:text-lg py-3 focus:outline-none text-lg' placeholder='Last Name' name='lastname' required onChange={handleChange} />
                                    </div>
                                </div>
                                <input type="email" className='border-b border-gray-300 placeholder:text-xl pb-3 focus:outline-none text-xl' placeholder='Email' name='email' required onChange={handleChange} />
                                <input type="password" className='border-b border-gray-300 placeholder:text-xl pb-3 focus:outline-none text-xl' placeholder='Password' name='password' required onChange={handleChange} />
                                <input type="password" className='border-b border-gray-300 placeholder:text-xl pb-3 focus:outline-none text-xl' placeholder='Conf Password' name='confpass' required onChange={handleChange} />

                                <button type='submit' className='bg-red-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Register</button>

                                <p className='text-black text-sm '>Already have Account!
                                    <Link className='text-blue-600' to={"/login"}> Log In</Link></p>
                            </div>
                        </form>

                    }
                </div>
            </div>
        </div>
    )
}

export default Register

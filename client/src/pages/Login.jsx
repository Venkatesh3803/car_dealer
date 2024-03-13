import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
    const { login, loginDealer } = useContext(AuthContext)
    const [inputs, setInputs] = useState({});
    const [dealer, setDealer] = useState(false)

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        {
            dealer ?
                loginDealer(inputs)
                :
                login(inputs)
        }
    }

    return (
        <>

            <div className='login w-full flex items-center'>
                <div className="flex items-center justify-between w-[70%] m-auto">
                    <div className=" flex-1 flex flex-col gap-3">
                        <h1 className='text-white text-3xl font-semibold'>Wellcome to Xtream</h1>
                        <p className='text-white text-5xl font-semibold'>Get Your Dream Car Today </p>
                    </div>
                    <div className="flex-1" >
                        <div className="flex gap-3 mb-2">
                            <span className='bg-white px-3 py-1 text-xl font-semibold cursor-pointer text-black' onClick={() => setDealer(false)}>User</span>
                            <span className='bg-white px-3 py-1 text-xl font-semibold cursor-pointer text-black' onClick={() => setDealer(true)}>Dealer</span>
                        </div>
                        {dealer ?
                            <form className='bg-white flex gap-5 flex-col p-10 rounded-lg w-[80%]' onSubmit={handleSubmit}>
                                <h3 className='text-3xl font-semibold'>Login As Dealer</h3>
                                <p>Your email address will not be published.</p>

                                <div className="flex flex-col gap-6">
                                    <input type="email" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl' placeholder='Email' name='email' required onChange={handleChange} />
                                    <input type="password" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl' placeholder='Password' name='password' required onChange={handleChange} />

                                    <button type='submit' className='bg-red-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Login</button>

                                    <p className='text-black text-sm '>Don't have Account!
                                        <Link className='text-blue-600' to={"/register"}> Sign Up</Link></p>
                                </div>
                            </form>
                            :
                            <form className='bg-white flex gap-5 flex-col p-10 rounded-lg w-[80%]' onSubmit={handleSubmit}>
                                <h3 className='text-3xl font-semibold'>Login User</h3>
                                <p>Your email address will not be published.</p>

                                <div className="flex flex-col gap-6">
                                    <input type="email" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl' placeholder='Email' name='email' required onChange={handleChange} />
                                    <input type="password" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl' placeholder='Password' name='password' required onChange={handleChange} />

                                    <button type='submit' className='bg-red-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Login</button>

                                    <p className='text-black text-sm '>Don't have Account!
                                        <Link className='text-blue-600' to={"/register"}> Sign Up</Link></p>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

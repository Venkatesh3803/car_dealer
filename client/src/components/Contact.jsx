import React from 'react'

const Contact = () => {
    return (
        <div className='h-[100vh] w-fu border-[60px] border-white '>
            <div className=" m-auto w-full h-[90vh] rounded-3xl flex items-center justify-around  gap-4">
                <h1 className='text-8xl text-white flex-[2] w-[80%] text-center'>BUY A CAR TODAY</h1>
                <div className='bg-white flex gap-5 flex-col p-10 flex-[1] rounded-lg mr-[10rem]'>
                    <h3 className='text-3xl font-semibold'>Contact Us Today</h3>
                    <p>Your email address will not be published.</p>

                    <div className="flex flex-col gap-6">
                        <input type="text" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl'  placeholder='Full Name' />
                        <input type="text" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl' placeholder='Email address' />
                        <textarea type="text" className='border-b border-gray-300 placeholder:text-xl pb-5 focus:outline-none text-xl' placeholder='Full Name' />
                        <button className='bg-red-600 border py-[1rem] text-white rounded-md cursor-pointer font-semibold w-full'> Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
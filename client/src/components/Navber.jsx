import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { CgProfile } from "react-icons/cg";
import { CiLogout, CiSettings } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { toast } from 'react-toastify';



const Navber = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const [user, setUser] = useState(false)
  const navigate = useNavigate()
  const handleClick = () => {
    {
      currentUser.isDealer ?
        navigate("/addcar")
        :
        toast.warn("Login as Dealer to sell car")
    }
  }



  return (
    <div className='bg-slate-200 flex items-center justify-between w-[100%] rounded-b-lg m-auto p-5 sticky top-0 z-50'>
      <Link to={"/"}>
        <div className="text-2xl italic"><span className='text-red-600 italic'>X</span>treme</div>
      </Link>
      <ul className="flex items-center gap-7 ">
        {[{ name: "HOME", link: "/" }, { name: "CARS", link: "/allcars" }, { name: "CONTACT US", link: "/" }, { name: "ABOUT US", link: "/" }].map((i, index) => {
          return (
            <Link to={`${i.link}`} >
              <li className='text-l cursor-pointer ' key={index}>{i.name}</li>
            </Link>
          )
        })}
      </ul>
      <div className="relative flex items-center gap-5">

        <button className='bg-red-600 border px-[2rem] py-[0.3rem] text-white rounded-md cursor-pointer font-semibold w-fit' onClick={handleClick}> Sell Car</button>

        {currentUser ?
          <>
            <div className='w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer font-bold' onClick={() => setUser(true)}>{currentUser?.email.toUpperCase().slice(0,1)}</div>
            {user &&
              <div className='w-[250px] bg-gray-500 absolute right-6 top-10 rounded-lg  p-5 text-white' onMouseLeave={() => setUser(false)}>
                <Link to={`/profile/${currentUser?._id}`}>
                  <ul className='flex gap-4 items-center p-3 text-xl hover:bg-gray-400 transition-all rounded-lg cursor-pointer'>
                    <CgProfile />
                    <li>Profile</li>
                  </ul>
                </Link>

                <Link to={"/addcar"}>
                  <ul className='flex gap-4 items-center p-3 text-xl hover:bg-gray-400 transition-all rounded-lg cursor-pointer'>
                    <IoIosAddCircleOutline />
                    <li>Add Car</li>
                  </ul>
                </Link>
                <Link to={"/"}>
                  <ul className='flex gap-4 items-center p-3 text-xl hover:bg-gray-400 transition-all rounded-lg cursor-pointer'>
                    <CiSettings />
                    <li>Setting</li>
                  </ul>
                </Link>
                <ul className='flex gap-4 items-center p-3 text-xl hover:bg-gray-400 transition-all rounded-lg cursor-pointer' onClick={() => logout()}>
                  <CiLogout />
                  <li>LogOut</li>
                </ul>
              </div>
            }
          </>
          :
          <>

            <Link to={"/login"}>
              login
            </Link>
          </>
        }
      </div>
    </div>
  )
}

export default Navber
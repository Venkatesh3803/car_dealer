import React from 'react'
import Navber from '../components/Navber'
import Hero from '../components/Hero'
import BannerOne from '../components/BannerOne'
import Catergory from '../components/Catergory'
import ExtraFeauters from '../components/ExtraFeauters'
import FeaturedVehicle from '../components/FeaturedVehicle'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div className=' home'>
            <Navber />
            <Hero />
            <BannerOne />
            <Catergory />
            <ExtraFeauters />
            <FeaturedVehicle />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage

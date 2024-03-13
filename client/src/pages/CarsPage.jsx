import React from 'react'
import Navber from '../components/Navber'
import FeaturedVehicle from '../components/FeaturedVehicle'
import Footer from '../components/Footer'

const CarsPage = () => {
    return (
        <div>
            <Navber />
            <FeaturedVehicle carsPage />
            <Footer />
        </div>
    )
}

export default CarsPage

import React from 'react'
import CarCard from './CarCard';

const CarList = ({ data, setData }) => {
    return (
        <div className=" mt-20 mb-10  w-full  flex gap-5 flex-wrap">
            {data.map((c) => {
                return (
                    <CarCard car={c} setData={setData} key={c._id} />
                )
            })}

        </div>
    )
}

export default CarList

import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    dealerId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fuel_type: {
        type: String,
    },
    desc: {
        type: String
    },
    model: {
        type: String
    },
    manif_year: {
        type: Number
    },
    mileage: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String
    },
    driven_km: {
        type: String
    },
    image: {
        type: String
    },
    isSold: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

export default mongoose.model("cars", CarSchema)
import mongoose from "mongoose";

const DealerSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    isDealer: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dealerInfo: {
        type: Object
    },
    cars_list: {
        type: Array
    },
    deals: {
        type: Array
    },
    sold_vechiles: {
        type: Array
    }

}, { timestamps: true });

export default mongoose.model("dealers", DealerSchema)
import mongoose from "mongoose";

const SoldSchema = new mongoose.Schema({
    car_id: {
        type: String
    },
    vechile_id: {
        type: String,
        required: true
    },
    vechile_info: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("sold", SoldSchemaSchema)
import mongoose from "mongoose";

const DealsSchema = new mongoose.Schema({
    dealerId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    vechile_info: {
        type: Object,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("deals", DealsSchema)
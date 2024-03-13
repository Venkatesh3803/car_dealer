import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
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
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    gender: {
        type: String
    }

}, { timestamps: true });

export default mongoose.model("user", UserSchema)
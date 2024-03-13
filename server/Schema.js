import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        desc: {
            type: String
        },
        SDU: {
            type: String,
        },
        price: {
            type: Number,
        },
        category_id: {
            id: {
                type: String
            },
            name: {
                type: String
            },
            desc: {
                type: String
            },
        },
        product_inventry: {
            id: {
                type: String
            },
            quantity: {
                type: Number
            },

        },
        discount_id: {
            id: {
                type: String
            },
            name: {
                type: String
            },
            desc: {
                type: String
            },
            discount_percentage: {
                type: Number
            },
            active: {
                type: Boolean,
                default: false
            }
        }

    }, { timestamps: true }
)

export default mongoose.Schema("products", productSchema)
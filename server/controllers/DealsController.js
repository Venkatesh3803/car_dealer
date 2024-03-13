import CarsModel from "../models/CarsModel.js";
import DealsModel from "../models/DealsModel.js";

export const createDeal = async (req, res) => {
    try {
        const newDeal = await DealsModel(req.body)
        await CarsModel.findByIdAndUpdate(req.body.carId, { isSold: true })
        await newDeal.save();
        res.status(201).json("Deal Done")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getSingleDeal = async (req, res) => {
    try {
        const deals = await DealsModel.findById(req.params.id);
        res.status(200).json(deals);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getDeals = async (req, res) => {
    try {
        const deals = await DealsModel.find();
        res.status(200).json(deals);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateDeal = async (req, res) => {
    try {
        const deals = await DealsModel.findById(req.params.id);
        if (deals) return res.status(401).json("user doesnot exist");

        const updated = await DealsModel.findByIdAndUpdate(deals._id, req.body, { new: true })
        res.status(200).json(updated);

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteDeals = async (req, res) => {
    try {
        const deals = await DealsModel.findById(req.params.id);
        if (cat) return res.status(401).json("user doesnot exist");

        await DealsModel.findByIdAndDelete(deals._id)
        res.status(200).json("Deleted Sucessfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}
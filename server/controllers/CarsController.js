import CarsModel from "../models/CarsModel.js";

export const createCar = async (req, res) => {
    try {
        const newCar = await CarsModel(req.body)
        const car = await newCar.save();
        res.status(201).json(car)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getSingleCar = async (req, res) => {
    try {
        const car = await CarsModel.findById(req.params.id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllCars = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.fuel && { fuel_type: q.fuel }),
        ...(q.brand && { brand: q.brand }),
        ...(q.model && { model: { $regex: q.model, $options: "i" } }),
        ...(q.name && { name: { $regex: q.name, $options: "i" } }),
        ...(q.year && { manif_year: q.year }),

    };
    try {
        const cars = await CarsModel.find(filters).sort({ createdAt: -1 });
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateCar = async (req, res) => {

    try {
        const car = await CarsModel.findById(req.params.id);
        if (!car) return res.status(401).json("car doesnot exist");

        await CarsModel.findByIdAndUpdate(car._id, req.body, { new: true })
        res.status(200).send("Car Updated Successfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteCar = async (req, res) => {
    try {
        const car = await CarsModel.findById(req.params.id);
        if (!car) return res.status(401).json("car doesnot exist");
        await CarsModel.findByIdAndDelete(car._id)
        res.status(200).json("Deleted Sucessfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}
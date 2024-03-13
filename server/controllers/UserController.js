import UserModel from "../models/UserModel.js";


export const getSingleUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        const { password, ...others } = user._doc
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getUsers = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateUsers = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) return res.status(401).json("user doesnot exist");

       await UserModel.findByIdAndUpdate(user._id, req.body, { new: true })
        res.status(200).json("Updated Sucessfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) return res.status(401).json("user doesnot exist");

        await UserModel.findByIdAndDelete(user._id)
        res.status(200).json("Deleted Sucessfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}
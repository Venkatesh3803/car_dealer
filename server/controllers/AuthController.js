import UserModel from "../models/UserModel.js"
import DealerModel from "../models/DealerModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const userRegister = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashPass;
    const newUser = await UserModel(req.body)

    try {
        const existUser = await UserModel.findOne({ email: newUser.email })
        if (existUser) return res.status(401).json("Email Already Taken")

        const user = await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const userLogin = async (req, res) => {

    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) return res.status(401).json("user doesnot exist")

        const validity = await bcrypt.compare(req.body.password, user.password);
        if (!validity) return res.status(401).json("Invalid Credientials")

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.JWT_TOKEN, { expiresIn: "24h" })

        const { password, ...others } = user._doc

        res.status(201).json({ ...others, token })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const dealerRegister = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashPass;
    const newUser = await DealerModel(req.body)

    try {
        const existUser = await DealerModel.findOne({ email: newUser.email })
        if (existUser) return res.status(401).json("Email Already Taken")

        const user = await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const dealerLogin = async (req, res) => {
    try {

        const user = await DealerModel.findOne({ email: req.body.email })
        if (!user) return res.status(401).json("user doesnot exist")

        const validity = await bcrypt.compare(req.body.password, user.password);
        if (!validity) return res.status(401).json("Invalid Credientials")

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, process.env.JWT_TOKEN, { expiresIn: "24h" })

        const { password, ...others } = user._doc

        res.status(201).json({ ...others, token })
    } catch (error) {
        res.status(500).json(error.message)
    }
}
import DealerModel from "../models/DealerModel.js";



export const getDealer = async (req, res) => {
    try {
        const dealer = await DealerModel.findById(req.params.id);
        res.status(200).json(dealer);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateDealer = async (req, res) => {

    try {
        const dealer = await DealerModel.findById(req.body._id);
        if (!dealer) return res.status(401).json("dealer doesnot exist");

        await DealerModel.findByIdAndUpdate(dealer._id, req.body, { new: true })
        res.status(200).json("dealer Updated Successfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteDealer = async (req, res) => {
    try {
        const dealer = await DealerModel.findById(req.params.id);
        if (!dealer) return res.status(401).json("Dealer doesnot exist");

        await DealerModel.findByIdAndDelete(dealer._id)
        res.status(200).json("Deleted Sucessfully");

    } catch (error) {
        res.status(500).json(error.message)
    }
}
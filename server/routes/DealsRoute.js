import express from "express"
import { createDeal, deleteDeals, getDeals, getSingleDeal, updateDeal } from "../controllers/DealsController.js";

const route = express.Router();

route.post("/create", createDeal)
route.get("/:id", getSingleDeal)
route.get("/all", getDeals)
route.patch("/:id", updateDeal)
route.delete("/:id", deleteDeals)

export default route
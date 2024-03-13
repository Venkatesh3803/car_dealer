import express from "express"
import { dealerLogin, dealerRegister } from "../controllers/AuthController.js";
import { getDealer, updateDealer } from "../controllers/DealerController.js";
const route = express.Router();

route.post("/register", dealerRegister)
route.post("/login", dealerLogin)
route.get("/single/:id", getDealer)
route.get("/:id", updateDealer)


export default route
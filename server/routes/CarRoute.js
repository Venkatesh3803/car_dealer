import express from "express"
import { createCar, deleteCar, getAllCars, getSingleCar, updateCar } from "../controllers/CarsController.js";
import { verifyJwt, verifyUser } from "../middleWare/Jwt.js";

const route = express.Router();

route.post("/create", verifyJwt, createCar)
route.get("/all", getAllCars)
route.get("/single/:id", getSingleCar)
route.patch("/edit/:id", verifyUser, updateCar)
route.delete("/:id",verifyUser, deleteCar)

export default route
import express from "express"
import { userLogin, userRegister } from "../controllers/AuthController.js";
const route = express.Router();

route.post("/register", userRegister)
route.post("/login", userLogin)


export default route
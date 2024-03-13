import express from "express"
import { deleteUser, getSingleUser, getUsers, updateUsers } from "../controllers/UserController.js";
import { verifyJwt } from "../middleWare/Jwt.js";
const route = express.Router();

route.get("/single/:id", getSingleUser)
route.get("/all", getUsers)
route.patch("/:id", verifyJwt, updateUsers)
route.delete("/:id", deleteUser)

export default route
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./routes/AuthRoute.js"
import UserRoute from "./routes/UserRoute.js"
import CarsRoute from "./routes/CarRoute.js"
import DealsRoute from "./routes/DealsRoute.js"
import DealerRoute from "./routes/DealerRoutes.js"

// configrations
const app = express()
const port = 8800;
dotenv.config()
app.use(cors());
app.use(express.json())

// mongoDB Connection 
const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL).then((res) => {
        console.log("connected to db")
    }).catch((err) => {
        throw err
    })
}


// homeRoute
app.get("/", async (req, res) => {
    res.send("Wellcome to xtreme Backend")
})


// App listens 
app.listen(port, () => {
    connectDb();
    console.log(`app is listing at ${port}`)
})

// routes
app.use("/api/auth", AuthRoute)
app.use("/api/user", UserRoute)
app.use("/api/car", CarsRoute)
app.use("/api/deal", DealsRoute)
app.use("/api/dealer", DealerRoute)

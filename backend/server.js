import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { config } from "dotenv";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors(
    {
        origin: [""],
        methods: ["POST","GET"],
        credentials: true
    }
))

config({
    path: "./.env",
  });

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
});

app.listen(port,()=>{
    console.log(`server started on port: ${port}`)
})

// mongodb+srv://bhavyachavda55:<db_password>@cluster0.w1qve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://bhavyachavda55:gMYzZG2L69zYBC9V@cluster0.w1qve.mongodb.net/?
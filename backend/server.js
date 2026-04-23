import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const API = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();
app.use(cors(
    {
        origin: API,
    }
));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB error :", err));

app.use("/api", contactRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

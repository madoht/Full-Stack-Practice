import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
    useNewUrlParser: true, 
    useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("📁 Connected to DB");
const handleError = (error) => console.log("🔥 Error Occured!!");

db.once("open", handleOpen);
db.on("error", handleError);
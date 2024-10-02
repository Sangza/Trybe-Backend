import mongoose from "mongoose";
import { config } from "dotenv";

config()

export const connection = () => {
    try {
        const db = mongoose.connect(process.env.MONGO_URL);
        return db;
    } catch (error) {
        console.log(`Error connecting to Database`, error);
    }
}
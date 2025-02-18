

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(connectionInstance.connection.host);
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to database");
        console.error(error);
    }
}

export default connectDB;
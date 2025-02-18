import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});


connectDB();







































// import express from "express";
// const app = express();
// (async () => {
//     try {
//         await moongoose.connect('${process.env.MONGODB_URI}/{DB_NAME}');
//         app.on("error", (error) => {
//             console.log("Error starting server");
//             console.error(error);
//         });
//         app.listen(process.env.PORT, () => {
//             console.log("App is listening on port ${process.env.PORT}");
//         });
//         console.log("Database connected");
//     }   catch (error) {
//         console.log("Error connecting to database");
//         console.error(error);
//     }
// })()
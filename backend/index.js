import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ItemRoute from "./routes/ItemRoute.js";

const app = express();

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/mern_db")
  .then((connection) => console.log("Successfully connect to MongoDB"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use(ItemRoute);

app.listen(5000, () => console.log("Server up and running..."));

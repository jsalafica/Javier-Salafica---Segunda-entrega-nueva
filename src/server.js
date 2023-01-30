import * as dotenv from "dotenv";
dotenv.config();

import express, { json, urlencoded } from "express";
import routes from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api", routes);

const PORT = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://coderhouse:coderhouse@cluster0.kzyoxh1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, (err) => {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("Listening on port ", PORT);
      }
    });
  });

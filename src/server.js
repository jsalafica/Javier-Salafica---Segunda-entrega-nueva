import express, { json, urlencoded } from "express";
import routes from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import mongoose from "mongoose";
import { config } from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api", routes);

app.use((req, res) => {
  res.json({
    error: -2,
    desc: `Route ${req.path} method ${req.method} doesn't exist`,
  });
});

mongoose.set("strictQuery", true);
mongoose.connect(config.dbUrl).then(() => {
  console.log("Database connected");
  app.listen(config.port, (err) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Listening on port ", config.port);
    }
  });
});

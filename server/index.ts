import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import path from "path";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

connectDB();
dotenv.config();
//initialize express
const app = express();
const PORT = process.env.PORT || 5000;
//middleware function that parses request with JSON payloads
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//parses data with querystring library
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", authRoutes);

//if in development use public index otherwise use build
if (process.env.DEV === "true") {
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
} else {
  app.use(express.static(path.join(__dirname, "../client/build/")));
  app.use(express.static("public"));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

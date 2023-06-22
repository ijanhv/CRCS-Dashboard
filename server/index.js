import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import societyRoutes from "./routes/society.route.js";
import Society from "./models/society.model.js";
import registeredSocietyRoutes from "./routes/registeredSociety.route.js";
import grevienceRoutes from "./routes/grevience.route.js";
// import { societies } from './data.js';
import { data } from './data.js';




/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/api/society", societyRoutes);
app.use("/api/registeredSociety", registeredSocietyRoutes);
app.use("/api/grevience", grevienceRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    console.log("MongoDB connected");
    // Society.insertMany(societies)
    // Society.insertMany(data)

  })
  .catch((error) => console.log(`${error} did not connect`));
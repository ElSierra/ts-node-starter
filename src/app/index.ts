import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import router from "./router";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

export default app;

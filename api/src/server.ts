import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import monitorsController from "./controllers/monitorsController.js";

dotenv.config();

const app = express();
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/monitors", monitorsController);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`API em http://localhost:${PORT}`));
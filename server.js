import express from "express";
import scraperRouter from "./api/scraper";

const app = express();

app.use(express.json());
app.use("/api", scraperRouter);

export default app;
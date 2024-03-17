import express from "express";
import connectToDb from "./config/db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

export default app;

import blogrouter from "./Routes/blogRoutes.js"
import authroutes from "./Routes/authRoutes.js"
import express, { json } from "express";
import morgan from "morgan";

const app = express()
app.use(morgan("dev"))
app.use(express.json())

app.use("/api/auth", authroutes)
app.use("/api/blog", blogrouter)

export default app;

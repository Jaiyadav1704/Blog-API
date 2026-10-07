import express from "express";
import { createblog, getAllBlogs, getMyBlogs, deleteBlog } from "../Controllers/blog.controller.js";
import { protect } from "../Middleware/auth.middleware.js";

const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs); // Public
blogrouter.get("/me", protect, getMyBlogs);
blogrouter.post("/create", protect, createblog);
blogrouter.delete("/:id", protect, deleteBlog);

export default blogrouter;
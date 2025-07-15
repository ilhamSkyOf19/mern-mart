import { Router } from "express";
import { NewsBlogsController } from "../controllers/news-blogs.controller";

const newsBlogsRoute = Router();

// GET /news-blogs
newsBlogsRoute.get("/", NewsBlogsController.getAll);


export default newsBlogsRoute;

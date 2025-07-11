import { Router } from "express";
import { ProductController } from "../controllers/products.controller";

const productsRoute = Router();

// GET /products
productsRoute.get("/", ProductController.getAll);


export default productsRoute;

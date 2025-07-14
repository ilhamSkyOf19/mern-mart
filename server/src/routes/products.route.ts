import { Router } from "express";
import { ProductController } from "../controllers/products.controller";

const productsRoute = Router();

// GET /products
productsRoute.get("/", ProductController.getAll);

// GET /products/category/:category
productsRoute.get("/category/:category", ProductController.getByCategory);

export default productsRoute;

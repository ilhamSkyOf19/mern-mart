import { Request, Response } from "express";
import { ProductService } from "../service/products.service";

export class ProductController {
    // get all
    static async getAll(req: Request, res: Response) {
        try {
            const products = await ProductService.getAll();
            res.status(200).json({
                message: "Success get products",
                data: products,
            });
        } catch (error) {
            console.error("Get all products failed:", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }

    // get by category 
    static async getByCategory(req: Request, res: Response) {
        try {
            const category = req.params.category;
            const products = await ProductService.getByCategory(category);

            // if res 200
            res.status(200).json({
                message: "Success get products",
                data: products
            });
        } catch (error) {
            console.error("Get all products failed:", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }
}

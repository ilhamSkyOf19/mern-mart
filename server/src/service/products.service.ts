import { prisma } from "../application/db";
import { ProductResponse, toResponseProduct } from "../models/products-model";

export class ProductService {
    // get
    static async getAll(): Promise<ProductResponse[]> {
        try {
            const result = await prisma.product.findMany();
            return result.map(toResponseProduct);
        } catch (error) {
            console.log(error);
            return []
        }
    }
}
import API from "../lib/api";
import type { ProductResponse } from "../model/product-model";

export class ProductService {
    // get
    static async getAll(): Promise<ProductResponse[]> {
        try {
            const result = await API.get("/products");
            return result.data;
        } catch (error) {
            console.log(error);
            return []
        }
    }

    // get by category 
    static async getByCategory(category: string): Promise<ProductResponse[]> {
        try {
            const result = await API.get(`/products/category/${category}`);
            return result.data;
        } catch (error) {
            console.log(error);
            return []
        }
    }
}
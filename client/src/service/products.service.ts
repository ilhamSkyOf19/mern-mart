import API from "../lib/api";

export class ProductService {
    // get
    static async getAll() {
        try {
            const result = await API.get("/products");
            return result.data
        } catch (error) {
            console.log(error);
            return []
        }
    }
}
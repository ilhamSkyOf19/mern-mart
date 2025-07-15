import API from "../lib/api";
import type { NewsBlogsResponse } from "../model/news-blogs-model";

export class NewsBlogsService {

    // get all 
    static async getAll(): Promise<NewsBlogsResponse[]> {
        try {
            const result = await API.get("/news-blogs");
            return result.data.data
        } catch (error) {
            console.log(error);
            return []
        }
    }
}
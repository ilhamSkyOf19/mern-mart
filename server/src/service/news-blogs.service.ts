import { prisma } from "../application/db";
import { NewsBlogsResponse, toResponseNewsBlogs } from "../models/news-blogs-model";

export class NewsBlogsService {
    // get
    static async getAll(): Promise<NewsBlogsResponse[]> {
        try {
            const result = await prisma.news.findMany();
            return result.map(toResponseNewsBlogs);
        } catch (error) {
            console.log(error);
            return []
        }
    }


}
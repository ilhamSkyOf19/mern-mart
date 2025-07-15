import { Request, Response } from "express";
import { NewsBlogsService } from "../service/news-blogs.service";

export class NewsBlogsController {
    // get all
    static async getAll(req: Request, res: Response) {
        try {
            const news = await NewsBlogsService.getAll();
            res.status(200).json({
                message: "Success get news blogs",
                data: news,
            });
        } catch (error) {
            console.error("Get all products failed:", error);
            res.status(500).json({
                message: "Internal Server Error",
            });
        }
    }


}

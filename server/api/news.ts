import type { NextApiRequest, NextApiResponse } from "next";
import { NewsBlogsResponse } from "../src/models/news-blogs-model";
import { NewsBlogsService } from "../src/service/news-blogs.service";



const handler = async (req: NextApiRequest, res: NextApiResponse<NewsBlogsResponse[] | { error: string }>) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://fresh-mart-02.vercel.app/'); // tidak boleh '*'
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const news = await NewsBlogsService.getAll();
        return res.status(200).json(news);
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default handler
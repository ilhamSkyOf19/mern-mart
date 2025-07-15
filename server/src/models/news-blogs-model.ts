import { News } from "@prisma/client";

export interface NewsBlogsRequest {
    category: string,
    title: string,
    img: string,
    date: string,
    commentCount: number,
    description: string
}

export interface NewsBlogsResponse extends NewsBlogsRequest {
    id: string; // karena MongoDB pakai ObjectId string
}

export const toResponseNewsBlogs = (news: News): NewsBlogsResponse => {
    return {
        id: news.id,
        category: news.category,
        title: news.title,
        img: news.img,
        date: news.date,
        commentCount: news.commentCount,
        description: news.description
    };
};


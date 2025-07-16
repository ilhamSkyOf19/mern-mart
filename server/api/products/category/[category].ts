import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductResponse } from '../../../src/models/products-model';
import { ProductService } from '../../../src/service/products.service';

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<ProductResponse[] | { error: string }>
) => {

    res.setHeader('Access-Control-Allow-Origin', 'https://fresh-mart-02.vercel.app/'); // tidak boleh '*'
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');




    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { category } = req.query;

    if (!category || typeof category !== 'string') {
        return res.status(400).json({ error: 'Category is required and must be a string' });
    }

    try {
        const products = await ProductService.getByCategory(category);
        return res.status(200).json(products);
    } catch (error) {
        console.error('Failed to fetch products by category:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default handler

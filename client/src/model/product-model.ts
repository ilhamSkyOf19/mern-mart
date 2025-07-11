
export interface ProductRequest {
    title: string;
    category: string;
    price: number;
    favorite: boolean;
    img: string;
    netWeight: number;
    stock: number;
}

export interface ProductResponse extends ProductRequest {
    id: string; // karena MongoDB pakai ObjectId string
}

export const toResponseProduct = (product: ProductResponse): ProductResponse => {
    return {
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        favorite: product.favorite,
        img: product.img,
        netWeight: product.netWeight,
        stock: product.stock
    };
};


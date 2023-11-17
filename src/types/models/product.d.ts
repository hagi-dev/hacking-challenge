export interface ProductList {
    title: string;
    productId: number;
}

export interface SkuList {
    title: string;
    skuId: number;
    price: number;
    urlImage: string;
    description: string;
    productId: number;
}
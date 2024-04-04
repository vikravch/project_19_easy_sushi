export type TProductCard = {
    id: string;
    category: string;
    img: string;
    name: string;
    weight: number;
    quantity: number;
    price: number;
    discountPrice?: number
}
export type TProductCard = {
    id: string;
    category: string;
    category_hebrew: string;
    img: string;
    name: string;
    hebrew_name: string;
    weight: number;
    quantity: number;
    price: number;
    discountPrice?: number
}
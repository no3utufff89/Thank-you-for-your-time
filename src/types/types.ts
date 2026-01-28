export interface Card {
    id: string;
    period: string;
    price: number;
    discount?: number;
    full_price: number;
    is_best: boolean;
    text: string;
    cardIndex?: number;


}
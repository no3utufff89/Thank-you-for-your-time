import {CardItem} from "@/components/cards/card";
import {Card} from "@/types/types";
import {cn} from "@/lib/utils";

interface CardsListProps {
    cards: Card[];
    className?: string;
    handleCardClick?: (cardIndex: number) => void;
    selectedCardId?: number | null;
    isDiscountActive?: boolean;
}

export function CardsList({cards, className, handleCardClick, selectedCardId, isDiscountActive}: CardsListProps) {
    if (!cards || cards.length === 0) {
        return <p className="text-white">Нет доступных тарифов или данные не загрузились</p>;
    }

    return (
        <ul className={cn("", className)}>
            {cards.map((item) => (
                <CardItem key={item.text || item.id || item.period} item={item} handleCardClick={handleCardClick}
                          isSelected={item.cardIndex === selectedCardId} isDiscountActive={isDiscountActive}/>
            ))}
        </ul>
    )
}
'use client'
import {getCards} from "@/lib/api/cards";
import {Card} from "@/types/types";
import Header from "@/components/layout/header";
import Container from "@/components/layout/container";
import Content from "@/components/layout/content";
import PageTitle from "@/components/ui/page-title";
import {useEffect, useState} from "react";
import Garantie from "@/components/layout/garantie";


export default function Home() {
    const [cards, setCards] = useState<Card[]>([])
    const [timerEnded, setTimerEnded] = useState(false);

    const loadCards = async () => {
        const cardsData: Card[] = await getCards();
        const cardsWithDiscount = cardsData.map((card, index) => {
            if (card.full_price && card.price && card.full_price > card.price) {
                const exactDiscount = ((card.full_price - card.price) / card.full_price) * 100;
                const roundedDiscount = Math.ceil(exactDiscount / 10) * 10;
                const discount = roundedDiscount > 0 ? roundedDiscount : undefined;
                return {
                    ...card,
                    discount,
                    cardIndex: index
                };
            }
            return {
                ...card,
                cardIndex: index
            };
        });

        const sortedCards = [...cardsWithDiscount].sort((a, b) => {
            if (a.is_best && !b.is_best) return -1;
            if (!a.is_best && b.is_best) return 1;
            return 0;
        });

        setCards(sortedCards);
    };
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadCards();
    }, []);

    const handleTimerEnd = () => {
        setTimerEnded(true);
    };
    return (
        <>
            <Header onTimerEnd={handleTimerEnd}/>
            <Container className={"pt-5 pb-5 px-4 xs:pb-7.5 md:pb-37.5 md:pt-12.5"}>
                <PageTitle/>
                <Content cards={cards} isDiscountActive={!timerEnded}/>
                <Garantie/>
            </Container>
        </>

    );
}

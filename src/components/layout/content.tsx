'use client'
import {CardsList} from "@/components/cards/cards-list";
import {Card} from "@/types/types";
import Attention from "@/components/layout/attention";
import Agreement from "@/components/layout/agreement";
import Button from "@/components/ui/button";
import PolicyText from "@/components/layout/policy-text";
import ContentImage from "@/components/layout/content-image";
import {useEffect, useState} from "react";


interface ContentProps {
    cards: Card[];
    isDiscountActive?: boolean;
}

export default function Content({cards, isDiscountActive}: ContentProps) {
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
    const [isAgreementChecked, setIsAgreementChecked] = useState(false);
    const [hasAgreementError, setHasAgreementError] = useState(false);

    function getPriceForSelectedCard() {
        const selectedCard = cards.find((i) => i.cardIndex === selectedCardId);
        if (!selectedCard) return null;

        if (isDiscountActive && selectedCard.price) {
            return selectedCard.price;
        } else {
            return selectedCard.full_price;
        }
    }

    useEffect(() => {
        if (cards && cards.length > 0) {
            const bestCard = cards.find(card => card.is_best);
            if (bestCard && bestCard.cardIndex !== undefined) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setSelectedCardId(bestCard.cardIndex);
            }
        }
    }, [cards]);

    const handleCardClick = (cardIndex: number) => {
        setSelectedCardId(cardIndex);
    }

    const handleAgreementChange = (checked: boolean) => {
        setIsAgreementChecked(checked);

        if (checked && hasAgreementError) {
            setHasAgreementError(false);
        }
    }

    const handleBuyClick = () => {
        if (!isAgreementChecked) {
            setHasAgreementError(true);

            const agreementElement = document.querySelector('[name="agree"]');
            if (agreementElement) {
                agreementElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
            return;
        }

        if (selectedCardId !== null) {
            const price = getPriceForSelectedCard();
            alert(`Покупка тарифа успешно оформлена! (Карточка с ценой ${price}`);
        } else {
            alert("Пожалуйста, выберите тариф перед покупкой");
        }
    }

    return (
        <div
            className={"flex flex-col mb-5.5 xs:mb-6 2md:mb-16.5 2md:grid grid-cols-[380px_748px] justify-between items-center"}>
            <ContentImage/>

            <div className={"flex flex-col 2md:grid grid-cols-3"}>
                <CardsList
                    cards={cards}
                    handleCardClick={handleCardClick}
                    selectedCardId={selectedCardId}
                    isDiscountActive={isDiscountActive}
                    className={"flex flex-col gap-y-1.5 mb-2.5 xs:gap-y-2 2md:grid grid-cols-3  row-start-1 row-end-2 col-start-1 col-end-4 2md:mb-5 2md:gap-3.5"}
                />
                <Attention classNames={"mb-[16px] 2md:col-start-1 col-end-3 row-start-2 row-end-3 2md:mb-[30px]"}/>

                <Agreement
                    classNames={"mb-[16px] 2md:col-start-1 col-end-4 row-start-3 row-end-4 2md:mb-[16px]"}
                    isChecked={isAgreementChecked}
                    onCheckChange={handleAgreementChange}
                    hasError={hasAgreementError}
                />

                <Button
                    btnText={"Купить"}
                    onClick={handleBuyClick}
                    classNames={"mb-[10px] 2md:col-start-1 col-end-3 row-start-4 row-end-5 max-w-[352px] 2md:mb-[14px]"}
                />
                <PolicyText classNames={"2md:col-start-1 col-end-4 row-start-5 row-end-6"}/>
            </div>
        </div>
    );
}
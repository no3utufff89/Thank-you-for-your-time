'use client'
import {Card} from "@/types/types";
import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";

type ActionPriceBlockProps = Pick<Card, 'price' | 'full_price'> & {
    className?: string;
    isDiscountActive?: boolean;
}

export default function ActionPriceBlock({
                                             price,
                                             full_price,
                                             className,
                                             isDiscountActive = true
                                         }: ActionPriceBlockProps) {
    const [showDiscountPrice, setShowDiscountPrice] = useState(isDiscountActive);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!isDiscountActive && showDiscountPrice) {
            // Запускаем анимацию смены цены
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setShowDiscountPrice(false);
                setIsAnimating(false);
            }, 500);

            return () => clearTimeout(timer);
        }

        if (isDiscountActive && !showDiscountPrice) {
            setShowDiscountPrice(true);
        }
    }, [isDiscountActive, showDiscountPrice]);

    return (
        <div className={cn("flex flex-col items-end max-w-max relative", className)}>
            {/* Цена со скидкой */}
            {showDiscountPrice ? (
                <div className={cn(
                    "flex flex-col items-end transition-all duration-300",
                    isAnimating && "opacity-0 scale-95"
                )}>
                    <span className={cn(
                        "text-new-yellow-accent font-semibold text-3xl leading-[100%] xs:text-[34px] 2md:text-[50px]"
                    )}>
                        {price} ₽
                    </span>
                    {full_price && (
                        <span className={cn(
                            "font-normal text-[#919191] text-sm leading-[120%] line-through xs:text-[16px] 2md:text-[24px] mt-1"
                        )}>
                            {full_price} ₽
                        </span>
                    )}
                </div>
            ) : (
                // Цена без скидки
                <div className={cn(
                    "flex flex-col items-end transition-all duration-300",
                    isAnimating && "opacity-0 scale-95",
                    !isAnimating && "opacity-100 scale-100"
                )}>
                    <span className={cn(
                        "text-white font-semibold text-3xl leading-[100%] xs:text-[34px] 2md:text-[50px]"
                    )}>
                        {full_price} ₽
                    </span>
                </div>
            )}
        </div>
    );
}
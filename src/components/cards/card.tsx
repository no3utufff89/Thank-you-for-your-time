'use client'
import {Card} from "@/types/types";
import ActionPriceBlock from "@/components/ui/price-block";
import {BestLabel} from "@/components/ui/best-label";
import {DiscLabel} from "@/components/ui/disc-label";
import {cn} from "@/lib/utils";

interface CardItemProps {
    item: Card;
    isSelected?: boolean;
    handleCardClick?: (cardIndex: number) => void;
    isDiscountActive?: boolean;
}

export function CardItem({
                             item,
                             isSelected = false,
                             handleCardClick,
                             isDiscountActive = true
                         }: CardItemProps) {
    const handleClick = () => {
        if (handleCardClick && item.cardIndex !== undefined) {
            handleCardClick(item.cardIndex);
        }
    }

    const baseStyle = "p-5 rounded-[20px] border-2 bg-[#313637] relative grid grid-cols-[1.5fr_1fr] items-center  gap-x-7.5 xs:gap-x-[50px] 2md:flex 2md:flex-col 2md:pl-[18px] 2md:pr-[18px] 2md:pt-[70px] 2md:justify-between 2md:h-[335px] 2md:cursor-pointer transition-all duration-300";
    const firstCardStyle = "p-5 rounded-[20px] border-2 bg-[#313637] relative grid grid-cols-[1.5fr_1fr] items-center  gap-x-7.5 xs:gap-x-[50px] 2md:flex 2md:flex-col 2md:pl-[36px] 2md:pr-[36px] 2md:pt-[30px] 2md:justify-between 2md:col-span-3 2md:pb-[30px] 2md:pl-[122px] 2md:pr-[80px] 2md:flex-row 2md:cursor-pointer transition-all duration-300 2md:min-h-[190px] max-h-[190px] h-full";

    const borderStyle = isSelected
        ? "border-new-yellow-accent"
        : "border-[#484d4e] hover:border-[#5c6263]";

    const className = item.is_best
        ? cn(firstCardStyle, borderStyle)
        : cn(baseStyle, borderStyle);

    return (
        <li onClick={handleClick} className={cn("", className)}>
            {isDiscountActive && item.discount && (
                <>
                    {item.is_best ? <BestLabel disc={item.discount}/> : <DiscLabel disc={item.discount}/>}
                </>
            )}

            <div className={"shrink-0 max-w-max grow w-full "}>
                <p className={"font-medium text-white leading-[120%] mb-3 xs:text-lg xs:mb-4 2md:text-[26px] 2md:text-center 2md:mb-7.5"}>
                    {item.period}
                </p>
                <ActionPriceBlock
                    full_price={item.full_price}
                    price={item.price}
                    isDiscountActive={isDiscountActive}
                />
            </div>

            {item.period === "Навсегда" && (
                <>
                    <p className="hidden text-white leading-[130%] text-sm min-[401px]:inline  2md:text-[16px]">
                        {item.text}
                    </p>
                    <p className="min-[401px]:hidden inline text-white leading-[130%] text-sm">
                        Всегда <br/> быть в форме
                    </p>
                </>
            )}

            {item.period !== "Навсегда" && (
                <p className={"text-white leading-[130%] text-sm 2md:text-[16px]"}>{item.text}</p>
            )}
        </li>
    )
}
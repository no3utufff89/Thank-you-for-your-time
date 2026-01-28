import Image from "next/image";
import {cn} from "@/lib/utils";

interface AttentionProps {
    classNames?: string
}

export default function Attention({classNames}: AttentionProps) {
    return (
        <div
            className={cn(classNames, "py-3.5 pl-3 pr-5 rounded-[20px] bg-[#313637] flex gap-x-1.5 2md:pt-4.5 2md:pb-4.5")}>
            <Image src={'/alert.svg'} alt={"icon"} width={22} height={24}
                   className={"h-6 2md:w-6 2md:h-6.5"}/>
            <p className={" text-white text-[12px] leading-[130%] font-normal 2md:text-[16px]"}>
                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
            </p>
        </div>
    )
}
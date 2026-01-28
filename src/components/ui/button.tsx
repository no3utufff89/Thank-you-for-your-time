'use client'
import {cn} from "@/lib/utils";

interface ButtonProps {
    btnText: string;
    classNames?: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const {btnText, classNames, onClick} = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            type={'button'}
            onClick={handleClick}
            className={cn(classNames, "cursor-pointer rounded-[20px] bg-new-yellow-accent text-[#191e1f] leading-[130%] font-bold text-lg w-full h-13.75 xs:h-15.75 hover:opacity-90 transition-opacity duration-200 animate-pulse")}
        >
            {btnText}
        </button>
    )
}
'use client'

import Timer from "@/components/timer/timer";

interface HeaderProps {
    onTimerEnd?: () => void;
}

export default function Header({onTimerEnd}: HeaderProps) {
    return (
        <header className={"bg-new-dark-green py-2 sticky top-0 z-50"}>
            <div
                className="container mx-auto px-4 flex flex-col justify-center sm:justify-between items-center gap-2">
                <p className={`
                    font-semibold
                    text-[14px]
                    font-sans
                    leading-[130%]
                    text-white
                    text-center
                    xs:text-[18px]
                    2md:text-[24px]
                    sm:text-left
                `}>
                    Успейте открыть пробную неделю
                </p>

                <Timer
                    initialTime={120}
                    showInHeader={true}
                    onTimerEnd={onTimerEnd}
                    className=""
                />
            </div>
        </header>
    );
}
interface BestLabelProps {
    disc?: number;
}

export function BestLabel({disc}: BestLabelProps) {
    return (
        <div className={`
            gap-x-2
            flex
            items-end
            absolute
            top-[-2px]
            right-3.5
            xs:gap-x-3.5
            2md:w-full
            2md:pl-[50px]
            2md:pr-[20px]
            2md:justify-between
            2md:right-5
            2md:left-0
        `}>
            <div className={`    
            bg-new-light-danger
            py-[3px]
            px-[6px]
            rounded-br-[6px]
            rounded-bl-[6px]
                leading-[130%]
                text-[13px]
                text-white
                xs:text-[16px]
                2md:text-[22px]
            `}>
                <span>{disc} %</span>
            </div>
            <p className={`
                leading-[130%]
                tracking-[0.03em]
                font-medium
                text-[13px]
                text-new-yellow-accent
                font-sans
                xs:text-[16px]
                2md:text-[22px]
            `}>хит!</p>
        </div>
    );
}
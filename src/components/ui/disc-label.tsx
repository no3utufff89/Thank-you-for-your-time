interface DiscLabelProps {
    disc?: number;
}

export function DiscLabel({disc}: DiscLabelProps) {
    return (
        <div className={`
            gap-x-2
            flex
            items-end
            absolute
            top-[-2px]
            right-[28px]
            2md:top-[1px]
            2md:left-[51px]
            
            
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

        </div>
    );
}
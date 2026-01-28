'use client'
import Link from "next/dist/client/link";
import {cn} from "@/lib/utils";
import React, {useRef} from "react";


interface AgreementProps {
    classNames?: string;
    isChecked?: boolean;
    onCheckChange?: (checked: boolean) => void;
    hasError?: boolean;
}

export default function Agreement({classNames, isChecked = false, onCheckChange, hasError = false}: AgreementProps) {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        if (checkboxRef.current) {
            checkboxRef.current.click();
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onCheckChange) {
            onCheckChange(e.target.checked);
        }
    };

    return (
        <div className={cn(classNames, "flex gap-x-2.5")}>
            <div className="relative">
                <input
                    ref={checkboxRef}
                    name={'agree'}
                    type="checkbox"
                    className={"sr-only"}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div
                    onClick={handleDivClick}
                    className={cn(
                        "rounded size-7.5 border bg-transparent flex items-center justify-center 2md:size-8 transition-colors duration-200 cursor-pointer",
                        hasError ? "border-red-500" : "border-[#606566]",
                        isChecked ? "bg-transparent border-[#606566]" : ""
                    )}
                >
                    {isChecked && (
                        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.4727 0.570312C19.5464 0.491786 19.6674 0.477847 19.7568 0.533203L19.793 0.561523C19.8834 0.647109 19.8879 0.791255 19.8018 0.882812L7.43848 13.9736C7.39461 14.02 7.33545 14.0458 7.27344 14.0459H7.27148C7.22257 14.0452 7.1766 14.0286 7.13867 14.001L7.10352 13.9697L0.558594 6.69727C0.474798 6.60415 0.482343 6.46058 0.575195 6.37695C0.667705 6.29371 0.811212 6.29874 0.898438 6.39453L6.91406 13.0791L7.27734 13.4824L7.64941 13.0879L19.4717 0.571289L19.4727 0.570312Z"
                                fill="#424748" stroke="#FDB056"/>
                        </svg>
                    )}
                </div>
            </div>
            <div className="cursor-pointer" onClick={handleDivClick}>
                <p className={cn(
                    "font-normal text-[#cdcdcd] text-[12px] leading-[120%] 2md:text-[16px] 2md:max-w-[95%]",
                    hasError && "text-red-400"
                )}>
                    Я согласен с {''}
                    <Link className={"underline hover:text-white"} href={"#"}>офертой рекуррентных
                        платежей</Link> и {''}
                    <Link className={"underline hover:text-white"} href={"#"}>Политикой конфиденциальности</Link>
                </p>
            </div>
        </div>
    )
}
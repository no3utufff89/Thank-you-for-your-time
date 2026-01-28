import React, {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface ContainerProps {
    children: ReactNode | React.JSX.Element;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            {children}
        </div>
    );
}
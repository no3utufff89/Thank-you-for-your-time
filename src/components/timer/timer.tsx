'use client'
import {useEffect, useState} from 'react';
import {cn} from '@/lib/utils';
import StarIcon from '@/components/ui/star-icon';

interface TimerProps {
    initialTime?: number; // в секундах
    onTimerEnd?: () => void;
    showInHeader?: boolean;
    className?: string;
}

export default function Timer({
                                  initialTime = 120,
                                  onTimerEnd,
                                  showInHeader = false,
                                  className
                              }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isWarning, setIsWarning] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [timerEnded, setTimerEnded] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0 && !timerEnded) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTimerEnded(true);
            onTimerEnd?.();
            return;
        }

        if (timeLeft <= 30 && !isWarning) {
            setIsWarning(true);
        }

        if (timeLeft <= 30 && !isBlinking && !timerEnded) {
            setIsBlinking(true);
        }

        if (timerEnded && isBlinking) {
            setIsBlinking(false);
        }

        const timerId = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, isWarning, isBlinking, timerEnded, onTimerEnd]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
    };

    if (showInHeader) {
        return (
            <div className={cn(
                "flex gap-x-2 items-center font-bold font-sans leading-[110%] uppercase transition-all duration-300",
                timerEnded
                    ? "text-white"
                    : isWarning
                        ? "text-new-danger"
                        : "text-new-light-yellow",
                isBlinking && !timerEnded && "animate-pulse",
                "text-[28px] xs:text-[32px] 2md:text-[40px]",
                className
            )}>
                <StarIcon
                    size="sm"
                    color={timerEnded ? "white" : isWarning ? "danger" : "yellow"}
                    className=""
                />

                <span className="tracking-wider">
                    {formatTime(timeLeft)}
                </span>

                <StarIcon
                    size="sm"
                    color={timerEnded ? "white" : isWarning ? "danger" : "yellow"}
                    className=""
                />
            </div>
        );
    }
}
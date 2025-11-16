'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  expiresAt: Date | string;
  onExpire?: () => void;
}

export function CountdownTimer({ expiresAt, onExpire }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    total: number;
  }>({ hours: 0, minutes: 0, seconds: 0, total: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(expiresAt).getTime();
      const difference = target - now;

      if (difference <= 0) {
        if (onExpire) onExpire();
        return { hours: 0, minutes: 0, seconds: 0, total: 0 };
      }

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiresAt, onExpire]);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  if (timeLeft.total <= 0) {
    return (
      <div className="text-muted-foreground font-mono">
        Offer expired
      </div>
    );
  }

  return (
    <div className="font-mono tabular-nums">
      <span className="font-semibold">
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </span>
      <span className="text-muted-foreground ml-2">remaining</span>
    </div>
  );
}

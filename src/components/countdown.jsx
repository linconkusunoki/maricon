"use client";

import { useState, useEffect } from "react";

export function CountdownTimer({ futureDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(futureDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { difference, ...timeLeft };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { difference, days, hours, minutes } = timeLeft;

  return (
    <div className="mt-8 text-green">
      {difference > 0 ? (
        <div className="flex justify-center font-tertiary">
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <CountdownNumber value={days} />
            </div>
            <span className="mt-1 text-xs">DIAS</span>
          </div>
          <div className="px-2 text-3xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <CountdownNumber value={hours} />
            </div>
            <span className="mt-1 text-xs">HORAS</span>
          </div>
          <div className="px-2 text-3xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <div className="flex gap-1">
              <CountdownNumber value={minutes} />
            </div>
            <span className="mt-1 text-xs">MINUTOS</span>
          </div>
        </div>
      ) : (
        <div>Já acabou o casamento!</div>
      )}
    </div>
  );
}

function CountdownNumber({ value }) {
  return String(value)
    .split("")
    .map((number, index) => (
      <div key={index} className="px-2 text-3xl font-bold bg-beige">
        {number}
      </div>
    ));
}

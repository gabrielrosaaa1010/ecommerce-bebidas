'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ minutes: 30, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Verifica se já existe um timer salvo
    const savedEndTime = localStorage.getItem('promoEndTime');
    let endTime: number;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
    } else {
      // Cria novo timer de 30 minutos
      endTime = Date.now() + 30 * 60 * 1000;
      localStorage.setItem('promoEndTime', endTime.toString());
    }

    const timer = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FF9900] text-black py-3 px-4 text-center font-bold">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="text-sm sm:text-base">
          ⏰ OFERTA EXPIRA EM:
        </span>
        <div className="flex items-center gap-2 text-2xl sm:text-3xl font-mono">
          <span className="bg-black text-[#FF9900] px-3 py-1 rounded">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-black text-[#FF9900] px-3 py-1 rounded">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
        {isExpired && (
          <span className="text-red-600 font-bold ml-2">PROMOÇÃO ENCERRADA!</span>
        )}
      </div>
    </div>
  );
}

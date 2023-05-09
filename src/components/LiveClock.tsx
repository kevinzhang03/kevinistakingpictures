import React from 'react';
import { useState, useEffect } from 'react';

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const milliseconds = currentTime.getMilliseconds().toString().padStart(3, '0');

  return <span className="font-display">{`${hours}:${minutes}:${seconds}:${milliseconds}`}</span>;
};

export default LiveClock;


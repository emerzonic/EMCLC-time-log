import React, { useEffect, useState } from 'react';
import { getCurrentTime } from './dateUtil';

export function DigitalClock() {
  const [clock, setClock] = useState('');

  const startTime = () => {
    setClock(getCurrentTime());
    setTimeout(startTime, 10000);
  };

  useEffect(() => {
    startTime();
  }, []);


  return (
    <div className="display-3">{clock}</div>
  );
}

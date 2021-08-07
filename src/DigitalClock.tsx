import React, { useEffect, useState } from 'react';
import { getCurrentTime } from './dateUtil';

export function DigitalClock() {
  const [clock, setClock] = useState('');

  const startTime = () => {
    setClock(getCurrentTime());
    setTimeout(startTime, 15000);
  };

  useEffect(() => {
    startTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="display-4">{clock}</div>
  );
}

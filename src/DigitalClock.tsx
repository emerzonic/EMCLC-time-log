import React, { useEffect, useState } from 'react';

export function DigitalClock() {
  const [clock, setClock] = useState('');

  const startTime = () => {
    setClock(new Date().toLocaleTimeString('en-US'));
    setTimeout(startTime, 1000);
  };

  useEffect(() => {
    startTime();
  }, []);


  return (
    <div className="display-3">{clock}</div>
  );
}

import { useEffect, useState } from 'react';
import useStore from '../store/store';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);  
  const endTime = useStore((state) => state.endTime);
  const timeToCompleteTest = 1200000; // 20 минут

  if (!sessionStorage.getItem('deadline')) {
    sessionStorage.setItem('deadline', JSON.stringify(Date.now() + timeToCompleteTest)); 
  }
  
  const deadline = Number(sessionStorage.getItem('deadline'));

  const getTime = () => {
    const time = deadline - Date.now();
    if (Date.now() >= deadline) {
      endTime();
    }
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="ml-4 pl-2 pr-2 border-4" role="timer">
          <span id="minute">{minutes < 10 ? "0" + minutes : minutes}:</span>
          <span id="second">{seconds < 10 ? "0" + seconds : seconds}</span>
    </div>
  );
};
export default Timer;
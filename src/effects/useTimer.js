import { useEffect } from 'react';

const useTimer = (func, interval) => {
  useEffect(() => {
    func();

    const timer = setInterval(
      func,
      interval,
    );

    return () => {
      clearInterval(timer);
    };
  }, []);
};

export default useTimer;

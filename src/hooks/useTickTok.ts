import { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';

interface UseTickTokProps {
  callback?: () => void;
}

export const useTickTok = (props?: UseTickTokProps) => {
  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      const nextNow = dayjs();

      props?.callback?.();

      setNow(nextNow);
    }, 1000);

    return () => clearInterval(interval);
  }, [props]);

  return useMemo(
    () => ({
      raw: now,
      // time
      hour: now.format('HH'),
      minute: now.format('mm'),
      second: now.format('ss'),
      s: now.format('s'),
      // date
      day: now.format('D'),
      month: now.format('M'),
      year: now.format('YYYY'),
      weekDay: now.format('d'),
    }),
    [now],
  );
};

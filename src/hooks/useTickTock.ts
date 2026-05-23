import { useState, useEffect, useMemo, useRef } from 'react';
import dayjs from 'dayjs';

interface UseTickTokProps {
  callback?: () => void;
  intervalMs?: number;
}

const INTERVAL_DEFAULT = 1000;

export const useTickTock = (props?: UseTickTokProps) => {
  const { callback, intervalMs = INTERVAL_DEFAULT } = props ?? {};
  const callbackRef = useRef(callback);

  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState !== 'visible') return;

      const nextNow = dayjs();

      callbackRef.current?.();

      setNow(nextNow);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return useMemo(
    () => ({
      now,
      parsed: {
        time: {
          hour: now.format('HH'),
          minute: now.format('mm'),
          second: now.format('ss'),
          s: now.format('s'),
        },
        date: {
          day: now.format('D'),
          month: now.format('M'),
          year: now.format('YYYY'),
          weekDay: now.format('d'),
        },
      },
    }),
    [now],
  );
};

import { useMemo } from 'react';
import { isNumberOdd } from '@/utils';
import type { PanelDatetimeWidgetType } from '@/types';
import { useTickTock } from '@/hooks';
import { AnalogClock, NumericClock } from '../../../../clock';

interface ClockSnippetProps {
  type: PanelDatetimeWidgetType;
  seconds?: boolean;
  secondsBlink: boolean;
}

const ClockSnippet = ({ type, seconds, secondsBlink }: ClockSnippetProps) => {
  const { parsed } = useTickTock();

  const secondVisible = useMemo(() => {
    if (!secondsBlink || seconds) return true;

    return !!isNumberOdd(Number(parsed.time.s));
  }, [parsed.time.s, seconds, secondsBlink]);

  switch (type) {
    case 'numeric':
      return (
        <NumericClock
          time={{
            hours: parsed.time.hour,
            minutes: parsed.time.minute,
            seconds: parsed.time.second,
          }}
          seconds={seconds}
          secondVisible={secondVisible}
        />
      );

    case 'analog':
      return (
        <AnalogClock
          time={{
            hours: Number(parsed.time.hour),
            minutes: Number(parsed.time.minute),
            seconds: Number(parsed.time.second),
          }}
          seconds={seconds}
        />
      );
  }
};

export default ClockSnippet;

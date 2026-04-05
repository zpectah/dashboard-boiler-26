import dayjs from 'dayjs';
import { Stack } from '@mui/material';
import type { WidgetDateTimeHolidaysOrigin } from '../../../../types';
import { useHolidays } from '../../../../hooks';

interface HolidaysProps {
  now: dayjs.Dayjs;
  holidaysOrigin: WidgetDateTimeHolidaysOrigin;
  showTomorrowHolidays: boolean;
}

const Holidays = ({
  now,
  holidaysOrigin,
  showTomorrowHolidays,
}: HolidaysProps) => {
  const { today, tomorrow } = useHolidays(now, holidaysOrigin);

  return (
    <Stack>
      {today.map((item) => (
        <span key={item}>{item}</span>
      ))}
      <br />
      {showTomorrowHolidays &&
        tomorrow &&
        tomorrow.map((item) => <span key={item}>{item}</span>)}
    </Stack>
  );
};

export default Holidays;

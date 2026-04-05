import dayjs from 'dayjs';
import { holidays } from '../data';
import type { HolidaysData, WidgetDateTimeHolidaysOrigin } from '../types';
import { getSafeArrayFromString } from '../utils';

export const useHolidays = (
  now: dayjs.Dayjs,
  holidaysOrigin: WidgetDateTimeHolidaysOrigin,
) => {
  const todayMonth = now.format('M');
  const todayDay = now.format('D');
  const tomorrowObject = now.add(1, 'day');
  const tomorrowMonth = tomorrowObject.format('M');
  const tomorrowDay = tomorrowObject.format('D');
  const holidaysObject = holidays[holidaysOrigin].holidays as HolidaysData;
  const todayHolidayMonth = holidaysObject[todayMonth];
  const todayHoliday = todayHolidayMonth[todayDay];
  const tomorrowHolidayMonth = holidaysObject[tomorrowMonth];
  const tomorrowHoliday = tomorrowHolidayMonth[tomorrowDay];

  return {
    today: getSafeArrayFromString(todayHoliday),
    tomorrow: getSafeArrayFromString(tomorrowHoliday),
  };
};

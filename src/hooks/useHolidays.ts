import dayjs from 'dayjs';
import type {
  PanelDatetimeWidgetHolidaysOriginType,
  WidgetHolidaysData,
} from '@/types';
import { getSafeArrayFromString } from '@/utils';
import { holidays } from '../data';

export const useHolidays = (
  now: dayjs.Dayjs,
  holidaysOrigin: PanelDatetimeWidgetHolidaysOriginType,
) => {
  const todayMonth = now.format('M');
  const todayDay = now.format('D');
  const tomorrowObject = now.add(1, 'day');
  const tomorrowMonth = tomorrowObject.format('M');
  const tomorrowDay = tomorrowObject.format('D');
  const holidaysObject = holidays[holidaysOrigin]
    .holidays as WidgetHolidaysData;
  const todayHolidayMonth = holidaysObject[todayMonth];
  const todayHoliday = todayHolidayMonth[todayDay];
  const tomorrowHolidayMonth = holidaysObject[tomorrowMonth];
  const tomorrowHoliday = tomorrowHolidayMonth[tomorrowDay];

  return {
    today: getSafeArrayFromString(todayHoliday),
    tomorrow: getSafeArrayFromString(tomorrowHoliday),
  };
};

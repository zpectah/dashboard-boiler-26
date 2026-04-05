import { useMemo } from 'react';
import { Grid, Paper, Stack } from '@mui/material';
import { isNumberOdd } from '../../../../utils';
import { useTickTok } from '../../../../hooks';
import { dateTimeWidgetTimeKeys } from '../../../../enums';
import { useDashboardContext } from '../../Dashboard.context';
import type { DateTimeWidgetProps } from '../types';
import AnalogClock from './AnalogClock';
import NumericClock from './NumericClock';
import Holidays from './Holidays';
import Date from './Date';

const DateTimeWidget = ({ active, gridProps }: DateTimeWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const now = useTickTok();

  const current = currentPanel.widgets.dateTime;

  const secondVisible = useMemo(() => {
    if (!current.separatorBlink || current.showSeconds) return true;

    return !!isNumberOdd(Number(now.s));
  }, [current, now]);

  const renderClock = useMemo(() => {
    if (current.timeType === dateTimeWidgetTimeKeys.numeric) {
      return (
        <NumericClock
          showSeconds={current.showSeconds}
          secondVisible={secondVisible}
        />
      );
    }

    return <AnalogClock showSeconds={current.showSeconds} />;
  }, [current, secondVisible]);

  const renderDate = useMemo(() => {
    if (!current.showDate) return null;

    return <Date year={now.year} month={now.month} day={now.day} />;
  }, [now, current]);

  const renderHolidays = useMemo(() => {
    if (!current.showHolidays) return null;

    return (
      <Holidays
        now={now.raw}
        holidaysOrigin={current.holidaysOrigin}
        showTomorrowHolidays={current.showTomorrowHolidays}
      />
    );
  }, [now, current]);

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{ py: 2 }}
        >
          {renderClock}
          {renderDate}
          {renderHolidays}
        </Stack>
      </Paper>
    </Grid>
  );
};

export default DateTimeWidget;

import { useMemo } from 'react';
import { Grid, Paper, Stack, Typography } from '@mui/material';
import { isNumberOdd } from '../../../../utils';
import { useTickTok } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { DateTimeWidgetProps } from '../types';
import AnalogClock from './AnalogClock.tsx';
import NumericClock from './NumericClock.tsx';

const DateTimeWidget = ({ active, gridProps }: DateTimeWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const now = useTickTok();

  const current = currentPanel.widgets.dateTime;

  const secondVisible = useMemo(() => {
    if (!current.blinkingSemi || current.seconds) return true;

    return !!isNumberOdd(Number(now.s));
  }, [current, now]);

  const renderClock = useMemo(() => {
    if (current.type === 'numeric') {
      return (
        <NumericClock
          showSeconds={current.seconds}
          secondVisible={secondVisible}
        />
      );
    }

    return <AnalogClock showSeconds={current.seconds} />;
  }, [current, secondVisible]);

  const renderDate = useMemo(() => {
    return (
      <Stack>
        <Typography variant="subtitle1">
          {/* TODO: format by locale */}
          {now.day}.{now.month}. {now.year}
        </Typography>
      </Stack>
    );
  }, [now]);

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
        </Stack>
      </Paper>
    </Grid>
  );
};

export default DateTimeWidget;

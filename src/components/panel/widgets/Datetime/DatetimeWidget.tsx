import { useMemo } from 'react';
import { Grid, Paper } from '@mui/material';
import { useAppStore } from '@/store';
import type { DatetimeWidgetProps } from '../types';
import {
  WeatherSnippet,
  ClockSnippet,
  DateSnippet,
  HolidaysSnippet,
} from './snippets';

const DatetimeWidget = ({ gridProps, ...widget }: DatetimeWidgetProps) => {
  const {
    active,
    seconds,
    secondsBlink,
    type,
    holidaysOrigin,
    tomorrowHolidays,
    date,
    holidays,
    weather,
    fullDate,
    weekDay,
  } = widget;

  const { editMode } = useAppStore();

  const renderTime = useMemo(
    () => (
      <Grid size={12}>
        <ClockSnippet
          type={type}
          seconds={seconds}
          secondsBlink={secondsBlink}
        />
      </Grid>
    ),
    [type, seconds, secondsBlink],
  );

  const renderDate = useMemo(
    () =>
      date && (
        <Grid
          size={12}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DateSnippet fullDate={fullDate} weekDay={weekDay} />
        </Grid>
      ),
    [date, fullDate, weekDay],
  );

  const renderHolidays = useMemo(
    () =>
      holidays && (
        <Grid size={12} sx={{}}>
          <HolidaysSnippet
            holidaysOrigin={holidaysOrigin}
            showTomorrow={tomorrowHolidays}
          />
        </Grid>
      ),
    [holidays, holidaysOrigin, tomorrowHolidays],
  );

  const renderWeather = useMemo(
    () =>
      weather && (
        <Grid size={12}>
          <WeatherSnippet />
        </Grid>
      ),
    [weather],
  );

  if (!active) return;

  return (
    <Grid
      id="panel-datetime-widget"
      spacing={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
      {...gridProps}
    >
      <Paper
        sx={({ palette, shape, spacing }) => ({
          width: '100%',
          height: '100%',
          textAlign: 'center',
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: spacing(1),
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: editMode ? palette.divider : 'transparent',
          borderRadius: shape.borderRadius,
          transition: 'border-color 0.35s ease-in-out',
        })}
      >
        {renderTime}
        {renderDate}
        {renderHolidays}
        {renderWeather}
      </Paper>
    </Grid>
  );
};

export default DatetimeWidget;

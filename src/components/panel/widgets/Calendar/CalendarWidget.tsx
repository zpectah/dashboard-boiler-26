import { Box, Grid, Paper } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import { useTickTock } from '@/hooks';
import { useAppStore } from '@/store';
import { widgetCalendarRefreshTimeout } from '@/constants';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ gridProps, ...widget }: CalendarWidgetProps) => {
  const { active } = widget;

  const { editMode } = useAppStore();
  const { now } = useTickTock({ intervalMs: widgetCalendarRefreshTimeout });

  if (!active) return;

  return (
    <Grid id="panel-calendar-widget" {...gridProps}>
      <Paper
        sx={({ palette, shape }) => ({
          width: '100%',
          textAlign: 'center',
          p: 1.5,
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: editMode ? palette.divider : 'transparent',
          borderRadius: shape.borderRadius,
          transition: 'border-color 0.35s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Box>
          <DateCalendar
            value={now}
            disableHighlightToday
            showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            readOnly
            sx={(theme) => ({
              '& .MuiPickersCalendarHeader-root': {
                minHeight: 'initial',
                maxHeight: 'initial',
              },
              '& .MuiPickersCalendarHeader-labelContainer': {
                display: 'none',
              },
              '& .MuiDayCalendar-weekContainer': {
                '&:has(.MuiButtonBase-root.MuiPickerDay-root.Mui-selected )': {
                  padding: '.25rem',
                  backgroundColor: theme.alpha(
                    theme.palette.text.secondary,
                    0.025,
                  ),
                  borderRadius: theme.shape.borderRadius,
                },
              },
              '& .MuiButtonBase-root': {
                pointerEvents: 'none',
                outline: 'none',

                '&.MuiPickerDay-root': {
                  fontSize: '.85rem',

                  '&.MuiPickerDay-dayOutsideMonth': {
                    opacity: 0.35,
                  },
                },
              },
              '& .MuiPickersArrowSwitcher-root': {
                display: 'none',
              },
              '& .MuiPickersDay-root': {},

              '& .MuiDayCalendar-weekDayLabel': {
                fontWeight: 700,
              },
              '& .MuiPickersDay-root.Mui-selected': {},
            })}
            slotProps={{
              calendarHeader: {
                disabled: true,
              },
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
};

export default CalendarWidget;

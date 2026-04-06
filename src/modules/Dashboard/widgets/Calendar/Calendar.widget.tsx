import { Box, Grid, Paper } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import { useTickTok } from '../../../../hooks';
// import { useDashboardContext } from '../../Dashboard.context';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ active, gridProps }: CalendarWidgetProps) => {
  // const { currentPanel } = useDashboardContext();
  const { raw } = useTickTok();

  // TODO
  // const current = currentPanel.widgets.calendar;

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Box>
          <DateCalendar
            value={raw}
            disableHighlightToday
            showDaysOutsideCurrentMonth
            fixedWeekNumber={6}
            readOnly
            sx={() => ({
              '& .MuiPickersCalendarHeader-root': {
                minHeight: 'initial',
                maxHeight: 'initial',
              },
              '& .MuiPickersCalendarHeader-labelContainer': {
                display: 'none',
              },
              '& .MuiPickersArrowSwitcher-root': {
                display: 'none',
              },
              '& .MuiPickersDay-root': {
                pointerEvents: 'none',
              },
              '& .MuiPickersDay-dayOutsideMonth': {
                opacity: 0.35,
              },
              '& .MuiDayCalendar-weekDayLabel': {},
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

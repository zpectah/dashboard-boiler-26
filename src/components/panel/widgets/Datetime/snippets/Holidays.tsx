import { Stack, Typography } from '@mui/material';
import { useHolidays, useTickTock } from '@/hooks';
import type { PanelDatetimeWidgetHolidaysOriginType } from '@/types';

interface HolidaysSnippetProps {
  holidaysOrigin: PanelDatetimeWidgetHolidaysOriginType;
  showTomorrow?: boolean;
}

const HolidaysSnippet = ({
  holidaysOrigin,
  showTomorrow,
}: HolidaysSnippetProps) => {
  const { now } = useTickTock({ intervalMs: 60_000 });
  const holidays = useHolidays(now, holidaysOrigin);

  return (
    <Stack
      direction="column"
      spacing={0.25}
      sx={{ pt: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography variant="body1">{holidays.today}</Typography>
      {showTomorrow && (
        <Typography variant="body2" color="textDisabled">
          {holidays.tomorrow}
        </Typography>
      )}
    </Stack>
  );
};

export default HolidaysSnippet;

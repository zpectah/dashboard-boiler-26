import { Stack, Typography } from '@mui/material';
import { useHolidays, useTickTock } from '@/hooks';
import type { PanelDatetimeWidgetHolidaysOriginType } from '@/types';
import { snippetHolidaysRefreshTimeout } from '@/constants';

interface HolidaysSnippetProps {
  holidaysOrigin: PanelDatetimeWidgetHolidaysOriginType;
  showTomorrow?: boolean;
}

const HolidaysSnippet = ({
  holidaysOrigin,
  showTomorrow,
}: HolidaysSnippetProps) => {
  const { now } = useTickTock({ intervalMs: snippetHolidaysRefreshTimeout });
  const holidays = useHolidays(now, holidaysOrigin);

  return (
    <Stack
      direction="column"
      spacing={0.25}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography sx={{ fontSize: '1.25rem', fontWeight: 400 }}>
        {holidays.today}
      </Typography>
      {showTomorrow && (
        <Typography variant="body2" color="textDisabled">
          {holidays.tomorrow}
        </Typography>
      )}
    </Stack>
  );
};

export default HolidaysSnippet;

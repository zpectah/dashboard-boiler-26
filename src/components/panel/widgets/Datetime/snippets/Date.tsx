import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTickTock } from '@/hooks';

interface DateSnippetProps {
  fullDate: boolean;
  weekDay: boolean;
}

const DateSnippet = ({ fullDate, weekDay }: DateSnippetProps) => {
  const { t } = useTranslation();
  const { parsed } = useTickTock();

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {weekDay && (
        <Typography variant="h5">
          {t(`weekday.${parsed.date.weekDay}`)}
        </Typography>
      )}
      {fullDate ? (
        <Typography variant="h5">
          {parsed.date.day}. {t(`month.${parsed.date.month}`)}{' '}
          {parsed.date.year}
        </Typography>
      ) : (
        <Typography variant="h5">
          {parsed.date.day}.{parsed.date.month}. {parsed.date.year}
        </Typography>
      )}
    </Stack>
  );
};

export default DateSnippet;

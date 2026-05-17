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
        fontSize: '1.5rem',
        fontWeight: 500,
      }}
    >
      {weekDay && (
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
          {t(`weekday.${parsed.date.weekDay}`)}
        </Typography>
      )}
      {fullDate ? (
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
          {parsed.date.day}. {t(`month.${parsed.date.month}`)}{' '}
          {parsed.date.year}
        </Typography>
      ) : (
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
          {parsed.date.day}.{parsed.date.month}. {parsed.date.year}
        </Typography>
      )}
    </Stack>
  );
};

export default DateSnippet;

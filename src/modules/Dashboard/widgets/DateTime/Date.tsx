import { Stack, Typography } from '@mui/material';

interface DateProps {
  year: string;
  month: string;
  day: string;
}

const Date = ({ year, month, day }: DateProps) => {
  /* TODO: format by locale */

  return (
    <Stack>
      <Typography variant="subtitle1">
        {day}.{month}. {year}
      </Typography>
    </Stack>
  );
};

export default Date;

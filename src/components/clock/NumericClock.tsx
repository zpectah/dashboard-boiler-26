import { Stack, Typography } from '@mui/material';

interface NumericClockProps {
  time: {
    hours: string;
    minutes: string;
    seconds: string;
  };
  seconds?: boolean;
  secondVisible?: boolean;
}

const NumericClock = ({ time, seconds, secondVisible }: NumericClockProps) => {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '5rem',
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: '.125rem',
        }}
      >
        {time.hours}
        <span style={{ opacity: secondVisible ? 1 : 0 }}>:</span>
        {time.minutes}
        {seconds && <span style={{ opacity: secondVisible ? 1 : 0 }}>:</span>}
        {seconds && time.seconds}
      </Typography>
    </Stack>
  );
};

export default NumericClock;

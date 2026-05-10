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
      <Typography variant="h1">
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

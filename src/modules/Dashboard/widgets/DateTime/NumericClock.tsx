import { Stack, Typography } from '@mui/material';
import { useTickTok } from '../../../../hooks';

interface NumericClockProps {
  showSeconds?: boolean;
  secondVisible?: boolean;
}

const NumericClock = ({ showSeconds, secondVisible }: NumericClockProps) => {
  const { hour, minute, second } = useTickTok();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Typography variant="h1">
        {hour}
        <span style={{ opacity: secondVisible ? 1 : 0 }}>:</span>
        {minute}
        {showSeconds && (
          <span style={{ opacity: secondVisible ? 1 : 0 }}>:</span>
        )}
        {showSeconds && second}
      </Typography>
    </Stack>
  );
};

export default NumericClock;

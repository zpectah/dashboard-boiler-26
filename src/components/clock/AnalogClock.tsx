import { useTheme, Stack } from '@mui/material';

interface AnalogClockProps {
  size?: string;
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  seconds?: boolean;
}

const AnalogClock = ({ size, time, seconds = true }: AnalogClockProps) => {
  const { palette } = useTheme();

  const secDeg = (time.seconds / 60) * 360;
  const minDeg = ((time.minutes + time.seconds / 60) / 60) * 360;
  const hourDeg = (((time.hours % 12) + time.minutes / 60) / 12) * 360;

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        height: size ? size : '150px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        style={{ background: 'transparent' }}
      >
        <g transform="translate(100, 100)">
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx="0"
              cy="-85"
              r="2.5"
              fill={palette.text.secondary}
              transform={`rotate(${i * 30})`}
            />
          ))}
        </g>

        {/* Hour */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="55"
          stroke={palette.text.primary}
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${hourDeg}, 100, 100)`}
        />

        {/* Minute */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="35"
          stroke={palette.text.primary}
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minDeg}, 100, 100)`}
        />

        {/* Seconds */}
        {seconds && (
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="25"
            stroke={palette.text.disabled}
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${secDeg}, 100, 100)`}
          />
        )}

        {/* Center */}
        <circle cx="100" cy="100" r="4" fill={palette.text.primary} />
      </svg>
    </Stack>
  );
};

export default AnalogClock;

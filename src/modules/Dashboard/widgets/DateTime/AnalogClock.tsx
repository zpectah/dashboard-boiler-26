import { useTheme, Stack, Typography } from '@mui/material';
import { useTickTok } from '../../../../hooks';

interface AnalogClockProps {
  showSeconds?: boolean;
}

const AnalogClock = ({ showSeconds }: AnalogClockProps) => {
  const { palette } = useTheme();
  const { raw } = useTickTok();

  const seconds = Number(raw.format('s'));
  const minutes = Number(raw.format('m'));
  const hours = Number(raw.format('H'));

  const secDeg = (seconds / 60) * 360;
  const minDeg = ((minutes + seconds / 60) / 60) * 360;
  const hourDeg = (((hours % 12) + minutes / 60) / 12) * 360;

  return (
    <Stack
      direction="column"
      gap={1}
      alignItems="center"
      justifyContent="center"
      sx={{ height: '150px' }}
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
        {showSeconds && (
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

      <Typography>
        {hours}:{minutes}
      </Typography>
    </Stack>
  );
};

export default AnalogClock;

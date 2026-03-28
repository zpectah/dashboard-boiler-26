import { useEffect } from 'react';
import { styled, Grid, Typography, Stack } from '@mui/material';
import type { Panel } from '../../types';
import { Container } from '../../components';
import { useDashboardContext } from './Dashboard.context';
import {
  CalendarWidget,
  ClockAnalogWidget,
  ClockNumericWidget,
  DateTimeWidget,
  HolidaysWidget,
  LinksWidget,
  WeatherWidget,
} from './widgets';
import useDialogStore from '../../store/useDialogStore.ts';

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));
const WidgetWrapper = styled('div')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'safe center',

  // TODO
  background: 'rgba(200,200,200,.5)',
  borderRadius: '.5rem',
}));

interface DashboardPanelProps {
  panel: Panel;
}

const DashboardPanel = ({ panel }: DashboardPanelProps) => {
  const { onOpenPanelDialog } = useDialogStore();
  const { onCurrentPanelChange } = useDashboardContext();

  const panelLabel = panel.label ?? panel.name;

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => onCurrentPanelChange(panel), []);

  return (
    <Wrapper>
      <Container>
        <Stack direction="row" gap={2}>
          {/* TODO */}
          <Typography variant="subtitle1">{panelLabel}</Typography>
          <Typography
            variant="button"
            onClick={() => onOpenPanelDialog(panel.id)}
          >
            edit
          </Typography>
        </Stack>
        <WidgetWrapper>
          <Grid container spacing={2}>
            {/* TODO */}
            <ClockAnalogWidget gridProps={{ size: 3 }} />
            <ClockNumericWidget gridProps={{ size: 3 }} />
            <DateTimeWidget gridProps={{ size: 3 }} />
            <HolidaysWidget gridProps={{ size: 3 }} />
            <CalendarWidget gridProps={{ size: 6 }} />
            <WeatherWidget gridProps={{ size: 6 }} />
            <LinksWidget gridProps={{ size: 12 }} />
          </Grid>
        </WidgetWrapper>
      </Container>
    </Wrapper>
  );
};

export default DashboardPanel;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, Grid, Typography, Stack, Button } from '@mui/material';
import type { Panel } from '../../types';
import { useAppStore, useDialogStore } from '../../store';
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
  const { t } = useTranslation(['feedback']);

  const { onOpenPanelDialog, onOpenConfirmDialog } = useDialogStore();
  const { onDeletePanel } = useAppStore();
  const { onCurrentPanelChange, currentPanel } = useDashboardContext();
  const navigate = useNavigate();

  const panelLabel = panel.label ?? panel.name;
  const isHomePanel = currentPanel.isMain;

  const deletePanelHandler = (id: string) => {
    onDeletePanel(id);
    navigate('/');
    // TODO: toast message
  };

  const deletePanelConfirmHandler = (panel: Panel) =>
    onOpenConfirmDialog({
      title: t('feedback:message.panelDelete.title', { name: panel.name }),
      content: t('feedback:message.panelDelete.content'),
      onConfirm: () => deletePanelHandler(panel.id),
    });

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => onCurrentPanelChange(panel), []);

  return (
    <Wrapper>
      <Container>
        <Stack direction="row" gap={2}>
          {/* TODO */}
          <Typography variant="subtitle1">{panelLabel}</Typography>
          <Button onClick={() => onOpenPanelDialog(panel.id)}>edit</Button>
          {!isHomePanel && (
            <Button onClick={() => deletePanelConfirmHandler(panel)}>
              delete
            </Button>
          )}
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

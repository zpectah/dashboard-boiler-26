import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, Grid, Typography, Stack } from '@mui/material';
import { IconPencil, IconX } from '@tabler/icons-react';
import type { Panel } from '../../types';
import { useAppStore, useDialogStore } from '../../store';
import { Container, IconButtonPlus } from '../../components';
import { useDashboardContext } from './Dashboard.context';
import {
  CalendarWidget,
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

  const widgets = useMemo(
    () => ({
      /* TODO: create dynamic sizes by viewed widgets */
      dateTime: { ...panel.widgets.dateTime, gridProps: { size: 3 } },
      holidays: { ...panel.widgets.holidays, gridProps: { size: 3 } },
      calendar: { ...panel.widgets.calendar, gridProps: { size: 6 } },
      weather: { ...panel.widgets.weather, gridProps: { size: 6 } },
      links: { ...panel.widgets.links, gridProps: { size: 12 } },
    }),
    [panel],
  );

  const deletePanelHandler = (id: string) => {
    /** It is necessary to move the delete event here and redirect to the start panel due to the non-existent index */
    navigate('/');

    setTimeout(() => {
      onDeletePanel(id);

      // TODO: toast message
    }, 250);
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
          <Typography variant="h5">{panelLabel}</Typography>
          <IconButtonPlus
            tooltip="Edit"
            onClick={() => onOpenPanelDialog(panel.id)}
            size="small"
          >
            <IconPencil />
          </IconButtonPlus>
          {!isHomePanel && (
            <IconButtonPlus
              tooltip="Delete"
              onClick={() => deletePanelConfirmHandler(panel)}
              size="small"
            >
              <IconX />
            </IconButtonPlus>
          )}
        </Stack>
        <WidgetWrapper>
          <Grid container spacing={2}>
            {/* TODO */}
            <DateTimeWidget {...widgets.dateTime} />
            <HolidaysWidget {...widgets.holidays} />
            <CalendarWidget {...widgets.calendar} />
            <WeatherWidget {...widgets.weather} />
            <LinksWidget {...widgets.links} />
          </Grid>
        </WidgetWrapper>
      </Container>
    </Wrapper>
  );
};

export default DashboardPanel;

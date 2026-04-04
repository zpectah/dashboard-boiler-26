import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, Grid, Typography, Stack } from '@mui/material';
import { IconPencil, IconTrash } from '@tabler/icons-react';
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
  const { onOpenPanelDialog, onOpenConfirmDialog, addToast } = useDialogStore();
  const { onDeletePanel } = useAppStore();
  const { onCurrentPanelChange, currentPanel } = useDashboardContext();
  const navigate = useNavigate();

  const panelLabel = panel.label ?? panel.name;
  const isHomePanel = currentPanel.isMain;

  const deletePanelHandler = (id: string) => {
    /** It is necessary to move the delete event here and redirect to the start panel due to the non-existent index */
    navigate('/');

    setTimeout(() => {
      onDeletePanel(id);
      addToast({
        title: 'Panel was successfully deleted', // TODO #i18n
        severity: 'success',
        autoclose: true,
      });
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
          {!isHomePanel && (
            <IconButtonPlus
              tooltip="Delete"
              onClick={() => deletePanelConfirmHandler(panel)}
              size="small"
            >
              <IconTrash />
            </IconButtonPlus>
          )}
          <IconButtonPlus
            tooltip="Edit"
            onClick={() => onOpenPanelDialog(panel.id)}
            size="small"
          >
            <IconPencil />
          </IconButtonPlus>
        </Stack>
        <WidgetWrapper>
          <Grid container spacing={2}>
            {/* TODO */}
            <DateTimeWidget
              {...panel.widgets.dateTime}
              gridProps={{ size: 3 }}
            />
            <HolidaysWidget
              {...panel.widgets.holidays}
              gridProps={{ size: 3 }}
            />
            <CalendarWidget
              {...panel.widgets.calendar}
              gridProps={{ size: 6 }}
            />
            <WeatherWidget {...panel.widgets.weather} gridProps={{ size: 6 }} />
            <LinksWidget {...panel.widgets.links} gridProps={{ size: 12 }} />
          </Grid>
        </WidgetWrapper>
      </Container>
    </Wrapper>
  );
};

export default DashboardPanel;

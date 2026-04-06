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
  width: '100%',
  height: 'auto',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'safe center',
}));
const GridWrapper = styled(Grid)(() => ({
  width: '100%',
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
    /**
     * It is necessary to move the delete event here
     * and redirect to the start panel due to the non-existent index
     * */
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

  const isDateTimeWidgetActive = panel.widgets.dateTime.active;
  const isWeatherWidgetActive = panel.widgets.weather.active;
  const isCalendarWidgetActive = panel.widgets.calendar.active;
  const isFirstRowVisible =
    isDateTimeWidgetActive || isWeatherWidgetActive || isCalendarWidgetActive;
  // const isLinksWidgetActive = panel.widgets.links.active;

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => onCurrentPanelChange(panel), []);

  return (
    <Wrapper>
      <Container>
        <Stack
          direction="column"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            direction="row"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* TODO #heading */}
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
            <GridWrapper container spacing={2}>
              {/* TODO #layout */}
              {isFirstRowVisible && (
                <Grid container size={12}>
                  <DateTimeWidget
                    {...panel.widgets.dateTime}
                    gridProps={{
                      size: {
                        xs: 12,
                        md:
                          isWeatherWidgetActive && isCalendarWidgetActive
                            ? 4
                            : isWeatherWidgetActive || isCalendarWidgetActive
                              ? 6
                              : 12,
                      },
                    }}
                  />
                  <WeatherWidget
                    {...panel.widgets.weather}
                    gridProps={{
                      size: {
                        xs: 12,
                        md:
                          isDateTimeWidgetActive && isCalendarWidgetActive
                            ? 4
                            : isDateTimeWidgetActive || isCalendarWidgetActive
                              ? 6
                              : 12,
                      },
                    }}
                  />
                  <CalendarWidget
                    {...panel.widgets.calendar}
                    gridProps={{
                      size: {
                        xs: 12,
                        md:
                          isWeatherWidgetActive && isDateTimeWidgetActive
                            ? 4
                            : isWeatherWidgetActive || isDateTimeWidgetActive
                              ? 6
                              : 12,
                      },
                    }}
                  />
                </Grid>
              )}
              <LinksWidget {...panel.widgets.links} gridProps={{ size: 12 }} />
            </GridWrapper>
          </WidgetWrapper>
        </Stack>
      </Container>
    </Wrapper>
  );
};

export default DashboardPanel;

import { styled, Grid } from '@mui/material';
import type { Panel } from '@/types';
import { CalendarWidget, LinksWidget, DatetimeWidget } from './widgets';

const WidgetWrapper = styled('div')(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'safe center',
}));
const GridWrapper = styled(Grid)(() => ({
  width: '100%',
  alignItems: 'stretch',
  justifyContent: 'center',
}));

interface PanelContentWidgetsProps {
  panel: Panel;
}

const PanelContentWidgets = ({ panel }: PanelContentWidgetsProps) => {
  const panelId = panel.id;

  return (
    <WidgetWrapper id="panel-content-widgets">
      <GridWrapper container spacing={2}>
        <DatetimeWidget
          panelId={panelId}
          gridProps={{
            size: {
              xs: 12,
              md: panel.widgets.calendar.active ? 6 : 12,
            },
          }}
          {...panel.widgets.datetime}
        />
        <CalendarWidget
          panelId={panelId}
          gridProps={{
            size: {
              xs: 12,
              md: panel.widgets.datetime.active ? 6 : 12,
            },
          }}
          {...panel.widgets.calendar}
        />
        <LinksWidget
          panelId={panelId}
          gridProps={{ size: 12 }}
          {...panel.widgets.links}
        />
      </GridWrapper>
    </WidgetWrapper>
  );
};

export default PanelContentWidgets;

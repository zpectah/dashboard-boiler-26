import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { HolidaysWidgetProps } from '../types';

const HolidaysWidget = ({ gridProps }: HolidaysWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('HolidaysWidget', currentPanel.widgets.holidays);

  if (!currentPanel.widgets.holidays) return null;

  return (
    <Grid {...gridProps}>
      HolidaysWidget _ {currentPanel.id} _{' '}
      {currentPanel.widgets.holidays ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default HolidaysWidget;

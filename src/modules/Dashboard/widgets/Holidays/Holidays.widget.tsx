import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { HolidaysWidgetProps } from '../types';

const HolidaysWidget = ({ gridProps }: HolidaysWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!currentPanel.widgets.holidays) return null;

  return <Grid {...gridProps}>HolidaysWidget _ {currentPanel.id}</Grid>;
};

export default HolidaysWidget;

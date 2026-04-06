import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { CheckboxField } from '../../../components';

const WeatherFormPart = () => {
  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Typography variant="h6">Widget: Weather</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid size={12} container spacing={1}>
          <CheckboxField
            name="widgets.weather.active"
            label=""
            fieldLabel="Active"
            layout="vertical"
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default WeatherFormPart;

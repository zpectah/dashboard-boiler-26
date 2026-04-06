import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { CheckboxField } from '../../../components';

const CalendarFormPart = () => {
  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Typography variant="h6">Widget: Calendar</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid size={12} container spacing={1}>
          <CheckboxField
            name="widgets.calendar.active"
            label=""
            fieldLabel="Active"
            layout="vertical"
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default CalendarFormPart;

import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { CheckboxField } from '../../../components';

const LinksFormPart = () => {
  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Typography variant="h6">Widget: Links</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid size={12} container spacing={1}>
          <CheckboxField
            name="widgets.links.active"
            label=""
            fieldLabel="Active"
            layout="vertical"
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default LinksFormPart;

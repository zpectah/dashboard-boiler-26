import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  CheckboxField,
  SelectField,
  type SelectProps,
} from '../../../components';
import {
  dateTimeWidgetHolidaysOriginDefault,
  dateTimeWidgetTimeDefault,
} from '../../../constants';

interface DateTimeFormPartProps {
  options: {
    timeType: SelectProps['options'];
    holidaysOrigin: SelectProps['options'];
  };
}

const DateTimeFormPart = ({ options }: DateTimeFormPartProps) => {
  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Typography variant="h6">Widget: Date time</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid size={12} container spacing={1}>
          <CheckboxField
            name="widgets.dateTime.active"
            label=""
            fieldLabel="Active"
            layout="vertical"
          />
          <SelectField
            name="widgets.dateTime.timeType"
            label="Time type"
            layout="vertical"
            options={options.timeType}
            defaultValue={dateTimeWidgetTimeDefault}
            isFullWidth
            size={{ xs: 12, md: 6 }}
          />
          <CheckboxField
            name="widgets.dateTime.separatorBlink"
            label=""
            fieldLabel="Blinking Semi"
            layout="vertical"
          />
          <CheckboxField
            name="widgets.dateTime.showSeconds"
            label=""
            fieldLabel="Show seconds"
            layout="vertical"
          />
          <CheckboxField
            name="widgets.dateTime.showDate"
            label=""
            fieldLabel="Show date"
            layout="vertical"
          />
          <CheckboxField
            name="widgets.dateTime.showHolidays"
            label=""
            fieldLabel="Show holidays"
            layout="vertical"
          />
          <CheckboxField
            name="widgets.dateTime.showTomorrowHolidays"
            label=""
            fieldLabel="Show tomorrow holidays"
            layout="vertical"
          />
          <SelectField
            name="widgets.dateTime.holidaysOrigin"
            label="Holidays Origin"
            layout="vertical"
            options={options.holidaysOrigin}
            defaultValue={dateTimeWidgetHolidaysOriginDefault}
            isFullWidth
            size={{ xs: 12, md: 6 }}
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default DateTimeFormPart;

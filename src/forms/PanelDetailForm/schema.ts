import z from 'zod';

const panelDetailWidgetsSchema = z.object({
  calendar: z.boolean(),
  clockAnalog: z.boolean(),
  clockNumeric: z.boolean(),
  dateTime: z.boolean(),
  holidays: z.boolean(),
  links: z.boolean(),
  weather: z.boolean(),
});

export const panelDetailFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  widgets: panelDetailWidgetsSchema,
});

import z from 'zod';
import i18next from 'i18next';

const commonStringMinLength = 3;

export const commonFieldSchema = {
  /** Common string */
  string: z.string({
    error: () => i18next.t('feedback:form.error.invalid_string'),
  }),
  /** Required string */
  string_required: z
    .string({ error: () => i18next.t('feedback:form.error.required') })
    .transform((val) => val.trim())
    .refine((val) => val.length > 0, {
      error: () => i18next.t('feedback:form.error.required'),
    }),
  /** Required string with min. length 3 */
  string_minLength: z
    .string({ error: () => i18next.t('feedback:form.error.required') })
    .transform((val) => val.trim())
    .refine((val) => val.length > commonStringMinLength, {
      error: () => i18next.t('feedback:form.error.required'),
    }),
  /** Common number */
  number: z.number({
    error: () => i18next.t('feedback:form.error.invalid_number'),
  }),
  /** Common boolean */
  boolean: z.boolean({
    error: () => i18next.t('feedback:form.error.invalid_boolean'),
  }),
  /** Common string or number */
  stringOrNumber: z.union([
    z.string({ error: () => i18next.t('feedback:form.error.invalid_string') }),
    z.number({ error: () => i18next.t('feedback:form.error.invalid_number') }),
  ]),
  /** Common array of numbers */
  arrayOfNumber: z.array(
    z.number({ error: () => i18next.t('feedback:form.error.invalid_number') }),
    {
      error: () => i18next.t('feedback:form.error.invalid_array'),
    },
  ),
  /** Common array of strings */
  arrayOfString: z.array(
    z.string({ error: () => i18next.t('feedback:form.error.invalid_string') }),
    {
      error: () => i18next.t('feedback:form.error.invalid_array'),
    },
  ),
  /** Common array of numbers or strings */
  arrayOfNumberOrString: z.array(
    z.union([
      z.string({
        error: () => i18next.t('feedback:form.error.invalid_string'),
      }),
      z.number({
        error: () => i18next.t('feedback:form.error.invalid_number'),
      }),
    ]),
    { error: () => i18next.t('feedback:form.error.invalid_array') },
  ),
};

import { Grid, Paper, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IconX } from '@tabler/icons-react';
import { useAppStore } from '@/store';
import { SearchInput, Form } from '../../../form';
import type { SearchWidgetProps } from '../types';
import { useSearchForm } from './useSearchForm';

const SearchWidget = ({ gridProps, ...widget }: SearchWidgetProps) => {
  const { active, engine } = widget;

  const { t } = useTranslation(['form']);
  const { editMode } = useAppStore();
  const { form, onSubmit, onClear } = useSearchForm(engine);

  if (!active) return;

  return (
    <Grid id="panel-search-widget" {...gridProps}>
      <Paper
        sx={({ palette, shape }) => ({
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          p: 2,
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: editMode ? palette.divider : 'transparent',
          borderRadius: shape.borderRadius,
          transition: 'border-color 0.35s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Form sx={{ width: '100%' }} onSubmit={onSubmit}>
          <Controller
            name="search"
            control={form.control}
            render={({ field }) => (
              <SearchInput
                fullWidth
                placeholder={t(`form:placeholder.search.${engine}`)}
                adornment={
                  field.value.length > 3 && (
                    <IconButton onClick={onClear}>
                      <IconX />
                    </IconButton>
                  )
                }
                {...field}
              />
            )}
          />
        </Form>
      </Paper>
    </Grid>
  );
};

export default SearchWidget;

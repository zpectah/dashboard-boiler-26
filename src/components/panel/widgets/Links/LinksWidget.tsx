import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Stack, Paper } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { getConfig } from '@/config';
import { newLinkId } from '@/constants';
import { useDialogStore, useAppStore } from '@/store';
import { IconButtonPlus } from '../../../button';
import type { LinksWidgetProps } from '../types';
import LinksWidgetLink from './LinksWidgetLink';

const LinksWidget = ({ panelId, gridProps, ...widget }: LinksWidgetProps) => {
  const { active, links, icons } = widget;

  const { features } = getConfig();

  const { t } = useTranslation();
  const { openLinkDetail } = useDialogStore();
  const { editMode } = useAppStore();

  const renderAddButton = useMemo(() => {
    if (links.length >= features.links.max) return null;

    return (
      <IconButtonPlus
        tooltip={t('button.new_link')}
        onClick={() => openLinkDetail(newLinkId)}
      >
        <IconPlus />
      </IconButtonPlus>
    );
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [links, t]);

  if (!active) return;

  return (
    <Grid
      id="panel-links-widget"
      container
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...gridProps}
    >
      <Paper
        sx={({ palette, shape, spacing }) => ({
          width: '100%',
          textAlign: 'center',
          p: 2,
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: editMode ? palette.divider : 'transparent',
          borderRadius: shape.borderRadius,
          transition: 'border-color 0.35s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing(2),
          alignItems: 'center',
        })}
      >
        <Stack
          direction="row"
          sx={({ spacing }) => ({
            gap: {
              xs: spacing(2),
              md: spacing(1.75),
            },
            width: '100%',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          {links
            .sort((a, b) => a.order - b.order)
            .map((item) => (
              <LinksWidgetLink
                key={item.id}
                panelId={panelId}
                link={item}
                icons={icons}
              />
            ))}
        </Stack>
        {renderAddButton}
      </Paper>
    </Grid>
  );
};

export default LinksWidget;

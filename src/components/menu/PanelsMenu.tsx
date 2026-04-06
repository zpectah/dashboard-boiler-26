import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Tabs, Tab } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { mainPanelName } from '../../constants';
import { useAppStore, useDialogStore } from '../../store';
import { IconButtonPlus } from '../button';

const PanelsMenu = () => {
  const { t } = useTranslation();
  const { panel } = useParams();
  const { panels } = useAppStore();
  const { onOpenPanelDialog } = useDialogStore();

  const a11yProps = (index: number) => {
    const panelPrefix = panel || 'home';

    return {
      id: `tab_${panelPrefix}_${index}`,
      'aria-controls': `tabpanel_${panelPrefix}_${index}`,
    };
  };

  const panelIndex = useMemo(
    () =>
      panels.findIndex(
        (item) =>
          item.name === panel ||
          (panel === undefined && item.name === mainPanelName),
      ) ?? 0,
    [panel, panels],
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
      sx={{ position: 'relative', overflow: 'hidden' }}
    >
      <div>
        {panels.map((p) => (
          <span key={p.id}>{p.label}</span>
        ))}
      </div>
      <Tabs
        key={panel}
        value={panelIndex}
        variant="scrollable"
        scrollButtons="auto"
      >
        {panels.map(({ id, name, label }, index) => {
          const path = name === mainPanelName ? '/' : `/${name}`;

          return (
            <Tab
              key={id}
              label={label}
              component={Link}
              to={path}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      <IconButtonPlus
        tooltip={t('button.newPanel')}
        onClick={() => onOpenPanelDialog('new')}
      >
        <IconPlus />
      </IconButtonPlus>
    </Stack>
  );
};

export default PanelsMenu;

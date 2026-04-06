import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Tabs, Tab } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { usePanels } from '../../hooks';
import { mainPanelName } from '../../constants';
import { useDialogStore } from '../../store';
import { IconButtonPlus } from '../button';

const PanelsMenu = () => {
  const { t } = useTranslation();
  const { panel } = useParams();
  const { panels } = usePanels();
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
      ),
    [panel, panels],
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
      sx={{ position: 'relative', overflow: 'hidden' }}
    >
      <Tabs value={panelIndex} variant="scrollable" scrollButtons="auto">
        {panels.map(({ id, name, label }, index) => {
          const path = name === mainPanelName ? '/' : `/${name}`;
          const linkLabel = label ? label : name;

          return (
            <Tab
              key={id}
              label={linkLabel}
              component={Link}
              to={path}
              wrapped={false}
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

import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Tabs, Tab } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { useDialogStore, usePanelsStore } from '@/store';
import { IconButtonPlus } from '@/components';
import { mainPanelId } from '@/constants';

const PanelsMenu = () => {
  const { t } = useTranslation();
  const { panel } = useParams();
  const { main, custom } = usePanelsStore();
  const { openPanelDetail } = useDialogStore();

  const a11yProps = (index: number) => {
    const panelPrefix = panel || 'home';

    return {
      id: `tab_${panelPrefix}_${index}`,
      'aria-controls': `tabpanel_${panelPrefix}_${index}`,
    };
  };

  const panels = useMemo(() => [main, ...custom], [main, custom]);

  const panelIndex = useMemo(() => {
    const targetId = panel ?? mainPanelId;
    return Math.max(
      0,
      panels.findIndex((item) => item.id === targetId),
    );
  }, [panel, panels]);

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Tabs value={panelIndex} variant="scrollable" scrollButtons="auto">
        {panels.map((item, index) => {
          const path = item.id === mainPanelId ? '/' : `panel/${item.id}`;

          return (
            <Tab
              key={item.id}
              label={item.label}
              component={Link}
              to={path}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>

      <IconButtonPlus
        tooltip={t('button.new_panel')}
        onClick={() => openPanelDetail('new')}
      >
        <IconPlus />
      </IconButtonPlus>
    </Stack>
  );
};

export default PanelsMenu;

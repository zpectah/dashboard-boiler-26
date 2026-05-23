import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Tabs, Tab } from '@mui/material';
import { IconPlus } from '@tabler/icons-react';
import { getConfig } from '@/config';
import { useDialogStore, usePanelsStore } from '@/store';
import { IconButtonPlus } from '@/components';
import { mainPanelId, newPanelId, panelViewPathPrefix } from '@/constants';

const PanelsMenu = () => {
  const { features } = getConfig();

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

  const renderAddButton = useMemo(() => {
    if (custom.length >= features.panels.max) return null;

    return (
      <IconButtonPlus
        tooltip={t('button.new_panel')}
        onClick={() => openPanelDetail(newPanelId)}
      >
        <IconPlus />
      </IconButtonPlus>
    );
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [custom, t]);

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
          const path =
            item.id === mainPanelId ? '/' : `${panelViewPathPrefix}${item.id}`;

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
      {renderAddButton}
    </Stack>
  );
};

export default PanelsMenu;

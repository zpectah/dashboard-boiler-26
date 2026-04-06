import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styled, Slide, Fade, Grow } from '@mui/material';
import { getConfig } from '../../config';
import { usePanels } from '../../hooks';
import type { Panel } from '../../types';
import { panelEffectKeys } from '../../enums';
import { useAppStore } from '../../store';
import { AlertContainer } from '../../components';
import type { Direction } from './types';
import { DashboardContextProvider } from './Dashboard.context';
import { useDashboardSlider } from './useDashboardSlider';
import { useDashboardPanel } from './useDashboardPanel';
import DashboardPanel from './DashboardPanel';

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
}));
const PanelWrapper = styled('article', {
  shouldForwardProp: (propName) => propName !== 'isCurrent',
})<{ readonly isCurrent?: boolean }>(({ isCurrent }) => ({
  width: '100%',
  height: '100%',
  opacity: isCurrent ? 1 : 0.5,
  zIndex: isCurrent ? 'inherit' : -1,
  position: isCurrent ? 'relative' : 'absolute',
  top: 0,
  left: 0,
}));

interface PanelEffectWrapperProps {
  panel: Panel;
  index: number;
  currentIndex: number;
  direction: Direction;
}

const PanelEffectWrapper = ({
  panel,
  index,
  currentIndex,
  direction,
}: PanelEffectWrapperProps) => {
  const { ui } = getConfig();

  const { panelEffect } = useAppStore();

  const commonProps = {
    in: currentIndex === index,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: ui.animation,
  };

  const panelWrapperProps = {
    role: 'tabpanel',
    id: `tabpanel_${panel.name}_${index}`,
    'aria-labelledby': `tab_${panel.name}_${index}`,
    isCurrent: currentIndex === index,
  };

  switch (panelEffect) {
    case panelEffectKeys.fade:
      return (
        <Fade {...commonProps}>
          <PanelWrapper {...panelWrapperProps}>
            <DashboardPanel panel={panel} />
          </PanelWrapper>
        </Fade>
      );

    case panelEffectKeys.grow:
      return (
        <Grow {...commonProps}>
          <PanelWrapper {...panelWrapperProps}>
            <DashboardPanel panel={panel} />
          </PanelWrapper>
        </Grow>
      );

    case panelEffectKeys.slide:
    default:
      return (
        <Slide {...commonProps} direction={direction}>
          <PanelWrapper {...panelWrapperProps}>
            <DashboardPanel panel={panel} />
          </PanelWrapper>
        </Slide>
      );
  }
};

const Dashboard = () => {
  const { t } = useTranslation();
  const { panel } = useParams();
  const { panels } = useAppStore();
  const { isPanelValid } = usePanels();
  const { currentIndex, direction } = useDashboardSlider(panel);
  const { ...dashboardContext } = useDashboardPanel();

  if (panel && !isPanelValid(panel)) {
    return (
      <AlertContainer
        alertProps={{ severity: 'error' }}
        containerProps={{ maxWidth: 'md' }}
        children={t('message.noPanelFound')}
      />
    );
  }

  return (
    <DashboardContextProvider value={dashboardContext}>
      <Wrapper>
        {panels.map((panel, index) => (
          <PanelEffectWrapper
            key={panel.id}
            panel={panel}
            index={index}
            currentIndex={currentIndex}
            direction={direction}
          />
        ))}
      </Wrapper>
    </DashboardContextProvider>
  );
};

export default Dashboard;

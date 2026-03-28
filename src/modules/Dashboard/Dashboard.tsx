import { useParams } from 'react-router-dom';
import { styled, Box, Slide } from '@mui/material';
import { usePanels } from '../../hooks';
import DashboardPanel from './DashboardPanel';
import { useDashboardSlider } from './useDashboardSlider';

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
}));
const PanelWrapper = styled(Box, {
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

const Dashboard = () => {
  const { panel } = useParams();
  const { panels, isPanelValid } = usePanels();
  const { currentIndex, direction } = useDashboardSlider(panel);

  if (panel && !isPanelValid(panel)) {
    return <>Sorry, but panel was not found</>;
  }

  return (
    <Wrapper>
      {panels.map((panel, index) => (
        <Slide
          key={panel.id}
          direction={direction}
          in={currentIndex === index}
          mountOnEnter
          unmountOnExit
          timeout={325}
        >
          <PanelWrapper isCurrent={currentIndex === index}>
            <DashboardPanel panel={panel} />
          </PanelWrapper>
        </Slide>
      ))}
    </Wrapper>
  );
};

export default Dashboard;

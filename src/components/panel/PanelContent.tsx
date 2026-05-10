import { styled, Stack, Zoom } from '@mui/material';
import type { Panel } from '@/types';
import { Container } from '../layout';
import PanelContentWidgets from './PanelContentWidgets';
import PanelContentHeading from './PanelContentHeading';

const Wrapper = styled('article')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

interface PanelContentProps {
  panel?: Panel;
}

const PanelContent = ({ panel }: PanelContentProps) => {
  if (!panel) return;

  return (
    <Zoom in={true} key={panel.id} timeout={350} mountOnEnter unmountOnExit>
      <Wrapper id="panel-content">
        <Container maxWidth="md">
          <Stack
            direction="column"
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PanelContentHeading panel={panel} />
            <PanelContentWidgets panel={panel} />
          </Stack>
        </Container>
      </Wrapper>
    </Zoom>
  );
};

export default PanelContent;

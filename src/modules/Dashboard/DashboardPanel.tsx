import { styled } from '@mui/material';
import type { Panel } from '../../types';
import { Container } from '../../components';

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));
const WidgetWrapper = styled('div')(({ theme }) => ({
  width: 'auto',
  height: 'auto',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'safe center',

  // TODO
  background: 'rgba(200,200,200,.5)',
}));

interface DashboardPanelProps {
  panel: Panel;
}

const DashboardPanel = ({ panel }: DashboardPanelProps) => {
  return (
    <Wrapper>
      <Container>
        <WidgetWrapper>
          <pre>
            {panel.id}|{panel.name}|{panel.label}
          </pre>
          <pre>
            <code>{JSON.stringify(panel, null, 2)}</code>
          </pre>
          {panel.name === 'home' && (
            <>
              <pre>
                <code>{JSON.stringify(panel, null, 2)}</code>
              </pre>
              <pre>
                <code>{JSON.stringify(panel, null, 2)}</code>
              </pre>
            </>
          )}
        </WidgetWrapper>
      </Container>
    </Wrapper>
  );
};

export default DashboardPanel;

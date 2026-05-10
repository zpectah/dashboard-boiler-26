import { type ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, CircularProgress } from '@mui/material';
import { getConfig } from '@/config';
import { Header, Footer } from '../components';
import { useAppStore } from '../store';

const OuterWrapper = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
});

const WrapperFrame = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isEditMode',
})<{ readonly isEditMode?: boolean }>(({ isEditMode, theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  zIndex: 1,
  borderWidth: '2px',
  borderStyle: 'dashed',
  borderColor: isEditMode ? theme.palette.text.secondary : 'transparent',
  transition: 'border-color 0.35s ease-in-out',
}));

const Background = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: theme.palette.background.default,
  overflow: 'hidden',
  zIndex: 1,
  opacity: 0.05,

  '&::before': {
    content: '""',
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: `inset 0 7.5vh 15vh ${theme.palette.background.default}`,
  },

  '&::after': {
    content: '""',
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    boxShadow: `inset 0 -7.5vh 15vh ${theme.palette.background.default}`,
  },
}));

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 10,
}));

const Container = styled('main')(() => ({
  minHeight: 0,
  flex: 1,
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
  overscrollBehavior: 'contain',
}));

const Content = styled('div')(() => ({
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

interface DashboardViewProps {
  slots?: {
    header?: {
      apps?: ReactNode;
      controls?: ReactNode;
    };
    footer: {
      text?: ReactNode;
      controls?: ReactNode;
    };
  };
}

const DashboardView = ({ slots }: DashboardViewProps) => {
  const { api } = getConfig();

  const { hash, editMode } = useAppStore();

  return (
    <OuterWrapper id="dashboard-view">
      {hash && (
        <Background
          id="background-image-layer"
          sx={{
            background: `url("${api.randomImage}&hash=${hash}") center center`,
            backgroundSize: 'cover',
          }}
        />
      )}
      <WrapperFrame isEditMode={editMode} />
      <Wrapper>
        <Header slots={slots?.header} />
        <Container>
          <Content>
            <Suspense fallback={<CircularProgress />}>
              <Outlet />
            </Suspense>
          </Content>
        </Container>
        <Footer slots={slots?.footer} />
      </Wrapper>
    </OuterWrapper>
  );
};

export default DashboardView;

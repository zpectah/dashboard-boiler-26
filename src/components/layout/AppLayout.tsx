import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import { getConfig } from '../../config';
import { useAppStore } from '../../store';
import { ConfirmDialog } from '../dialog';
import Header from './Header';
import Footer from './Footer';

interface AppLayoutProps {
  slot?: ReactNode;
}

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
  border: isEditMode ? `4px solid ${theme.palette.primary.main}` : 'none',
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
  overflow: 'hidden',
}));

const AppLayout = ({ slot }: AppLayoutProps) => {
  const { url } = getConfig();
  const { editMode, hash } = useAppStore();

  return (
    <>
      <OuterWrapper>
        <Background
          sx={{
            background: `url("${url.randomImage}&hash=${hash}") center center`,
            backgroundSize: 'cover',
          }}
        />
        <WrapperFrame isEditMode={editMode} />
        <Wrapper>
          <Header />
          <Container>
            <Content>
              <Outlet />
            </Content>
          </Container>
          <Footer />
        </Wrapper>
      </OuterWrapper>
      <ConfirmDialog />
      {slot}
    </>
  );
};

export default AppLayout;

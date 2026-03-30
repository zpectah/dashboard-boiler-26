import { type ReactNode, useEffect } from 'react';
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

const Background = styled('div')({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(25, 25, 25, .5)',
  overflow: 'hidden',
  zIndex: 1,
  opacity: 0.05,
});

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
  const { hash, onChangeHash } = useAppStore();

  useEffect(() => {
    onChangeHash();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <OuterWrapper>
        <Background
          sx={{
            background: `url("${url.randomImage}&hash=${hash}") center center`,
            backgroundSize: 'cover',
          }}
        />
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

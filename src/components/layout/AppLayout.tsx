import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface AppLayoutProps {
  slot?: ReactNode;
}

const Wrapper = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
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
  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <Content>
            <Outlet />
          </Content>
        </Container>
        <Footer />
      </Wrapper>
      {slot}
    </>
  );
};

export default AppLayout;

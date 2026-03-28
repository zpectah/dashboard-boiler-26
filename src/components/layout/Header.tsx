import { styled, Stack } from '@mui/material';
import { AppsMenu, HeaderControls, PanelsMenu } from '../menu';
import Container from './Container';

const Wrapper = styled('header')(() => ({
  padding: '1rem 0',
}));
const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));
const Block = styled(Stack)(() => ({
  width: '33.333%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
}));

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Block justifyContent="flex-start">
            <AppsMenu />
          </Block>
          <Block justifyContent="center">
            <PanelsMenu />
          </Block>
          <Block justifyContent="flex-end">
            <HeaderControls />
          </Block>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Header;

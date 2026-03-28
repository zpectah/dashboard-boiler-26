import { Stack, styled } from '@mui/material';
import Container from './Container';

const Wrapper = styled('footer')(() => ({
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
  fontSize: '.85rem',
  fontWeight: 100,
}));

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Block justifyContent="flex-start">
            controls
            {/* TODO */}
          </Block>
          <Block justifyContent="center">
            copyright
            {/* TODO */}
          </Block>
          <Block justifyContent="flex-end">
            controls
            {/* TODO */}
          </Block>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;

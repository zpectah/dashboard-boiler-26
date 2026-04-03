import { Stack, Typography, styled } from '@mui/material';
import { getConfig } from '../../config';
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

  '& p': {
    fontSize: '.85rem',
    fontWeight: 100,
  },
}));

const Footer = () => {
  const { meta } = getConfig();

  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Container>
        <Content>
          <Block justifyContent="flex-start">
            <Typography>
              {meta.since} - {currentYear} | {meta.name} v{meta.version}
            </Typography>
          </Block>
          <Block justifyContent="center">{/* TODO */}</Block>
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

import dayjs from 'dayjs';
import { Stack, Typography, styled, Link } from '@mui/material';
import { getConfig } from '../../config';
import { useAppStore } from '../../store';
import { FooterControls } from '../menu';
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
  width: 'auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',

  '& p': {
    fontSize: '.85rem',
    fontWeight: 100,
    letterSpacing: '.025rem',
  },
}));

const Footer = () => {
  const { meta } = getConfig();

  const { loadTimestamp } = useAppStore();

  const currentYear = new Date().getFullYear();
  const formattedTimestamp = dayjs(loadTimestamp).format('DD.MM. YYYY HH:mm');

  return (
    <Wrapper>
      <Container>
        <Content>
          <Block justifyContent="flex-start">
            <Typography>
              {meta.since} - {currentYear}&nbsp;|&nbsp;&copy; {meta.name} v
              {meta.version}
              &nbsp;|&nbsp;Loaded: {formattedTimestamp}
              <br />
              <Link href="https://zpecter.com/" target="_blank">
                zpecter.com
              </Link>{' '}
              &nbsp;|&nbsp;
              <Link href="https://tools.zpecter.com/" target="_blank">
                tools.zpecter.com
              </Link>
            </Typography>
          </Block>
          <Block justifyContent="flex-end">
            <FooterControls />
          </Block>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;

import dayjs from 'dayjs';
import { Stack, Typography, styled, Link } from '@mui/material';
import { getConfig } from '../../config';
import { useAppStore } from '../../store';
import { FooterControls } from '../menu';
import Container from './Container';
import { useTranslation } from 'react-i18next';

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
  const { meta, links } = getConfig();

  const { t } = useTranslation();
  const { loadTimestamp } = useAppStore();

  const currentYear = new Date().getFullYear();
  const formattedTimestamp = dayjs(loadTimestamp).format('DD.MM.YYYY HH:mm');

  return (
    <Wrapper>
      <Container>
        <Content>
          <Block justifyContent="flex-start">
            <Typography>
              {meta.since} - {currentYear}&nbsp;&copy; {meta.name} v
              {meta.version}
              &nbsp;|&nbsp;{t('label.loadedIn', { date: formattedTimestamp })}
              <br />
              <Stack direction="row" gap={1} component={'span'}>
                {links.map((item, index) => (
                  <Link key={index} href={item.url} target="_blank">
                    {item.label}
                  </Link>
                ))}
              </Stack>
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

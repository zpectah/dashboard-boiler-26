import type { ReactNode } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { styled, Stack, Grid, Typography, Link, Divider } from '@mui/material';
import { getConfig } from '@/config';
import { useAppStore } from '../../store';
import { EditModeTrigger } from '../controls';
import Container from './Container';

const Wrapper = styled('footer')(() => ({
  padding: '1rem 0',
}));

interface FooterProps {
  slots?: {
    text?: ReactNode;
    controls?: ReactNode;
  };
}

const Footer = ({ slots }: FooterProps) => {
  const config = getConfig();

  const { t } = useTranslation();
  const { timestamp } = useAppStore();

  const meta = {
    ...config.meta,
    currentYear: new Date().getFullYear(),
    timestamp: dayjs(timestamp).format('DD.MM.YYYY HH:mm'),
  };

  return (
    <Wrapper>
      <Container>
        <Grid container rowSpacing={0} columnSpacing={1}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Stack
              direction="column"
              spacing={0.5}
              sx={{
                justifyContent: {
                  xs: 'center',
                  md: 'flex-start',
                },
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                component={'span'}
                sx={{ lineHeight: 1, mt: 0.75, color: 'inherit' }}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography variant="caption" color="textDisabled">
                  {meta.since} - {meta.currentYear}&nbsp;&copy; {meta.name} v
                  {meta.version}
                </Typography>
                <Typography variant="caption" color="textDisabled">
                  {t('label.loadedIn', { date: meta.timestamp })}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                component={'span'}
                sx={{ lineHeight: 1, mt: 0.75, color: 'inherit' }}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {meta.links.map((item, index) => (
                  <Typography
                    key={index}
                    component={Link}
                    href={item.url}
                    target="_blank"
                    variant="caption"
                    color="textDisabled"
                    sx={({ palette }) => ({
                      textDecorationColor: 'initial',
                      '&:hover': {
                        color: palette.text.secondary,
                      },
                    })}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Stack>
              {slots?.text}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: {
                  xs: 'center',
                  md: 'flex-end',
                },
              }}
            >
              <EditModeTrigger />
              {slots?.controls}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Footer;

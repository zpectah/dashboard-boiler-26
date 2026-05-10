import type { ReactNode } from 'react';
import { styled, Stack, Grid } from '@mui/material';
import { LocalesMenu, PanelsMenu } from '../../menu';
import {
  AppleLinksTrigger,
  GoogleLinksTrigger,
  MsLinksTrigger,
  SettingsTrigger,
  ThemeModeToggle,
  ImageRefreshTrigger,
} from '../controls';
import Container from './Container';

const Wrapper = styled('header')(() => ({
  padding: '1rem 0',
}));

interface HeaderProps {
  slots?: {
    apps?: ReactNode;
    controls?: ReactNode;
  };
}

const Header = ({ slots }: HeaderProps) => {
  return (
    <Wrapper>
      <Container>
        <Grid container rowSpacing={0} columnSpacing={1}>
          <Grid size={{ xs: 6, sm: 4, md: 2 }} sx={{ order: { xs: 1, sm: 1 } }}>
            <Stack
              id="header-apps"
              direction="row"
              spacing={1}
              sx={{ justifyContent: 'flex-start' }}
            >
              <GoogleLinksTrigger />
              <AppleLinksTrigger />
              <MsLinksTrigger />
              {slots?.apps}
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 4, md: 8 }}
            sx={{ order: { xs: 3, sm: 2 } }}
          >
            <Stack
              id="header-panels"
              direction="row"
              spacing={1}
              sx={{ justifyContent: 'center' }}
            >
              <PanelsMenu />
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2 }} sx={{ order: { xs: 2, sm: 3 } }}>
            <Stack
              id="header-controls"
              direction="row"
              spacing={1}
              sx={{ justifyContent: 'flex-end' }}
            >
              <ThemeModeToggle />
              <LocalesMenu />
              <ImageRefreshTrigger />
              <SettingsTrigger />
              {slots?.controls}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Header;

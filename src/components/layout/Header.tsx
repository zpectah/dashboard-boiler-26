import { styled, Stack, Grid } from '@mui/material';
import { AppsMenu, HeaderControls, PanelsMenu } from '../menu';
import Container from './Container';

const Wrapper = styled('header')(() => ({
  padding: '1rem 0',
}));

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, sm: 4, md: 2 }} order={{ xs: 1, sm: 1 }}>
            <Stack direction="row" justifyContent="flex-start">
              <AppsMenu />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 8 }} order={{ xs: 3, sm: 2 }}>
            <Stack direction="row" justifyContent="center">
              <PanelsMenu />
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2 }} order={{ xs: 2, sm: 3 }} sx={{}}>
            <Stack direction="row" justifyContent="flex-end">
              <HeaderControls />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Header;

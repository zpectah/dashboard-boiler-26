import { styled, CircularProgress } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ViewPreloader = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export default ViewPreloader;

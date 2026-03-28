import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { styled, Typography } from '@mui/material';

const MainWrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ErrorBoundary = () => {
  const error = useRouteError();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage =
      (error as { error?: { message?: string } })?.error?.message ||
      error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <MainWrapper>
      <Typography variant="h1">ERROR</Typography>
      <Typography variant="subtitle1">
        Sorry, an unexpected error has occurred
      </Typography>
      <Typography>{errorMessage}</Typography>
    </MainWrapper>
  );
};

export default ErrorBoundary;

import { Alert, type AlertProps } from '@mui/material';
import type { WithChildren } from '../../types';
import { Container, type ContainerProps } from '../layout';

interface AlertContainerProps extends WithChildren {
  alertProps?: Partial<Omit<AlertProps, 'children'>>;
  containerProps?: Partial<Omit<ContainerProps, 'children'>>;
}

const AlertContainer = ({
  children,
  alertProps,
  containerProps,
}: AlertContainerProps) => (
  <Container {...containerProps}>
    <Alert {...alertProps}>{children}</Alert>
  </Container>
);

export default AlertContainer;

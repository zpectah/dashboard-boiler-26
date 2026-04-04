import {
  Container as MuiContainer,
  type ContainerProps as MuiContainerProps,
} from '@mui/material';
import type { WithChildren } from '../../types';
import { containerMaxWidth } from '../../constants';

export type ContainerProps = WithChildren & Partial<MuiContainerProps>;

const Container = ({ children, ...rest }: ContainerProps) => (
  <MuiContainer maxWidth={containerMaxWidth} {...rest}>
    {children}
  </MuiContainer>
);

export default Container;

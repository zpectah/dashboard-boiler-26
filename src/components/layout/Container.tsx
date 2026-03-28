import {
  Container as MuiContainer,
  type ContainerProps as MuiContainerProps,
} from '@mui/material';
import type { WithChildren } from '../../types';
import { ContainerMaxWidth } from '../../constants';

export type ContainerProps = WithChildren & Partial<MuiContainerProps>;

const Container = ({ children, ...rest }: ContainerProps) => (
  <MuiContainer maxWidth={ContainerMaxWidth} {...rest}>
    {children}
  </MuiContainer>
);

export default Container;

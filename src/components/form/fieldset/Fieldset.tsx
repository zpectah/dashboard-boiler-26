import { styled } from '@mui/material';
import type { WithChildren } from '@/types';

const Wrapper = styled('fieldset')(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(3),
  borderWidth: '1px',
  borderColor: theme.palette.divider,
  borderRadius: theme.shape.borderRadius,
}));
const Legend = styled('legend')(({ theme }) => ({
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  fontSize: '1rem',
  fontWeight: 500,
}));

interface FieldsetProps extends WithChildren {
  title?: string;
}

const Fieldset = ({ children, title }: FieldsetProps) => {
  return (
    <Wrapper sx={{ paddingTop: title ? 0 : 2 }}>
      {title && <Legend>{title}</Legend>}
      {children}
    </Wrapper>
  );
};

export default Fieldset;

import { styled, Tooltip } from '@mui/material';
import type { MiniButtonProps } from './types';

const Wrapper = styled('button')(({ theme }) => ({
  width: '1.125rem',
  height: '1.125rem',
  margin: 0,
  padding: 0,
  background: 'none',
  color: theme.palette.text.secondary,
  fontSize: '.75rem',
  border: 'none',
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'color .125s ease-in-out, border-color .125s ease-in-out',

  '& svg': {
    width: '1rem',
    height: '1rem',
    lineHeight: 1,
  },

  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

const MiniButton = (props: MiniButtonProps) => {
  const { children, tooltip, tooltipProps, ...rest } = props;

  const button = (
    <Wrapper type="button" {...rest}>
      {children}
    </Wrapper>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} {...tooltipProps}>
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default MiniButton;

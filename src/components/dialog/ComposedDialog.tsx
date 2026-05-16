import {
  Dialog,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
} from '@mui/material';
import { CloseButton } from '../button';
import type { ComposedDialogProps } from './types';

const ComposedDialog = ({
  children,
  title,
  titleSlot,
  content,
  subcontent,
  actions,
  disableCloseButton,
  disableBackdropClose,
  disableEscapeClose,
  labelId,
  contentProps,
  subcontentProps,
  actionsProps,
  onClose,
  ...rest
}: ComposedDialogProps) => {
  const closeHandler = () => onClose?.({}, 'escapeKeyDown');

  return (
    <Dialog
      id={labelId}
      aria-labelledby={`${labelId}-title`}
      aria-describedby={`${labelId}-description`}
      onClose={(event, reason) => {
        if (disableBackdropClose && reason === 'backdropClick') return;
        if (disableEscapeClose && reason === 'escapeKeyDown') return;

        onClose?.(event, reason);
      }}
      {...rest}
    >
      {!disableCloseButton && (
        <CloseButton
          sx={({ spacing }) => ({
            position: 'absolute',
            top: spacing(1),
            right: spacing(1),
          })}
          onClick={closeHandler}
        />
      )}
      <Stack
        direction="row"
        spacing={2}
        sx={({ spacing }) => ({
          padding: spacing(2.25),
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        {title && <Typography variant="h3">{title}</Typography>}
        {titleSlot && (
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', justifyContent: 'center' }}
          >
            {titleSlot}
          </Stack>
        )}
      </Stack>
      {content && <DialogContent {...contentProps}>{content}</DialogContent>}
      {children}
      {subcontent && (
        <DialogContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          {...subcontentProps}
        >
          {subcontent}
        </DialogContent>
      )}
      {actions && <DialogActions {...actionsProps}>{actions}</DialogActions>}
    </Dialog>
  );
};

export default ComposedDialog;

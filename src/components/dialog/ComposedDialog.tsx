import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { CloseButton } from '../button';
import type { ComposedDialogProps } from './types';

const ComposedDialog = ({
  children,
  title,
  content,
  subcontent,
  actions,
  disableCloseButton,
  disableBackdropClose,
  labelId,
  titleProps,
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
      {title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
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

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import ComposedDialog from './ComposedDialog';
import { useDialogStore } from '../../store';

const ConfirmDialog = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const { confirmDialog, onCloseConfirmDialog } = useDialogStore();

  const confirmLabel = confirmDialog?.buttonLabel?.confirm
    ? confirmDialog?.buttonLabel?.confirm
    : t('button.confirm');
  const cancelLabel = confirmDialog?.buttonLabel?.cancel
    ? confirmDialog?.buttonLabel?.cancel
    : t('button.cancel');

  const confirmHandler = () => {
    confirmDialog?.onConfirm?.();
    onCloseConfirmDialog();
  };

  const cancelHandler = () => {
    setOpen(false);
    onCloseConfirmDialog();
    confirmDialog?.onCancel?.();
  };

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setOpen(!!confirmDialog), [confirmDialog]);

  return (
    <ComposedDialog
      open={open}
      onClose={cancelHandler}
      maxWidth="xs"
      fullWidth
      title={confirmDialog?.title}
      content={confirmDialog?.content}
      disableCloseButton
      actions={
        <>
          <Button variant="outlined" onClick={cancelHandler}>
            {cancelLabel}
          </Button>
          <Button variant="contained" onClick={confirmHandler}>
            {confirmLabel}
          </Button>
        </>
      }
    />
  );
};

export default ConfirmDialog;

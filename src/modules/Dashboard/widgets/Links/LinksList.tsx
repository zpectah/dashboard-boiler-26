import { useTranslation } from 'react-i18next';
import { Box, Stack } from '@mui/material';
import type { UserLinks } from '../../../../types';
import { useAppStore, useDialogStore } from '../../../../store';
import { IconButtonPlus } from '../../../../components';

interface LinksListProps {
  panelId: string;
  links?: UserLinks;
}

const LinksList = ({ panelId, links = [] }: LinksListProps) => {
  const { t } = useTranslation(['common', 'feedback']);
  const { removePanelLink } = useAppStore();
  const { openLinkDetailDialog, onOpenConfirmDialog, addToast } =
    useDialogStore();

  const removePanelLinkHandler = (panelId: string, linkId: string) => {
    onOpenConfirmDialog({
      title: t('feedback:message.linkDelete.title'),
      content: t('feedback:message.linkDelete.content'),
      onConfirm: () => {
        removePanelLink(panelId, linkId);
        addToast({
          title: t('feedback:success.linkDeleted'),
          severity: 'success',
          autoclose: true,
        });
      },
    });
  };

  return (
    <Box>
      <Stack>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              {link.label}
              <button
                type="button"
                onClick={() => removePanelLinkHandler(panelId, link.id)}
              >
                {t('common:button.delete')}
              </button>
              <button
                type="button"
                onClick={() => openLinkDetailDialog(link.id)}
              >
                {t('common:button.edit')}
              </button>
            </li>
          ))}
        </ul>
        <IconButtonPlus
          tooltip={t('common:button.newLink')}
          onClick={() => openLinkDetailDialog('new')}
        >
          +
        </IconButtonPlus>
      </Stack>
    </Box>
  );
};

export default LinksList;

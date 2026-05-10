import { useTranslation } from 'react-i18next';
import { styled, Stack, Link } from '@mui/material';
import { IconX, IconPencil } from '@tabler/icons-react';
import { useAppStore, useDialogStore, usePanelsStore } from '@/store';
import type { UserLink } from '@/types';
import { getFaviconUrl } from '@/utils';
import { MiniButton } from '@/components';

const Wrapper = styled(Stack)(({ theme }) => ({
  padding: 0,
  flexDirection: 'row',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.alpha(theme.palette.text.secondary, 0.25)}`,
  borderRadius: theme.shape.borderRadius,
  transition: 'border-color .125s ease-in-out',

  '&:hover': {
    borderColor: theme.alpha(theme.palette.text.primary, 0.75),
  },
}));
const CustomLink = styled(Link)(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  fontSize: '.9rem',
  fontWeight: 500,
  transition: 'color .125s ease-in-out',
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),

  '&:hover': {
    color: theme.palette.text.primary,
  },
}));
const Favicon = styled('img')({
  width: 16,
  height: 16,
  flexShrink: 0,
});

interface LinksWidgetLinkProps {
  panelId: string;
  link: UserLink;
}

const LinksWidgetLink = ({ panelId, link }: LinksWidgetLinkProps) => {
  const { id, label, url } = link;

  const { t } = useTranslation();
  const { openLinkDetail, openConfirmDialog, addToast } = useDialogStore();
  const { onLinkDelete } = usePanelsStore();
  const { editMode } = useAppStore();

  const faviconUrl = getFaviconUrl(url);

  const linkDeleteHandler = (id: string) => {
    openConfirmDialog({
      title: t('feedback.confirm.delete_link.title'),
      content: t('feedback.confirm.delete_link.content'),
      onConfirm: () => {
        onLinkDelete(panelId, id);
        addToast({
          severity: 'success',
          title: t('feedback.success.link_deleted'),
          autoclose: true,
        });
      },
    });
  };

  return (
    <Wrapper>
      <CustomLink href={url} target="_blank">
        {faviconUrl && <Favicon src={faviconUrl} alt={label} loading="lazy" />}
        {label}
      </CustomLink>
      {editMode && (
        <Stack direction="row" spacing={0.5} sx={{ pr: 1 }}>
          <MiniButton
            tooltip={t('button.edit')}
            onClick={() => openLinkDetail(id)}
          >
            <IconPencil />
          </MiniButton>
          <MiniButton
            tooltip={t('button.delete')}
            onClick={() => linkDeleteHandler(id)}
          >
            <IconX />
          </MiniButton>
        </Stack>
      )}
    </Wrapper>
  );
};

export default LinksWidgetLink;

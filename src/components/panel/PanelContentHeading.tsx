import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Stack, Typography, Collapse } from '@mui/material';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import type { Panel } from '@/types';
import { mainPanelId } from '@/constants';
import { useDialogStore, usePanelsStore, useAppStore } from '@/store';
import { IconButtonPlus } from '../button';
import { Container } from '../layout';

interface PanelContentHeadingProps {
  panel: Panel;
}

const PanelContentHeading = ({ panel }: PanelContentHeadingProps) => {
  const { t } = useTranslation();
  const { openPanelDetail, openConfirmDialog, addToast } = useDialogStore();
  const { onPanelDelete } = usePanelsStore();
  const { editMode } = useAppStore();
  const navigate = useNavigate();

  const panelId = panel.id;
  const isHomePanel = panelId === mainPanelId;

  const panelDeleteHandler = () => {
    if (isHomePanel) return;

    openConfirmDialog({
      title: t('feedback.confirm.delete_panel.title'),
      content: t('feedback.confirm.delete_panel.content'),
      onConfirm: () => {
        addToast({
          severity: 'success',
          title: t('feedback.success.panel_deleted'),
          autoclose: true,
        });
        navigate('/');
        setTimeout(() => onPanelDelete(panelId), 125);
      },
    });
  };

  const actions = [
    {
      id: 'edit',
      label: t('button.edit'),
      onclick: () => openPanelDetail(panel.id),
      icon: <IconPencil />,
    },
    {
      id: 'delete',
      label: t('button.delete'),
      hidden: isHomePanel,
      onclick: panelDeleteHandler,
      icon: <IconTrash />,
    },
  ];

  // if (!editMode) return;

  return (
    <Collapse
      in={editMode}
      timeout={350}
      sx={{
        width: '100%',
      }}
    >
      <Container>
        <Stack
          id="panel-content-heading"
          direction="row"
          spacing={2}
          sx={({ spacing }) => ({
            padding: spacing(2),
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Typography variant="h5">{panel.label}</Typography>
          <Stack direction="row" spacing={1}>
            {actions.map((item) => {
              if (item.hidden) return;

              return (
                <IconButtonPlus
                  key={item.id}
                  type="button"
                  tooltip={item.label}
                  onClick={() => item.onclick()}
                >
                  {item.icon}
                </IconButtonPlus>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Collapse>
  );
};

export default PanelContentHeading;

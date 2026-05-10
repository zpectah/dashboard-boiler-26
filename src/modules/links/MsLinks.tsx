import { links } from '../../data';
import { useDialogStore } from '../../store';
import { ComposedDrawer, DrawerLinks } from '../../components';

const MsLinks = () => {
  const { msLinksOpen, toggleMsLinks } = useDialogStore();

  return (
    <>
      <ComposedDrawer
        open={msLinksOpen}
        onClose={toggleMsLinks}
        title="Microsoft"
        width={{
          xs: '100%',
          sm: '320px',
        }}
      >
        <DrawerLinks items={links.brand.microsoft} />
      </ComposedDrawer>
    </>
  );
};

export default MsLinks;

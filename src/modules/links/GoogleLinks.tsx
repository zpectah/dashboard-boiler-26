import { links } from '../../data';
import { useDialogStore } from '../../store';
import { ComposedDrawer, DrawerLinks } from '../../components';

const GoogleLinks = () => {
  const { googleLinksOpen, toggleGoogleLinks } = useDialogStore();

  return (
    <>
      <ComposedDrawer
        open={googleLinksOpen}
        onClose={toggleGoogleLinks}
        title="Google"
        width={{
          xs: '100%',
          sm: '320px',
        }}
      >
        <DrawerLinks items={links.brand.google} />
      </ComposedDrawer>
    </>
  );
};

export default GoogleLinks;

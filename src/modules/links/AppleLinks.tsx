import { links } from '../../data';
import { useDialogStore } from '../../store';
import { ComposedDrawer, DrawerLinks } from '../../components';

const AppleLinks = () => {
  const { appleLinksOpen, toggleAppleLinks } = useDialogStore();

  return (
    <>
      <ComposedDrawer
        open={appleLinksOpen}
        onClose={toggleAppleLinks}
        title="Apple"
        width={{
          xs: '100%',
          sm: '320px',
        }}
      >
        <DrawerLinks items={links.brand.apple} />
      </ComposedDrawer>
    </>
  );
};

export default AppleLinks;

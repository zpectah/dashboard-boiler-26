import { IconBrandAppleFilled } from '@tabler/icons-react';
import { useDialogStore } from '../../store';
import { IconButtonPlus } from '../button';
import { Drawer } from '../drawer';

const AppleLinks = () => {
  const { appleLinks, setAppleLinks } = useDialogStore();

  return (
    <>
      <IconButtonPlus tooltip="Apple links" onClick={() => setAppleLinks(true)}>
        <IconBrandAppleFilled />
      </IconButtonPlus>

      <Drawer
        anchor="left"
        open={appleLinks}
        onClose={() => setAppleLinks(false)}
        title="Apple links"
        width={{
          xs: '100%',
          md: '480px',
        }}
      >
        Drawer
        <br />
        <p>
          Mi sapien eleifend adipiscing sagittis pulvinar congue a pellentesque
          id elit quis risus facilisis a. Pulvinar viverra sapien amet risus ut
          euismod sagittis adipiscing dapibus diam donec vel pulvinar facilisis.
          Aliquam a nunc metus nibh sollicitudin pharetra ac metus tincidunt
          consectetur tellus facilisis mauris libero. Lacus vestibulum bibendum
          sagittis cursus ex pulvinar non dignissim aliquam eget eget commodo
          quam ut. Integer nibh curabitur amet ipsum sit sed libero blandit
          vestibulum diam vehicula a nec nec.
        </p>
      </Drawer>
    </>
  );
};

export default AppleLinks;

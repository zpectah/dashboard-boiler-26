import {
  ImageRefresh,
  ThemeModeToggle,
  LocalesMenu,
  EditModeToggle,
} from '../controls';

const HeaderControls = () => {
  return (
    <>
      <LocalesMenu />
      <ImageRefresh />
      <ThemeModeToggle />
      <EditModeToggle />
      {/* TODO */}
    </>
  );
};

export default HeaderControls;

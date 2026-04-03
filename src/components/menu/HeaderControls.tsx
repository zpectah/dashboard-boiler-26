import {
  ImageRefresh,
  ThemeModeToggle,
  LocalesMenu,
  SettingsFormToggle,
} from '../controls';

const HeaderControls = () => {
  return (
    <>
      <ThemeModeToggle />
      <ImageRefresh />
      <LocalesMenu />
      <SettingsFormToggle />
    </>
  );
};

export default HeaderControls;

import { useAppStore } from '../../store';
import GoogleLinks from './GoogleLinks';
import MicrosoftLinks from './MicrosoftLinks';
import AppleLinks from './AppleLinks';

const AppsMenu = () => {
  const { features } = useAppStore();

  return (
    <>
      {/* TODO #main-app */}
      {features.googleLinks && <GoogleLinks />}
      {features.msLinks && <MicrosoftLinks />}
      {features.appleLinks && <AppleLinks />}
    </>
  );
};

export default AppsMenu;

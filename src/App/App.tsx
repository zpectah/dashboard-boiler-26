import { useEffect } from 'react';
import { useAppStore } from '../store';
import AppProvider from './AppProvider';
import AppRouter from './AppRouter';

import '../i18n';
import '../helpers/localesInit';

const App = () => {
  const { onChangeHash } = useAppStore();

  useEffect(() => {
    onChangeHash();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;

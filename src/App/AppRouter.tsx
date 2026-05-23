import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { panelViewPath } from '@/constants';
import { DashboardView, ErrorBoundary } from '@/views';
import {
  Toasts,
  SettingsForm,
  LinkDetailForm,
  PanelDetailForm,
  GoogleLinks,
  AppleLinks,
  MsLinks,
  IntroductionForm,
} from '@/modules';
import { ConfirmDialog } from '@/components';
import AppLayout from './AppLayout';

const MainPanel = lazy(() => import('../modules/MainPanel/MainPanel.tsx'));
const CustomPanel = lazy(
  () => import('../modules/CustomPanel/CustomPanel.tsx'),
);

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <AppLayout
          slot={
            <>
              <IntroductionForm />
              <SettingsForm />
              <LinkDetailForm />
              <PanelDetailForm />
              <GoogleLinks />
              <AppleLinks />
              <MsLinks />
              <ConfirmDialog />
              <Toasts />
            </>
          }
        />
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          element: <DashboardView />,
          children: [
            {
              index: true,
              element: <MainPanel />,
            },
            {
              path: `${panelViewPath}/:panel`,
              element: <CustomPanel />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

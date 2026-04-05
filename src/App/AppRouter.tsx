import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardView } from '../views';
import { AppLayout } from '../components';
import { ErrorBoundary, Toasts } from '../modules';
import { LinkDetailForm, PanelDetailForm, SettingsForm } from '../forms';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <AppLayout
          slot={
            <>
              <LinkDetailForm />
              <PanelDetailForm />
              <SettingsForm />
              <Toasts />
            </>
          }
        />
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <DashboardView />,
        },
        {
          path: '/:panel',
          element: <DashboardView />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

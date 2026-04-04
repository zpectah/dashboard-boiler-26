import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardView } from '../views';
import { AppLayout } from '../components';
import { ErrorBoundary, Toasts } from '../modules';
import { PanelDetailForm, SettingsForm } from '../forms';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <AppLayout
          slot={
            <>
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

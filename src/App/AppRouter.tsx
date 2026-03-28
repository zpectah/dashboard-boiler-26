import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardView } from '../views';
import { AppLayout } from '../components';
import { ErrorBoundary } from '../modules';
import { PanelDetailForm } from '../forms';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: (
        <AppLayout
          slot={
            <>
              <PanelDetailForm />
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

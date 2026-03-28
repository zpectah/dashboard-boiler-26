import { lazy, Suspense } from 'react';
import { ViewPreloader } from '../components';

const Dashboard = lazy(() => import('../modules/Dashboard/Dashboard'));

const DashboardView = () => {
  return (
    <Suspense fallback={<ViewPreloader />}>
      <Dashboard />
    </Suspense>
  );
};

export default DashboardView;

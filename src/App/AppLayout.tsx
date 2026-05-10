import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface AppLayoutProps {
  slot?: ReactNode;
}

const AppLayout = ({ slot }: AppLayoutProps) => {
  return (
    <div id="app-layout">
      <Outlet />
      {slot}
    </div>
  );
};

export default AppLayout;

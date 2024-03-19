import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import Topbar from '@/components/shared/Topbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='w-full flex h-screen'>
      <LeftSidebar />

      <div className='flex flex-col flex-grow'>
        <Topbar />
        <section className='flex p-6  h-full'>
          <Outlet />
        </section>
        <Bottombar />
      </div>
    </div>
  );
};

export default RootLayout;

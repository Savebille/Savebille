import React from 'react';
import Sidebar from '../../components/Sidebar';
import Text from '../../components/Text';
import MobileMenu from '../../components/MobileMenu';
import IMAGES from '../../shared/constants/images';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../shared/constants/routes';
import SearchInput from '../../components/SearchInput';
import NotificationIcon from '../../components/NotificationIcon';
import UserAvatar from '../../components/UserAvatar';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className='flex h-screen relative'>
      {/* SIDEBAR */}
      <div className='hidden lg:flex lg:flex-col z-[80]'>
        <Sidebar />
      </div>

      {/* NAVBAR */}
      <div className='flex flex-col w-full relative'>
        {/* NAVBAR MOBILE */}
        <div className='bg-h-white w-full h-auto flex flex-col justify-between px-6 py-2 sticky top-0 lg:hidden gap-2 border-b border-h-gray'>
          {/* UP */}
          <div className='w-full flex items-center justify-between h-[50px]'>
            {/* Logo */}
            <button
              onClick={() => navigate(ROUTES.ROOT)}
              className='flex items-center gap-3'
            >
              <img
                src={IMAGES.CASHICON}
                alt='avatar'
                width={50}
                height={50}
                className='hidden sm:block'
              />
              <Text color='info' size='title' weight='bold'>
                Savebille
              </Text>
            </button>

            {/* User Information */}
            <div className='flex items-center gap-3 overflow-hidden'>
              <NotificationIcon />
              <UserAvatar />
            </div>
          </div>

          {/* DOWN */}
          <div className='w-full h-11 flex items-center justify-between  bg-h-gray-input border-2 border-h-gray rounded-md p-2'>
            <SearchInput
              width='w-full'
              height='h-full'
              placeHolder='Type here to search'
            />
          </div>
        </div>

        {/* NAVBAR DESKTOP */}
        <div className='bg-h-white hidden lg:flex lg:justify-between lg:items-center h-[100px] border-b border-h-gray ml-60 p-6 gap-6 sticky top-0'>
          {/* Left Side */}
          <div className='bg-h-gray-input flex items-center justify-between lg:w-[400px] rounded-md h-11 p-2 border-2 border-h-gray'>
            <SearchInput
              width='w-auto'
              height='h-full'
              placeHolder='Type here to search'
            />
            <button className='bg-h-white h-8 w-auto px-2 rounded-lg shadow hidden lg:flex lg:items-center lg:justify-center'>
              <Text size='medium' weight='semibold' color='primary'>
                ⌘ F
              </Text>
            </button>
          </div>

          {/* Right-Side */}
          <div className='bg-h-white flex items-center justify-between w-auto h-11 gap-3'>
            <NotificationIcon />

            {/* user-info */}
            <div className='w-auto h-full flex items-center gap-3 overflow-hidden'>
              <UserAvatar />

              {/* user-details */}
              <div className='hidden lg:flex lg:flex-col lg:justify-center lg:h-auto gap-1'>
                <Text size='large' weight='bold' color='primary'>
                  Martin Rubiano
                </Text>
                <Text size='small' color='secondary'>
                  martin.savebille@gmail.com
                </Text>
              </div>
            </div>
          </div>
        </div>

        <main className={`flex-1 h-full pb-14 md:pb-0 ml-0 lg:ml-60`}>
          <MobileMenu />
          {children}
        </main>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);

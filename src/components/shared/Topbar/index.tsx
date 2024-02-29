import React from 'react';
import Text from '../../../components/Text';
import IMAGES from '../../../shared/constants/images';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../../../shared/constants/routes';
import SearchInput from '../../../components/SearchInput';
import NotificationIcon from '../../../components/NotificationIcon';
import { useUserContext } from '@/context/AuthContext';
import Loader from '../../shared/Loader';

const Topbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading: isUserLoading } = useUserContext();

  return (
    <div className='flex w-full relative'>
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
            <Text color='info' size='h1' weight='bold'>
              Savebille
            </Text>
          </button>

          {/* User Information */}
          <div className='flex items-center gap-3 overflow-hidden'>
            <NotificationIcon />
            <Link to={`/profile/${user.id}`}>
              <img
                src={user.imageUrl || IMAGES.ICONS.USERPROFILE}
                alt='user-avatar'
                className='w-11 h-11 rounded-full object-cover object-center'
              />
            </Link>
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
      <div className='bg-h-white hidden lg:flex lg:justify-between lg:items-center w-full h-[100px] border-b border-h-gray p-6 gap-6 sticky top-0'>
        {/* Left Side */}
        <div className='bg-h-gray-input flex items-center justify-between lg:w-[400px] rounded-md h-11 p-2 border-2 border-h-gray'>
          <SearchInput
            width='w-auto'
            height='h-full'
            placeHolder='Type here to search'
          />
          <button className='bg-h-white h-8 w-auto px-2 rounded-lg shadow hidden lg:flex lg:items-center lg:justify-center'>
            <Text size='h5' weight='semibold' color='primary'>
              ⌘ F
            </Text>
          </button>
        </div>

        {/* Right-Side */}
        <div className='bg-h-white flex items-center justify-between w-auto h-11 gap-3'>
          <NotificationIcon />

          {/* user-info */}
          <div className='w-auto h-full flex items-center gap-3 overflow-hidden'>
            {isUserLoading ? (
              <Loader />
            ) : (
              <>
                {' '}
                <Link to={`/profile/${user.id}`}>
                  <img
                    src={user.imageUrl || IMAGES.ICONS.USERPROFILE}
                    alt='user-avatar'
                    className='w-11 h-11 rounded-full object-cover object-center'
                  />
                </Link>
                <div className='hidden lg:flex lg:flex-col lg:justify-center lg:h-auto gap-1'>
                  <Text size='h4' weight='bold' color='primary'>
                    {user.name}
                  </Text>
                  <Text size='text-1' weight='regular' color='secondary'>
                    {user.email}
                  </Text>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Topbar);

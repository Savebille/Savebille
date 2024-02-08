import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import { Bell, ArrowDown, MagnifyingGlass } from '@phosphor-icons/react';
import Text from '../../components/Text';
import MobileMenu from '../../components/MobileMenu';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (
    <div className='flex h-screen relative'>
      {/* Sidebar */}
      <div className='hidden lg:flex lg:flex-col z-[80]'>
        <CollapsibleSidebar />
      </div>

      <div className='flex flex-col w-full relative'>
        <div className='bg-h-white w-full'>

          <div className='bg-h- flex w-full lg:hidden p-4 sticky justify-between'>
            <div className='flex gap-4 ml-2'>
              <img
                src='https://cdn.iconscout.com/icon/premium/png-512-thumb/finance-1433977-1212011.png?f=webp&w=256'
                alt='avatar'
                width={50}
                height={50}
              />
              <Text
                color='info'
                size='title'
                weight='bold'
              >
                Savebille
              </Text>
            </div>
            {/* Logo Info */}
            <div className='flex items-center gap-1'>
              <div className='flex bg-h-gray-input rounded-full items-center justify-center mx-4 p-2 border-b border-h-gray'>
                <Bell size={20} />
              </div>
              <img
                src='src/assets/img/LoginAvatar.png'
                alt='logo'
                className='w-[42px] h-[42px] rounded-full mr-2' />
            </div>
          </div>
          {/* Input Mobile */}
          <div className='bg-h-white p-4 mx-2 lg:hidden' >
            <div className='bg-h-gray-input flex-start items-center place-content-center p-2 rounded-md h-[42px]lg:hidden xl:hidden'>
              <div className='flex items-center justify-between h-[20px] gap-3'>
                <div className='flex justify-center items-center'>
                  <MagnifyingGlass color='#233145' size={20} />
                </div>
                <input
                  type='text'
                  placeholder='Type here to search'
                  className='bg-h-gray-input h-full border-h-info focus:outline-none text-h-secondary text-sm w-full px-1 ' />
              </div>
            </div>
          </div>
        </div>


        <div className='bg-h-whiter lg:flex hidden justify-between items-center  z-[150] h-[100px] border-b border-h-gray'>
          {/* Leftside */}

          {/* Input */}
          <div className='bg-h-gray-input lg:flex lg:items-center lg:justify-between p-2 rounded-md h-[42px] lg:w-[432px] md:hidden hidden ml-[340px]'>
            <div className='flex items-center justify-between h-[20px] lg:w-auto gap-2'>
              <div className='flex justify-center items-center md:block'>
                <MagnifyingGlass color='#233145' size={20} />
              </div>
              <input
                type='text'
                placeholder='Type here to search'
                className='bg-h-gray-input h-full w-full border-h-info focus:outline-none text-h-secondary text-sm' />
            </div>

            <div className='bg-h-white h-[32px] min-w-[52px] rounded-lg p-2 shadow md:hidden lg:block'>
              <Text size='medium' weight='semibold' color='primary'>
                ⌘ F
              </Text>
            </div>
          </div>

          {/* Rightside */}
          <div className='bg-h-white flex items-center justify-between w-auto h-[42px]'>
            {/* user-account */}
            <div className='lg:flex items-center hidden'>
              <div className='bg-h-gray-input rounded-full h-[42px] w-[42px] flex items-center justify-center mx-4 border-b border-h-gray'>
                <Bell size={20} />
              </div>

              {/* user-info */}
              <div className='w-[310px] h-[42px] xl:flex xl:justify-between xl:items-center'>
                <div className='flex items-center gap-3'>
                  <img
                    src='src/assets/img/LoginAvatar.png'
                    alt=''
                    className='w-[42px] h-[42px] rounded-full hidden lg:block' />

                  <div className='lg:flex-col lg:h-[38px] lg:gap-1 lg:block hidden'>
                    <Text size='large' weight='bold' color='primary'>
                      Martin Rubiano
                    </Text>
                    <Text size='small' color='secondary'>
                      martin.savebille@gmail.com
                    </Text>
                  </div>
                  <div className='lg:w-[28px] lg:h-[28px] lg:items-center lg:block hidden'>
                    <ArrowDown size={20} color='#8E98A7' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main
          className={`flex-1 h-full pb-14 md:pb-0 ml-0 lg:ml-60`}
        >
          <MobileMenu />
          {children}
        </main>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);

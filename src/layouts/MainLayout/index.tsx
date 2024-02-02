import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import { Bell, MagnifyingGlass, ArrowDown } from '@phosphor-icons/react';
import Text from '../../components/Text';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = window.innerWidth > 768;

  return (
    <div className='flex h-full relative'>
      {isDesktop && (
        <div
          className={`md:flex md:flex-col md:fixed md:inset-y-0 z-[80] ${
            !isDesktop ? 'hidden md:w-0' : 'md:w-0'
          }`}
        >
          <CollapsibleSidebar />
        </div>
      )}

      {/* TODO : NavBar */}
      <div className='flex flex-col w-full relative'>
        <div
          className={`flex items-center justify-center bg-white shadow ${
            !isDesktop ? 'sticky top-0 md:static' : 'sticky top-0'
          } z-40`}
        >
          <div className='flex justify-between items-center bg-h-white w-full z-[150] ml-52 p-9 h-[100px] '>
            {/* Leftside */}
            <div className='bg-h-gray-input flex items-center justify-between p-2 w-[450px] rounded-md h-[42px]'>
              <div className='flex items-center justify-between h-[20px] w-[320px] gap-2'>
                <div className='flex justify-center items-center'>
                  <MagnifyingGlass color='#233145' size={20} />
                </div>
                <input
                  type='text'
                  placeholder='Type here to search'
                  className='bg-h-gray-input h-full w-full border-h-info focus:outline-none text-h-secondary text-sm'
                />
              </div>

              <div className='bg-h-white h-[32px] w-[52px] rounded-lg py-1 flex justify-center items-center shadow'>
                <Text size='medium' weight='semibold' color='primary'>
                  ⌘ F
                </Text>
              </div>
            </div>

            {/* Rightside */}
            <div className='bg-h-white flex items-center justify-between w-auto h-[42px]'>
              {/* user-account */}
              <div className='flex items-center'>
                <div className='bg-h-gray-input rounded-full h-[42px] w-[42px] flex items-center justify-center mr-8 border-[1px] border-h-gray'>
                  <Bell size={20} />
                </div>

                {/* user-info */}
                <div className='w-[310px] h-[42px] flex justify-between items-center'>
                  <div className='flex items-center gap-3'>
                    <img
                      src='src/assets/img/LoginAvatar.png'
                      alt=''
                      className='w-[42px] h-[42px] rounded-full'
                    />

                    <div className='flex flex-col h-[38px] justify-between'>
                      <Text size='large' weight='bold' color='primary'>
                        Martin Rubiano
                      </Text>
                      <Text size='small' color='secondary'>
                        martin.savebille@gmail.com
                      </Text>
                    </div>
                  </div>

                  <div className='w-[28px] h-[28px] flex justify-center items-center '>
                    <ArrowDown size={20} color='#8E98A7' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main
          className={`flex-1 h-full ${
            isDesktop ? 'ml-[60px]' : 'ml-0'
          } pb-14 md:pb-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);

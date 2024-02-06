import React from 'react';
import CollapsibleSidebar from '../../components/CollapsibleSidebar';
import { Bell, ArrowDown } from '@phosphor-icons/react';
import Text from '../../components/Text';
import Input from './components/input';


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
          <CollapsibleSidebar/>
        </div>
      )}

      {/* TODO : NavBar */}
      <div className='flex flex-col w-full relative '>
        <div
          className={`flex items-center justify-center bg-white ${!isDesktop ? 'sticky top-0 md:static' : 'sticky top-0'} z-40`}
        >
          <div className='flex justify-between items-center  w-full z-[150] p-9 h-[100px] border-b border-h-gray xl:ml-60'>
            {/* Leftside */}
            <div className='xl:hidden'>
              <img 
               src="https://cdn.iconscout.com/icon/premium/png-512-thumb/finance-1433977-1212011.png?f=webp&w=256"
               alt="bill"
               width={42}
               height={42}
                />
            </div>
            
          {/* Input */}
           <Input />

            {/* Rightside */}
            <div className='bg-h-white flex items-center justify-between w-auto h-[42px]'>
              {/* user-account */}
              <div className='flex items-center'>
                <div className='bg-h-gray-input rounded-full h-[42px] w-[42px] flex items-center justify-center mx-4 border-b  border-h-gray'>
                  <Bell size={20} />
                </div>

                {/* user-info */}
                <div className='w-[310px] h-[42px] xl:flex xl:justify-between xl:items-center'>
                  <div className='flex items-center gap-3'>
                    <img
                      src='src/assets/img/LoginAvatar.png'
                      alt=''
                      className='w-[42px] h-[42px] rounded-full'
                    />

                    <div className='lg:flex lg:flex-col lg:h-[38px] lg:justify-between lg:gap-1 md:block hidden'>
                      <Text size='large' weight='bold' color='primary'>
                        Martin Rubiano
                      </Text>
                      <Text size='small' color='secondary'>
                        martin.savebille@gmail.com
                      </Text>
                    </div>
                    <div className='lg:w-[28px] lg:h-[28px] lg:justify-content lg:items-center lg:block hidden'>
                      <ArrowDown size={20} color='#8E98A7' />
                    </div>
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

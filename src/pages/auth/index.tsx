import React from 'react';
import Text from '../../components/Text';
import AutheenticationBanner from '../../assets/img/AuthenticationBanner.jpg'


const Login: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-[#FCFCFC] flex flex-row justify-between rounded-3xl shadow-lg w-[1438px] h-[954px]'>
        <div className='flex flex-col items-center my-20 mx-[130px] w-[557px] h-[794px]'>
          <div className=' w-[289px] h-[200px] flex flex-col justify-between items-center'>
            <div className=' w-[90px] h-[90px] bg-black overflow-hidden rounded-full'>
              <img src='src/assets/img/AuthenticationBanner.jpg' alt='' />
            </div>

            <div className='w-[289px] h-[74px] flex flex-col justify-center items-center'>
              <Text weight='medium' size='mostLarge'>
                Welcome back
              </Text>
              <Text weight='light' size='extraLarge'>
                Please enter your details to sign in.
              </Text>
            </div>
          </div>
        </div>

        <div className='w-[630px] h-[954px]'>
          <img
            src='src/assets/img/AuthenticationBanner.jpg'
            alt='Authenticaction Banner'
            className='rounded-r-3xl h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);

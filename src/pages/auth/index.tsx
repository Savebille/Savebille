import React from 'react';
import { Eye } from '@phosphor-icons/react';
import Text from '../../components/Text';

const Login: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      {/* main container */}
      <div className='bg-h-white flex flex-row justify-between rounded-3xl shadow-lg w-[1438px] h-[954px]'>
        {/* form */}
        <div className='w-[557px] h-[794px] mx-[130px] my-[80px] flex flex-col items-center'>
          <div className='w-[289px] h-[200px] flex flex-col items-center justify-between'>
            {/* imagen */}
            <div className='w-[90px] h-[90px] overflow-hidden rounded-full'>
              <img src='src/assets/img/AuthenticationBanner.jpg' />
            </div>

            {/* textos */}
            <div className='w-[289px] h-[74px] flex flex-col items-center justify-center'>
              <Text weight='medium' color='primary' size='title'>
                Welcome back
              </Text>
              <Text
                weight='regular'
                color='secondary'
                size='extraLarge'
                sx='mt-2'
              >
                Please enter your details to sign in.
              </Text>
            </div>
          </div>

          {/* buttons */}
          <div className='w-[556px] h-[50px] flex flex-row justify-between items-center mt-10'>
            <button className='w-[172px] h-full rounded-[10px]  border-[1.5px] border-h-gray flex justify-center items-center'>
              <img src='src/assets/img/apple.svg' alt='apple icon' />
            </button>
            <button className='w-[172px] h-full rounded-[10px]  border-[1.5px] border-h-gray flex justify-center items-center'>
              <img src='src/assets/img/google.svg' alt='google icon' />
            </button>
            <button className='w-[172px] h-full rounded-[10px]  border-[1.5px] border-h-gray flex justify-center items-center'>
              <img src='src/assets/img/x.svg' alt='x icon' />
            </button>
          </div>

          {/* OR */}
          <div className='w-[556px] h-[19px] items-center grid grid-cols-3 mt-8'>
            <hr className='border-[1.5px] border-h-gray' />
            <div className='flex justify-center'>
              <Text weight='regular' color='primary' size='medium'>
                OR
              </Text>
            </div>
            <hr className='border-[1.5px] border-h-gray' />
          </div>

          {/* form */}
          <div className='w-[556px] h-[194px] flex flex-col items-center'>
            {/* input */}
            <form className='w-full h-[150px]'>
              <input
                type='email'
                name='user-email'
                placeholder='Enter your email...'
              />
              <div>
                <input
                  type='password'
                  name='user-password'
                  placeholder='Enter your password...'
                />
                <Eye />
              </div>
            </form>

            {/* remember password */}
            <div>
              <label>
                <input type='checkbox' />
                Remember me
              </label>

              <Text>Forgot password?</Text>
            </div>
          </div>
        </div>

        {/* img */}
        <div className='w-[630px] h-[954px]'>
          <img
            src='src/assets/img/AuthenticationBanner.jpg'
            alt='Authentication Banner'
            className='rounded-r-3xl h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);

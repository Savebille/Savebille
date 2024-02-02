import React from 'react';
import { Eye } from '@phosphor-icons/react';
import Text from '../../components/Text';

const Login: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      {/* main container */}
      <div className='bg-h-white flex flex-row justify-between rounded-3xl shadow-lg w-[1438px] h-[954px]'>
        {/* form */}
        <div className='w-[557px] h-[794px] mx-[130px] my-[80px] flex flex-col items-center justify-between'>
          <div className='w-[289px] h-[200px] flex flex-col items-center justify-between'>
            {/* avatar */}
            <div className='w-[90px] h-[90px] overflow-hidden rounded-full shadow-xl'>
              <img src='src/assets/img/LoginAvatar.png' alt='user avatar' />
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
          <div className='w-[556px] h-[194px] flex flex-col items-center mt-10 justify-between'>
            {/* input */}
            <form className='w-full h-[150px] flex flex-col justify-between'>
              <input
                type='email'
                name='user-email'
                placeholder='Enter your email...'
                className='w-full h-[50px] border-[1px] border-h-gray rounded-[10px] px-4 bg-h-gray-input focus:outline-none'
              />
              <div className='relative'>
                <input
                  type='password'
                  name='user-password'
                  placeholder='Enter your password...'
                  className='w-full h-[50px] border-[1px] border-h-gray rounded-[10px] pl-4 pr-14 bg-h-gray-input  focus:outline-none'
                />
                <Eye
                  className='absolute top-1/2 -translate-y-3 right-4 text-h-secondary'
                  size={24}
                />
              </div>
            </form>

            {/* remember password */}
            <div className='w-full h-6 flex justify-between items-center'>
              <label className='w-[150px] h-full flex items-center text-h-secondary text-base'>
                <input type='checkbox' className='mr-3 checkbox-input' />
                Remember me
              </label>

              <a href='#'>
                <Text color='info' sx='underline' size='medium'>
                  Forgot password?
                </Text>
              </a>
            </div>
          </div>

          {/* Button SignIn */}
          <button className='w-[556px] h-[56px] rounded-xl bg-h-info flex justify-center items-center mt-20'>
            <Text weight='medium' color='white' size='extraLarge'>
              Sign in
            </Text>
          </button>

          {/* Sign Up */}
          <div className='w-[300px] h-[20px] flex justify-center items-center mt-10'>
            <Text color='secondary' weight='regular' size='medium' sx='mr-1'>
              Don't have an account yet?
            </Text>
            <a href='#'>
              <Text color='primary' weight='medium' size='medium'>
                Sign Up
              </Text>
            </a>
          </div>
        </div>

        {/* img */}
        <div className='w-[630px] h-[954px]'>
          <img
            src='src/assets/img/LoginBanner.png'
            alt='Login Banner'
            className='rounded-r-3xl h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);

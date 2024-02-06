import React from 'react';
import { Eye } from '@phosphor-icons/react';
import Text from '../../components/Text';

const Login: React.FC = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      {/* main container */}
      <div className='bg-h-white flex flex-col-reverse lg:flex-row justify-between rounded-3xl shadow-lg max-w-[1438px] max-h-[954px] w-[90%] h-[80%]'>
        {/* form */}
        <div className='w-full h-[80%]  lg:w-[58%] lg:h-full p-[30px] lg:p-[80px] xl:px-[120px] flex flex-col items-center justify-between'>
          {/* header */}
          <div className='w-full h-auto flex flex-col items-center justify-between gap-2'>
            {/* avatar */}
            <div className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] overflow-hidden rounded-full shadow-xl'>
              <img
                src='src/assets/img/LoginAvatar.png'
                alt='user avatar'
                className='object-cover object-center'
              />
            </div>

            {/* textos */}
            <div className='w-full h-auto flex flex-col items-center justify-between text-center'>
              <Text weight='medium' color='primary' size='title'>
                Welcome back
              </Text>
              <Text
                weight='regular'
                color='secondary'
                size='extraLarge'
                sx='mt-1'
              >
                Please enter your details to sign in.
              </Text>
            </div>
          </div>

          {/* buttons */}
          <div className='w-full h-auto flex flex-col justify-between lg:flex-row lg:justify-center items-center  gap-2'>
            <button className='w-full h-[50px] lg:w-[50%] rounded-[10px] border-[1.5px] border-h-gray hover:bg-h-gray-input flex justify-center items-center shadow transition ease-in-out hover:scale-105 duration-200'>
              <img src='src/assets/img/google.svg' alt='google icon' />
            </button>
          </div>

          {/* OR */}
          <div className='w-full h-auto items-center grid grid-cols-3'>
            <hr className='border-[1.5px] border-h-gray' />
            <div className='flex justify-center'>
              <Text weight='regular' color='primary' size='medium'>
                OR
              </Text>
            </div>
            <hr className='border-[1px] border-h-gray' />
          </div>

          {/* form */}
          <div className='w-full h-auto flex flex-col justify-between items-center gap-8 sm:gap-4'>
            {/* input */}
            <form className='w-full h-auto flex flex-col justify-between gap-8'>
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
                  className='w-full h-[50px] border-[1px] border-h-gray rounded-[10px] pl-4 pr-12 bg-h-gray-input focus:outline-none'
                />
                <Eye
                  className='absolute top-1/2 -translate-y-3 right-4 text-h-secondary'
                  size={24}
                />
              </div>
            </form>

            {/* remember password */}
            <div className='w-full h-auto flex flex-col sm:flex-row justify-between items-center gap-2'>
              <label className='w-auto h-auto flex items-center text-h-secondary text-base'>
                <input type='checkbox' className='mr-3 checkbox-input' />
                Remember me
              </label>

              <a href='#' className='w-auto h-auto flex items-center'>
                <Text color='info' sx='underline' size='medium'>
                  Forgot password?
                </Text>
              </a>
            </div>
          </div>

          {/* Button SignIn */}
          <button className='w-full h-[56px] rounded-xl bg-h-info flex justify-center items-center transition ease-in-out hover:scale-105 duration-200'>
            <Text weight='medium' color='white' size='extraLarge'>
              Sign in
            </Text>
          </button>

          {/* Sign Up */}
          <div className='w-full h-auto flex flex-col justify-between sm:flex-row sm:justify-center items-center text-center gap-2'>
            <Text color='secondary' weight='regular' size='medium'>
              Don't have an account yet?
            </Text>
            <a href='#'>
              <Text
                color='primary'
                weight='medium'
                size='medium'
                sx='hover:text-h-info transition duration-200'
              >
                Sign Up
              </Text>
            </a>
          </div>
        </div>

        {/* img */}
        <div className='w-full h-[20%] lg:w-[42%] lg:h-full overflow-hidden'>
          <img
            src='src/assets/img/LoginBanner.png'
            alt='Login Banner'
            className='w-full h-full object-cover object-center rounded-t-3xl lg:rounded-r-3xl lg:rounded-l-none'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);

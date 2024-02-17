import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextHeaders from '../../../components/TextHeaders';
import IMAGES from '../../../shared/constants/images';
import Loader from '@/components/Loader';
import Text from '@/components/Text';
import GoogleIcon from '../../../../public/assets/icons/google.svg';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

import { SigninValidation } from '@/lib/validation';
import { z } from 'zod';

interface SignInFormProps {
  containerAnimation: string;
  handleStepChange: (nextStep: number) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  containerAnimation,
  handleStepChange,
}) => {
  const isLoading = false;

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof SigninValidation>) {
    console.log(values);
  }

  return (
    <div
      id='sign-in'
      className={`w-full h-full lg:w-[58%] p-5 sm:py-[40px] sm:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      <div className='w-full h-auto flex flex-col items-center justify-between gap-4'>
        <div className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] overflow-hidden rounded-full shadow-xl'>
          <img
            src={IMAGES.SAVEBILLE}
            alt='Savebille Icon'
            className='object-cover object-center'
          />
        </div>

        <TextHeaders
          title='Welcome back'
          subtitle='Please enter your details to sign in.'
        />
      </div>

      <div className='w-full h-auto flex justify-center items-center'>
        <IconButton iconSource={GoogleIcon} iconAltText='google icon' />
      </div>

      <TextDivider text='OR' />

      <div className='w-full h-auto flex flex-col justify-between items-center'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full h-auto flex flex-col justify-between gap-4 sm:gap-6'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center justify-start space-x-1'>
                    <FormLabel>Email</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type='email'
                      autoComplete='email'
                      placeholder='What is your email?'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center justify-start space-x-1'>
                    <FormLabel>Password</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type='password'
                      autoComplete='current-password'
                      placeholder='Enter your password...'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='remember' />
                <label
                  htmlFor='remember'
                  className='text-sm font-regular text-h-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  <Text color='secondary' size='small'>
                    Remember me
                  </Text>
                </label>
              </div>

              <a
                href='#'
                className='text-sm font-regular text-h-info underline leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Forgot your password?
              </a>
            </div>

            <div className='flex items-center justify-center'>
              <Button type='submit'>
                {isLoading ? (
                  <div className='flex-center gap-2'>
                    <Loader />
                  </div>
                ) : (
                  <Text weight='medium' color='white' size='small'>
                    Sign In
                  </Text>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <AuthOptionMessage
        anchorHref='#sign-up'
        paragraphText="Don't have an account yet?"
        textButton='Sign Up'
        onClick={() => handleStepChange(1)}
      />
    </div>
  );
};

export default SignInForm;

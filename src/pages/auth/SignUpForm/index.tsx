import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextHeaders from '../../../components/TextHeaders';
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

import { SignupValidation } from '@/lib/validation';
import { createUserAccount } from '@/lib/appwrite/api';

import { z } from 'zod';
import { useToast } from '@/components/ui/use-toast';

interface SignUnFormProps {
  containerAnimation: string;
  handleStepChange: (nextStep: number) => void;
}

const SignUpForm: React.FC<SignUnFormProps> = ({
  containerAnimation,

  handleStepChange,
}) => {

  const {toast} = useToast();

  const isLoading = false;

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);

    if(!newUser) {
      return toast({ title: 'Sign up failed. Please try again.'})
    }
  }

  return (
    <div
      id='sign-up'
      className={`w-full h-full lg:w-[58%] p-5 sm:py-[40px] sm:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      <div className='w-full h-auto flex flex-col items-center'>
        <TextHeaders
          title='Create a new account'
          subtitle='Please enter your details to sign up.'
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
              name='name'
              render={({ field }) => (
                <FormItem>
                  <div className='flex items-center justify-start space-x-1'>
                    <FormLabel>Name</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type='text'
                      autoComplete='user-name'
                      placeholder='What is your name?'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
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

            <div className='flex items-center justify-start space-x-1 w-full'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='terms' />
                <label
                  htmlFor='terms'
                  className='text-sm font-regular text-h-secondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  <Text color='secondary' size='small'>
                    Accept
                  </Text>
                </label>
              </div>

              <a
                href='#'
                className='text-sm font-regular text-h-info underline leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Terms and Conditions
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
                    Sign Up
                  </Text>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <AuthOptionMessage
        anchorHref='#sign-in'
        paragraphText='Do you already have an account?'
        textButton='Sign In'
        onClick={() => handleStepChange(0)}
      />
    </div>
  );
};

export default SignUpForm;

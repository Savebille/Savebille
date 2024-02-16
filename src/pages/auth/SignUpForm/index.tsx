import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import PasswordInput from '../../../components/PasswordInput';
// import TextInput from '../../../components/TextInput';
import CheckboxInput from '../components/CheckboxInput';
import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import Button from '../../../components/Button';
import TextHeaders from '../../../components/TextHeaders';
import GoogleIcon from '../../../../public/assets/google.svg';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button as ButtonCN } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { SignupValidation } from '@/lib/validation';
import { z } from 'zod';

interface SignUnFormProps {
  containerAnimation: string;
  handleStepChange: (nextStep: number) => void;
}

const SignUpForm: React.FC<SignUnFormProps> = ({
  containerAnimation,

  handleStepChange,
}) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log(values);
  }

  return (
    <div
      id='sign-up'
      className={`w-full h-full lg:w-[58%] p-5 sm:py-[60px] sm:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      {/* header */}
      <div className='w-full h-auto flex flex-col items-center'>
        {/* textos */}
        <TextHeaders
          title='Create a new account'
          subtitle='Please enter your details to sign up.'
        />
      </div>

      {/* buttons */}
      <div className='w-full h-auto flex justify-center items-center'>
        <IconButton iconSource={GoogleIcon} iconAltText='google icon' />
      </div>

      {/* OR */}
      <TextDivider text='OR' />

      {/* form */}
      <div className='w-full h-auto flex flex-col justify-between items-center sm:gap-4'>
        {/* inputs */}

        {/* <form className='w-full h-auto flex flex-col justify-between gap-4 sm:gap-6'>
          <TextInput
            labelText='First name'
            placeHolder='What is your name?'
            type='text'
            idName='name'
          />

          <TextInput
            labelText='Email'
            placeHolder='What is your email?'
            type='email'
            idName='email'
          />

          <PasswordInput idName='password-sign-up' />
        </form> */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonCN type='submit'>Submit</ButtonCN>
          </form>
        </Form>

        {/* Agree with Terms and Conditions desktop*/}
        <div className='sm:w-full sm:h-auto sm:flex sm:flex-row hidden justify-start items-center gap-1'>
          <CheckboxInput
            labelText='You agree to our'
            anchorText='Terms and Conditions'
          />
        </div>
      </div>

      {/* Agree with Terms and Conditions mobile*/}
      <div className='w-full h-auto flex flex-col sm:hidden justify-start items-center gap-2'>
        <CheckboxInput
          labelText='You agree to our'
          anchorText='Terms and Conditions'
        />
      </div>

      {/* Button SignIn */}
      <Button text='Register' />

      {/* Sign Up */}
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

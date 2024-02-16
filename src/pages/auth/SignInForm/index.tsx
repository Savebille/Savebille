
import { zodResolver } from "@hookform/resolvers/zod"

import { Button as ButtonCN } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import React from 'react';
// import PasswordInput from '../../../components/PasswordInput';
// import CheckboxInput from '../components/CheckboxInput';
// import Button from '../../../components/Button';
// import TextInput from '../../../components/TextInput';
import TextDivider from '../components/TextDivider';
import AuthOptionMessage from '../components/AuthOptionMessage';
import IconButton from '../../../components/IconButton';
import TextHeaders from '../../../components/TextHeaders';
import IMAGES from '../../../shared/constants/images';
import GoogleIcon from '../../../../public/assets/icons/google.svg';
import { useForm } from "react-hook-form";
import { SigninValidation } from "@/lib/validation/intex";
import { z } from "zod";

 

interface SignInFormProps {
  containerAnimation: string;
  handleStepChange: (nextStep: number) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  containerAnimation,
  handleStepChange,
}) => {

   // 1. Define your form.
   const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      username: '',
      password: ''
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SigninValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div
      id='sign-in'
      className={`w-full h-full lg:w-[58%] p-5 sm:py-[60px] sm:px-[120px] flex flex-col items-center justify-between  ${containerAnimation}`}
    >
      {/* header */}
      <div className='w-full h-auto flex flex-col items-center justify-between gap-4'>
        {/* avatar */}
        <div className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] overflow-hidden rounded-full shadow-xl'>
          <img
            src={IMAGES.SAVEBILLE}
            alt='Savebille Icon'
            className='object-cover object-center'
          />
        </div>

        {/* textos */}
        <TextHeaders
          title='Welcome back'
          subtitle='Please enter your details to sign in.'
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
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-h-secondary">Email</FormLabel>
              <FormControl className="w-full h-auto bg-h-gray-input">
                <Input type="email" placeholder="What is your email?" className='w-full h-auto pl-4 pr-12 py-3 border-[1px] border-h-gray rounded-[10px] bg-h-gray-input focus:outline-none text-sm' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-h-secondary">Password</FormLabel>
              <FormControl className="w-full h-auto bg-h-gray-input">
                <Input type="password" placeholder="Enter your password..." className='w-full h-auto pl-4 pr-12 py-3 border-[1px] border-h-gray rounded-[10px] bg-h-gray-input focus:outline-none text-sm' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonCN type="submit" className=" bg-h-info text-h-white w-full   my-4 h-auto p-2 rounded-xl transition ease-in-out hover:scale-105 duration-200">Sign In</ButtonCN>
      </form>
      <AuthOptionMessage
        anchorHref='#sign-up'
        paragraphText="Don't have an account yet?"
        textButton='Sign Up'
        onClick={() => handleStepChange(1)}
      />
    </Form>
        {/* <form className='w-full h-auto flex flex-col justify-between gap-4 sm:gap-6'>
          <TextInput
            labelText='Email'
            placeHolder='What is your email?'
            type='email'
            idName='email'
          />
          <PasswordInput idName='password-sign-in' />
        </form> */}
      </div>
    </div>
  );
};

export default SignInForm;

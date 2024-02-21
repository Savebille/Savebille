import { useToast } from '@/components/ui/use-toast';
import {
  useCreateUserAccount,
  useSignInAccount,
} from '@/lib/react-query/queriesAndMutationts';
import IMAGES from '@/shared/constants/images';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { SigninValidation } from '@/lib/validation';
import { z } from 'zod';
import TextHeaders from '@/components/TextHeaders';
import IconButton from '@/components/IconButton';
import GoogleIcon from '../../../../public/assets/icons/google.svg';
import TextDivider from '../components/TextDivider';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import AuthOptionMessage from '../components/AuthOptionMessage';
import Loader from '@/components/Loader';
import Text from '@/components/Text';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@/shared/constants/routes';

const SignIn: React.FC = () => {
  const { toast } = useToast();

  const navigate = useNavigate();

  const { mutateAsync: createUserAccount, isLoading: isCreatingUser } =
    useCreateUserAccount();

  const { mutateAsync: signInAccount, isLoading: isSigningIn } =
    useSignInAccount();

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

    if (!newUser) {
      return toast({ title: 'Sign up failed. Please try again.' });
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      return toast({ title: 'Sign in failed. Please try again.' });
    }
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      {/* main container */}
      <div className='bg-h-white flex flex-col-reverse lg:flex-row justify-between rounded-3xl shadow-lg max-w-[1438px] max-h-[954px] w-[90%] h-[90%]'>
        <div
          id='sign-in'
          className={`w-full h-full lg:w-[58%] p-5 sm:py-[40px] sm:px-[120px] flex flex-col items-center justify-between`}
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
            onClick={() => navigate(ROUTES.SIGNUP)}
          />
        </div>

        {/* img */}
        <div className='hidden lg:block lg:w-[42%] lg:h-full overflow-hidden'>
          <img
            src={IMAGES.BANNER}
            alt='Login Banner'
            className='w-full h-full object-cover object-center rounded-t-3xl lg:rounded-r-3xl lg:rounded-l-none'
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignIn);

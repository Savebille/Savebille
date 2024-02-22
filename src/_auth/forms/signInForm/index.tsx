import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { SigninValidation } from '@/lib/validation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/Loader';
import { Link, useNavigate } from 'react-router-dom';

import {
  useCreateUserAccount,
  useSignInAccount,
} from '../../../lib/react-query/queriesAndMutationts';
import { useUserContext } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import ROUTES from '@/shared/constants/routes';
import IMAGES from '@/shared/constants/images';
import Text from '@/components/Text';

const SignInForm = () => {
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();

  
  const { mutateAsync: signInAccount, isPending: isSigningInUser } =
  useSignInAccount();
  
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignup = async (user: z.infer<typeof SigninValidation>) => {
    try {

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if( !session ) {
        return toast({ title: 'Sign in Failed. Please try again '})
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();

        navigate(ROUTES.ROOT);
      } else {
        return toast({ title: 'Sign up failed. Please try again.' });

      }

    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col m-3'>
          <Text color='info'weight='bold'size='most-large' sx='mb-1 justify-center' >
              Log in to your account
          </Text>
          <Text size='extra-large' color='primary' sx='mb-5 justify-center'>
            Welcome back! Please enter your details
          </Text>
          <form
          onSubmit={form.handleSubmit(handleSignup)}
          className='flex flex-col gap-5 w-full mt-4'
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
          <Button type='submit' className='text-white w-full md:w-full lg:w-full'>
            {isSigningInUser || isUserLoading ? (
              <div className='flex-center'>
                <Loader />
              </div>
            ) : (
              'Sign In'
            )}
          </Button>

        <button onClick={ () => navigate( ROUTES.SIGNUP ) } className='flex justify-center'>
          <Text color='primary' size='medium'>
            Already have an account?
          </Text>
          <Text color='info' size='medium' weight='bold' sx='ml-1'>
            Log in
          </Text>
        </button>
        </form>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;

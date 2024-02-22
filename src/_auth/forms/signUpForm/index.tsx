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
import { SignupValidation } from '@/lib/validation';
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
import Text from '@/components/Text';

const SignUpForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // Queries
  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } =
    useCreateUserAccount();
  const { mutateAsync: signInAccount, isPending: isSigningInUser } =
    useSignInAccount();

  // Handler
  const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
    try {
      const newUser = await createUserAccount(user);

      if (!newUser) {
        toast({ title: 'Sign up failed. Please try again.' });

        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        toast({ title: 'Something went wrong. Please login your new account' });

        navigate(ROUTES.ROOT);

        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();

        navigate('/');
      } else {
        toast({ title: 'Sign up failed. Please try again.' });

        return;
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
              Register your account
          </Text>
          <Text size='extra-large' color='primary' sx='mb-5 justify-center'>
            To use Savebille, please enter your details 
          </Text>
          <form
          onSubmit={form.handleSubmit(handleSignup)}
          className='flex flex-col gap-5 w-full mt-4'
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
          <Button type='submit' className='shad-button_primary text-white w-full md:w-full lg:w-full'>
            {isSigningInUser || isUserLoading ? (
              <div className='flex-center'>
                <Loader />
              </div>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;

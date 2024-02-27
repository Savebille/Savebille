import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/shared/Loader';
import { useToast } from '@/components/ui/use-toast';

import {
  useCreateUserAccount,
  useSignInAccount,
} from '@/lib/react-query/queries';
import { SignupValidation } from '@/lib/validation';
import { useUserContext } from '@/context/AuthContext';
import ROUTES from '@/shared/constants/routes';
import Text from '@/components/Text';
import IMAGES from '@/shared/constants/images';

const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
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
        toast({ title: 'Registro fallido. Por favor intenta de nuevo.' });

        return;
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        toast({
          title: 'Algo salió mal. Por favor inicia sesión con tu nueva cuenta.',
        });

        navigate(ROUTES.SIGN_IN);

        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();

        navigate('/');
      } else {
        toast({
          title: 'Inicio de sesión fallido. Por favor intenta de nuevo.',
        });

        return;
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Form {...form}>
      <div className='w-[80%] sm:w-[400px] flex flex-col items-center justify-center'>
        <div className='w-[70px] h-[70px] overflow-hidden rounded-full shadow-md'>
          <img
            src={IMAGES.SAVEBILLE}
            alt='logo'
            className='object-cover object-center'
          />
        </div>

        <Text color='primary' size='h2' weight='medium' sx='pt-6 text-center'>
          Crea una nueva cuenta
        </Text>
        <Text color='secondary' size='h4' weight='regular' sx='mt-3 text-center'>
          Por favor ingresa la siguiente información.
        </Text>

        <form
          onSubmit={form.handleSubmit(handleSignup)}
          className='flex flex-col items-center justify-center gap-5 w-full mt-6'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input type='text' autoComplete='name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input type='text' autoComplete='username' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type='email' autoComplete='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    autoComplete='current-password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>
            {isCreatingAccount || isSigningInUser || isUserLoading ? (
              <div className='flex flex-row justify-center items-center gap-2'>
                <Loader />
                <Text color='white' size='text-1' weight='medium'>
                  Cargando...
                </Text>
              </div>
            ) : (
              'Registrarme'
            )}
          </Button>

          <Text color='secondary' size='text-1' weight='regular' sx='text-center mt-2'>
            ¿Ya tienes una cuenta?
            <Link
              to={ROUTES.SIGN_IN}
              className='text-h-primary hover:text-h-info hover:underline'
            >
              Inicia sesión
            </Link>
          </Text>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;

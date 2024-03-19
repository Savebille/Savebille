import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

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
import { useToast } from '@/components/ui/use-toast';

import { SigninValidation } from '@/lib/validation';
import { useSignInAccount } from '@/lib/react-query/queries';
import { useUserContext } from '@/context/AuthContext';
import ROUTES from '@/shared/constants/routes';
import Text from '@/components/Text';
import IMAGES from '@/shared/constants/images';
import CustomLoader from '@/components/shared/CustomLoader';

const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // Query
  const { mutateAsync: signInAccount, isPending: isLoading } =
    useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    const session = await signInAccount(user);

    if (!session) {
      toast({
        title: 'Credenciales incorrectas, inténtalo de nuevo.',
        variant: 'default',
      });

      return;
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      navigate('/');
    } else {
      toast({ title: 'Error, inténtalo de nuevo.' });

      return;
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
          ¡Bienvenido de vuelta!
        </Text>
        <Text
          color='secondary'
          size='h4'
          weight='regular'
          sx='mt-3 text-center'
        >
          Por favor ingresa tu información.
        </Text>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className='flex flex-col items-center justify-center gap-5 w-full mt-6'
        >
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
            {isLoading || isUserLoading ? (
              <div className='flex flex-row justify-center items-center gap-2'>
                <CustomLoader color='#ffffff' height={24} width={24} />
                <Text color='white' size='text-1' weight='medium'>
                  Cargando...
                </Text>
              </div>
            ) : (
              'Iniciar sesión'
            )}
          </Button>

          <Text
            color='secondary'
            size='text-1'
            weight='regular'
            sx='text-center mt-2'
          >
            ¿No tienes una cuenta?
            <Link
              to={ROUTES.SIGN_UP}
              className='text-h-primary hover:text-h-info hover:underline'
            >
              Regístrate
            </Link>
          </Text>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;

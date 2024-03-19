import * as z from 'zod';

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Tu nombre debe tener al menos 2 caracteres.' }),
  username: z.string().min(2, {
    message: 'Tu nombre de usuario debe tener al menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Correo electrónico no valido.',
  }),
  password: z
    .string()
    .min(8, { message: 'Tu contraseña debe tener al menos 8 caracteres.' }),
});

export const SigninValidation = z.object({
  email: z.string().email({
    message: 'Correo electrónico no valido.',
  }),
  password: z
    .string()
    .min(8, { message: 'Tu contraseña debe tener al menos 8 caracteres.' }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z
    .string()
    .min(2, { message: 'Tu nombre debe tener al menos 2 caracteres.' }),
  username: z.string().min(2, {
    message: 'Tu nombre de usuario debe tener al menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Correo electrónico no valido.',
  }),
});

// Movement

export const MovementValidation = z.object({
  type: z.string().min(2, {
    message: 'Selecciona el tipo de movimiento',
  }),
  amount: z.string().min(2, {
    message: 'Debes ingresar un valor',
  }),
  date: z.date({
    required_error: 'Por favor ingresa una fecha de registro.',
  }),
  description: z.string().min(2, {
    message: 'Ingresa una descripción.',
  }),
  category: z.string().min(2, {
    message: 'Por favor selecciona una categoría.',
  }),
});

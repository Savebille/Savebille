import { z } from 'zod';

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'must be at least 2 characters.' }),
  email: z.string().email({ message: 'not allowed.' }),
  password: z.string().min(8, { message: 'must be at least 8 characters.' }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: 'not allowed.' }),
  password: z.string().min(8, { message: 'must be at least 8 characters.' }),
});
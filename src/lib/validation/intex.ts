import { z } from "zod"

export const SigninValidation = z.object({
    username: z.string().email(),
    password: z.string().min( 8 , { message: 'Too short'})
  
  })
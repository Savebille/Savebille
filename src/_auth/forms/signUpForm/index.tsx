import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { Button, Input } from '@mui/material'; 
import { Form, FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from '@/components/ui/form';


const formSchema = z.object({
  name: z.string().min(2).max(50),
})

const SignUpForm = () => {

  const form = useForm<z.infer<typeof formSchema> >({
    resolver: zodResolver( formSchema ),
    defaultValues: {
      name: '',
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }


  return (
    <div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          username="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
};

export default SignUpForm;

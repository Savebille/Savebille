import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface Props {
	showModal: boolean;
	setShowModal: Dispatch<SetStateAction<any>>;
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const NewExpenseModal = ({
	showModal,
	setShowModal,
}: Props) => {

	const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

	return (
		<Modal
			open={showModal}
			onClose={() => setShowModal(false)}
			sx='w-[94%] !max-w-[662px]'
		>
      <div>
			<header className='flex items-center justify-between w-full mb-10'>
        <Text size='h1' color='primary' weight='semibold'>
          Nuevo gasto
        </Text>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
			</div>
		</Modal>
	);
};

export default NewExpenseModal;
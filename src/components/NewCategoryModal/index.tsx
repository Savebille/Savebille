import {
  BookmarkSimple,
  File,
  Image,
  Palette,
  Plus,
} from '@phosphor-icons/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import Modal from '@/components/Modal';
import { useCreateCategory } from '@/lib/react-query/queries';
import { useUserContext } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { CategoryValidation } from '@/lib/validation';
import { SetStateAction, useState } from 'react';

interface NewCategoryModalProps {
  fetchCategories: () => void;
}

const NewCategoryModal: React.FC<NewCategoryModalProps> = ({
  fetchCategories,
}) => {
  const form = useForm<z.infer<typeof CategoryValidation>>({
    resolver: zodResolver(CategoryValidation),
    defaultValues: {
      type: '',
      name: '',
      icon: '',
      color: '',
    },
  });

  const { user } = useUserContext();

  const { toast } = useToast();

  const { mutateAsync: createCategory, isPending: isLoadingCreate } =
    useCreateCategory();

  // Handler
  const handleSubmit = async (value: z.infer<typeof CategoryValidation>) => {
    console.log('value', value);

    const newCategory = await createCategory({
      type: value.type,
      name: value.name,
      icon: value.icon,
      color: value.color,
      userId: user.id,
    });

    if (!newCategory) {
      toast({
        title: `Create category failed. Please try again.`,
      });
    }
    toast({
      title: `REGISTRADO EN DB MI PAPACHO KLK.`,
    });
    form.reset();

    fetchCategories();
    setActivateCloseModal(true);
  };

  const [selectedType, setselectedType] = useState('Ingreso');

  const tottleSelectedType = (type: SetStateAction<string>) => {
    if (type !== selectedType) setselectedType(type);
  };

  const [activateCloseModal, setActivateCloseModal] = useState(false);

  return (
    <Modal
      closeModal={activateCloseModal}
      hasHeader
      title='Nueva categoría'
      triggerContent={
        <button className='flex items-center justify-between px-3 py-2 bg-h-info rounded-md mt-4 sm:mt-0 transition ease-in-out hover:scale-105 duration-200 text-h-white text-[14px] font-normal gap-2 '>
          Crear categoría
          <Plus size={16} color={'var(--h-white)'} />
        </button>
      }
      mainContent={
        <div className='mt-4'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='space-y-10'
            >
              {/* Income or Expense */}
              <FormField
                control={form.control}
                name='type'
                render={({ field }) => (
                  <FormItem className='flex flex-col w-full items-center '>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='flex w-full items-center justify-evenly'
                      >
                        <FormItem className='flex w-auto items-center gap-4 space-y-0 '>
                          <FormControl
                            onClick={() => tottleSelectedType('Ingreso')}
                          >
                            <RadioGroupItem value='ingreso' />
                          </FormControl>
                          <FormLabel className='font-normal text-h-success'>
                            Ingreso
                          </FormLabel>
                        </FormItem>

                        <FormItem className='flex w-auto items-center gap-4 space-y-0 '>
                          <FormControl
                            onClick={() => tottleSelectedType('Gasto')}
                          >
                            <RadioGroupItem value='gasto' />
                          </FormControl>
                          <FormLabel className='font-normal text-h-error'>
                            Gasto
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Second Field */}
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center'>
                        <FormLabel htmlFor='name'>
                          <BookmarkSimple
                            size={24}
                            color='#8e98a7'
                            className='cursor-pointer'
                          />
                        </FormLabel>

                        <Input
                          className='w ml-4 text-[14px] bg-transparent rounded-none p-0 border-none leading-none text-h-primary focus:outline-none'
                          id='name'
                          autoComplete='off'
                          type='text'
                          placeholder='Categoría'
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className='ml-10' />
                  </FormItem>
                )}
              />

              {/* Third Field */}
              <FormField
                control={form.control}
                name='icon'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center'>
                        <button>
                          <Image
                            size={24}
                            color='#8e98a7'
                            className='cursor-pointer'
                          />
                        </button>


                      </div>
                    </FormControl>
                    <FormMessage className='ml-10' />
                  </FormItem>
                )}
              />

              {/* Fourth Field */}
              <FormField
                control={form.control}
                name='color'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex items-center'>
                        <button>
                          <Palette
                            size={24}
                            color='#8e98a7'
                            className='cursor-pointer'
                          />
                        </button>


                      </div>
                    </FormControl>
                    <FormMessage className='ml-10' />
                  </FormItem>
                )}
              />

              <div className='flex w-full items-center justify-end'>
                <Button
                  disabled={isLoadingCreate}
                  type='submit'
                  className='w-auto lg:w-auto'
                >
                  Guardar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      }
    />
  );
};

export default NewCategoryModal;

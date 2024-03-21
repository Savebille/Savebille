import { BookmarkSimple, Image, Palette, Plus } from '@phosphor-icons/react';
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
import {
  customCategoryColors,
  customCategoryColorsProps,
} from '../../../../../shared/constants/data';
import Text from '@/components/Text';

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
      color: selectedColor,
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

  const [activeCategoryColors, setActiveCategoryColors] = useState(false);

  const [selectedColor, setSelectedColor] = useState('');

  const [mainColor, setMainColor] = useState('#e91e63');

  const handleActiveCategoryColors = () => {
    setActiveCategoryColors(!activeCategoryColors);
  };

  const handleColorSelectionClick = (
    categoryColor: customCategoryColorsProps
  ) => {
    if (categoryColor.isDefault === false) {
      setSelectedColor(categoryColor.color);

      setMainColor(categoryColor.color);

      setActiveCategoryColors(false);
    } else {
      setSelectedColor(categoryColor.color);

      setMainColor('#e91e63');

      setActiveCategoryColors(false);
    }
  };

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
                        <button type='button'>
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
                        <button
                          onClick={handleActiveCategoryColors}
                          type='button'
                        >
                          <Palette
                            size={24}
                            color='#8e98a7'
                            className='cursor-pointer'
                          />
                        </button>

                        <div className='flex w-full justify-between items-center gap-4'>
                          <div className='w-auto h-auto flex flex-wrap ml-4 items-center justify-between gap-2'>
                            {/* COLOR PRINCIPAL */}
                            {customCategoryColors.map(
                              (categoryColor) =>
                                categoryColor.main && (
                                  <div
                                    onClick={() => {
                                      field.onChange(categoryColor.color);
                                      setSelectedColor(categoryColor.color);
                                    }}
                                    key={categoryColor.id}
                                    className={`bg-[${mainColor}] w-6 h-6 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center`}
                                  >
                                    {mainColor === selectedColor && (
                                      <div className='bg-white w-[14px] h-[14px] rounded-full'></div>
                                    )}
                                  </div>
                                )
                            )}

                            {/* COLORES DEFAULT */}
                            {customCategoryColors.map(
                              (categoryColor) =>
                                categoryColor.isDefault && (
                                  <div
                                    onClick={() => {
                                      field.onChange(categoryColor.color);
                                      setSelectedColor(categoryColor.color);
                                    }}
                                    key={categoryColor.id}
                                    className={`bg-[${categoryColor.color}] w-6 h-6 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center`}
                                  >
                                    {selectedColor === categoryColor.color && (
                                      <div className='bg-white w-[14px] h-[14px] rounded-full'></div>
                                    )}
                                  </div>
                                )
                            )}
                          </div>

                          <button
                            onClick={handleActiveCategoryColors}
                            type='button'
                            className='bg-h-blue-light max-[390px]:px-2 px-4 py-2 rounded-md transition duration-200 hover:scale-105'
                          >
                            <Text
                              size='text-1'
                              color='secondary'
                              weight='regular'
                            >
                              {activeCategoryColors
                                ? 'Menos colores'
                                : 'Más colores'}
                            </Text>
                          </button>

                          {/* MÁS COLORES */}
                          {activeCategoryColors && (
                            <div className='ml-4 p-4 absolute  flex flex-wrap items-center max-[374px]:top-[350px] top-[330px]  z-50  w-auto max-w-[422px]  bg-white rounded-md shadow-md border border-slate-200 gap-3'>
                              {customCategoryColors.map((categoryColor) => (
                                <div
                                  onClick={() => {
                                    field.onChange(categoryColor.color);
                                    handleColorSelectionClick(categoryColor);
                                  }}
                                  key={categoryColor.id}
                                  className={`bg-[${categoryColor.color}] w-6 h-6 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center `}
                                >
                                  {selectedColor === categoryColor.color && (
                                    <div className='bg-white w-[14px] h-[14px] rounded-full'></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </FormControl>

                    {form.formState.errors.color && (
                      <FormMessage className='ml-10' color='error'>
                        {form.formState.errors.color.message}
                      </FormMessage>
                    )}
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

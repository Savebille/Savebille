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
import { ReactNode, SetStateAction, useState } from 'react';
import {
  customCategoryColors,
  customCategoryIcons,
} from '../../../../../shared/constants/data';
import Text from '@/components/Text';
import { CircleCategoryColor } from '../CircleCategoryColor';
import { CircleCategoryIcon } from '../CircleCategoryIcon';

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

  const [activateCloseModal, setActivateCloseModal] = useState(false);

  // Colors Field

  const [activeCategoryColors, setActiveCategoryColors] = useState(false);

  const [selectedColor, setSelectedColor] = useState('');

  const tottleSelectedType = (type: SetStateAction<string>) => {
    if (type !== selectedType) setselectedType(type);
  };

  const handleActiveCategoryColors = () => {
    setActiveCategoryColors(!activeCategoryColors);
  };

  const handleColorSelectionClick = (color: string) => {
    setSelectedColor(color);
    setActiveCategoryColors(false);
  };

  //Icons Field

  const [activeCategoryIcons, setActiveCategoryIcons] = useState(false);

  const [selectedIcon, setSelectedIcon] = useState<ReactNode | null>(null);

  const handleActiveCategoryIcons = () => {
    setActiveCategoryIcons(!activeCategoryIcons);

    if (activeCategoryColors) {
      setActiveCategoryColors(false);
    }
  };

  const handleIconSelectionClick = (icon: ReactNode) => {
    setSelectedIcon(icon);
    setActiveCategoryIcons(false);
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
                        <button
                          onClick={handleActiveCategoryColors}
                          type='button'
                        >
                          <Image
                            size={24}
                            color='#8e98a7'
                            className='cursor-pointer'
                          />
                        </button>

                        <div className='flex w-full justify-between items-center gap-4'>
                          <div className='w-auto h-auto flex flex-wrap ml-4 items-center justify-between gap-2'>
                            {/* ICONOS DEFAULT */}

                            {selectedIcon === null ? (
                              <>
                                {customCategoryIcons
                                  .map((item) => (
                                    <CircleCategoryIcon
                                      key={item.name}
                                      field={field}
                                      item={item}
                                      selectedIcon={selectedIcon}
                                      setSelectedIcon={setSelectedIcon}
                                      setActiveCategoryIcons={
                                        setActiveCategoryIcons
                                      }
                                    />
                                  ))
                                  .slice(0, 5)}
                              </>
                            ) : (
                              <div
                                className={`bg-h-secondary border border-h-primary p-1 w-6 h-6 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center`}
                              >
                                {selectedIcon}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={handleActiveCategoryIcons}
                            type='button'
                            className='bg-h-blue-light max-[390px]:px-2 px-4 py-2 rounded-md transition duration-200 hover:scale-105'
                          >
                            <Text
                              size='text-1'
                              color='secondary'
                              weight='regular'
                            >
                              {activeCategoryIcons
                                ? 'Menos iconos'
                                : 'Más iconos'}
                            </Text>
                          </button>

                          {/* MÁS ICONOS */}
                          {activeCategoryIcons && (
                            <div className='ml-4 p-4 absolute  flex flex-wrap items-center max-[425px]:top-[300px] top-[264px]  z-50  w-auto max-w-[422px]  bg-white rounded-md shadow-md border border-slate-200 gap-3'>
                              {customCategoryIcons.map((item) => (
                                <CircleCategoryIcon
                                  key={item.name}
                                  field={field}
                                  item={item}
                                  selectedIcon={selectedIcon}
                                  handleIconSelectionClick={
                                    handleIconSelectionClick
                                  }
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </FormControl>

                    {form.formState.errors.icon && (
                      <FormMessage className='ml-10' color='error'>
                        {form.formState.errors.icon.message}
                      </FormMessage>
                    )}
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
                            {/* COLORES DEFAULT */}

                            {selectedColor === '' ? (
                              <>
                                {customCategoryColors
                                  .map((item) => (
                                    <CircleCategoryColor
                                      key={item.id}
                                      item={item}
                                      field={field}
                                      selectedColor={selectedColor}
                                      setActiveCategoryColors={
                                        setActiveCategoryColors
                                      }
                                      setSelectedColor={setSelectedColor}
                                    />
                                  ))
                                  .slice(0, 5)}
                              </>
                            ) : (
                              <div
                                className={`${selectedColor} w-6 h-6 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center`}
                              >
                                <div className='bg-white w-[14px] h-[14px] rounded-full'></div>
                              </div>
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
                            <div className='ml-4 p-4 absolute  flex flex-wrap items-center max-[374px]:top-[396px] max-[408px]:top-[376px] top-[338px]  z-50  w-auto max-w-[422px]  bg-white rounded-md shadow-md border border-slate-200 gap-3'>
                              {customCategoryColors.map((item) => (
                                <CircleCategoryColor
                                  key={item.id}
                                  item={item}
                                  field={field}
                                  selectedColor={selectedColor}
                                  handleColorSelectionClick={
                                    handleColorSelectionClick
                                  }
                                />
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

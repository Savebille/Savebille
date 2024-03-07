import { ChangeEvent, useState } from 'react';

import ModalMovement from '@/components/Modal';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import {
  BookmarkSimple,
  Calculator,
  CalendarBlank,
  File,
  Gift,
  Money,
  TrendUp,
} from '@phosphor-icons/react';

import Text from '@/components/Text';
import IMAGES from '@/shared/constants/images';
import Selector from '@/components/Selector';
import {
  AlertDialogAction,
  AlertDialogCancel,
} from '@radix-ui/react-alert-dialog';

const formSchema = z.object({
  amount: z.string().min(2, {
    message: 'Debes ingresar un valor.',
  }),
  date: z.string().min(2, {
    message: 'Debes seleccionar una fecha.',
  }),
  description: z.string().min(2, {
    message: 'Ingresa una descripción.',
  }),
  category: z.string().min(2, {
    message: 'Debes elegir una categoría.',
  }),
});

const NewIncomeModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
      date: '',
      description: '',
      category: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // First Field
  // const [inputValue, setInputValue] = useState<string>('');

  // const formatNumber = (input: string): string => {
  //   input = input.replace(/[^0-9.]/g, '').replace(/^\.+/g, '');

  //   const parts = input.split('.');
  //   let integerPart = parts[0] || '';
  //   let decimalPart = parts[1] || '';

  //   integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   decimalPart = decimalPart.slice(0, 2);

  //   return integerPart + (decimalPart ? '.' + decimalPart : '');
  // };

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const formattedValue = formatNumber(e.target.value);
  //   setInputValue(formattedValue);
  // };

  // Second Field

  const [currentDate, setCurrentDate] = useState<string | null>('Hoy');

  const handleDateClick = (buttonTitle: string) => {
    if (currentDate === buttonTitle) {
      setCurrentDate(null);
    } else {
      setCurrentDate(buttonTitle);
    }
  };

  const dateSelections = [
    {
      id: 1,
      title: 'Hoy',
    },
    {
      id: 2,
      title: 'Ayer',
    },
    {
      id: 3,
      title: 'Otra fecha',
    },
  ];

  //Fourth Field

  const categoryOptions = [
    {
      icon: <Money size={24} color='#61B449' />,
      label: 'Salario',
      color: 'success',
    },
    {
      icon: <TrendUp size={24} color='#3183FF' />,
      label: 'Inversión',
      color: 'info',
    },
    {
      icon: <Gift size={24} color='#FF5252' />,
      label: 'Regalo',
      color: 'error',
    },
  ];

  return (
    <ModalMovement buttonText='Ingreso'>
      <header className='flex items-center justify-between w-full mb-10'>
        <Text size='h1' color='primary' weight='semibold'>
          Nuevo ingreso
        </Text>
      </header>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-12'>
          {/* First Field */}
          <FormField
            control={form.control}
            name='amount'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                      <FormLabel htmlFor='amount'>
                        <Calculator
                          size={24}
                          color='#8e98a7'
                          className='cursor-pointer'
                        />
                      </FormLabel>

                      <div className='flex items-center ml-4'>
                        <Text size='h3' color='success' sx='mr-2'>
                          $
                        </Text>
                        <Input
                          className='text-[20px] bg-transparent p-0 border-none leading-none text-h-success placeholder:text-h-success focus:outline-none'
                          type='text'
                          id='amount'
                          placeholder='0.00'
                          // value={inputValue}
                          // onChange={handleInputChange}
                          {...field}
                        />
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <img
                        src={IMAGES.COLFLAG}
                        alt='bandera de Colombia'
                        width={24}
                        height={24}
                      />
                      <Text
                        size='h3'
                        color='secondary'
                        weight='light'
                        sx='ml-2'
                      >
                        COP
                      </Text>
                    </div>
                  </div>
                </FormControl>

                <FormMessage className='ml-10' />
              </FormItem>
            )}
          />

          {/* Second Field */}
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex w-full items-center justify-start mb-4'>
                    <button type='button'>
                      <CalendarBlank size={24} color='#8e98a7' />
                    </button>

                    {dateSelections.map((date) => (
                      <button
                        key={date.id}
                        type='button'
                        onClick={() => handleDateClick(date.title)}
                        className={`ml-4 p-2 rounded-xl shadow transition duration-200 min-w-14 flex items-center justify-center ${
                          currentDate === date.title
                            ? 'bg-h-success'
                            : 'bg-h-gray-input'
                        }`}
                      >
                        <Text
                          color={`${
                            currentDate === date.title ? 'white' : 'primary'
                          }`}
                          size='text-1'
                          weight='light'
                        >
                          {date.title}
                        </Text>
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage className='ml-10' />
              </FormItem>
            )}
          />

          {/* Third Field */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex items-center'>
                    <FormLabel htmlFor='description'>
                      <File
                        size={24}
                        color='#8e98a7'
                        className='cursor-pointer'
                      />
                    </FormLabel>

                    <Input
                      className='w ml-4 text-[14px] bg-transparent p-0 border-none leading-none text-h-primary placeholder:text-h-secondary focus:outline-none'
                      id='description'
                      type='text'
                      placeholder='Descripción'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className='ml-10' />
              </FormItem>
            )}
          />

          {/* Fourth Field */}
          <FormField
            control={form.control}
            name='category'
            render={() => (
              <FormItem>
                <FormControl>
                  <div className='flex items-center w-full'>
                    <FormLabel htmlFor='category'>
                      <BookmarkSimple size={24} color='#8e98a7' />
                    </FormLabel>

                    <div className='flex flex-grow ml-4'>
                      <Selector options={categoryOptions} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage className='ml-10' />
              </FormItem>
            )}
          />
          <div className='flex w-full items-center justify-end gap-2'>
            <AlertDialogCancel>
              <Button
                type='button'
                className='w-auto lg:w-auto bg-transparent text-hprimary'
              >
                Cancelar
              </Button>
            </AlertDialogCancel>

            <AlertDialogAction>
              <Button type='submit' className='w-auto lg:w-auto'>
                Guardar
              </Button>
            </AlertDialogAction>
          </div>
        </form>
      </Form>
    </ModalMovement>
  );
};

export default NewIncomeModal;

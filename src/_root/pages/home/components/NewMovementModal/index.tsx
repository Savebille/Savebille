import {
  Calculator,
  File,
  Gift,
  HandCoins,
  Money,
  Plus,
  TrendUp,
} from '@phosphor-icons/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Text from '@/components/Text';
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

import IMAGES from '@/shared/constants/images';
import Selector from '@/components/Selector';
import { DatePickerWithPresets } from '@/components/DatePicker';
import Modal from '@/components/Modal';

const formSchema = z.object({
  type: z.enum(['ingreso', 'gasto'], {
    required_error: 'Selecciona el tipo de movimiento',
  }),
  amount: z.string().min(2, {
    message: 'Debes ingresar un valor.',
  }),
  date: z.date({
    required_error: 'Por favor ingresa una fecha de registro.',
  }),
  description: z.string().min(2, {
    message: 'Ingresa una descripción.',
  }),
  category: z.string({
    required_error: 'Por favor selecciona una categoría.',
  }),
});

const NewMovementModal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: '',
      description: '',
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

  const categoryOptions = [
    {
      icon: <Money size={24} color='#2ECC71' />,
      label: 'Salario',
      color: 'lightGreen',
    },
    {
      icon: <TrendUp size={24} color='#3498DB' />,
      label: 'Inversión',
      color: 'blue',
    },
    {
      icon: <Gift size={24} color='#8E44AD' />,
      label: 'Regalo',
      color: 'purple',
    },
    {
      icon: <HandCoins size={24} color='#E67E22' />,
      label: 'Prestamo',
      color: 'orange',
    },
  ];

  return (
    <Modal
      hasHeader
      title='Nuevo movimiento'
      description='Ingresa la información de tu movimiento'
      triggerContent={
        <button className='flex items-center justify-between px-3 py-2 bg-h-info rounded-md mt-4 sm:mt-0 transition ease-in-out hover:scale-105 duration-200 text-h-white text-[14px] font-normal gap-2 '>
          Agregar
          <Plus size={16} color={'var(--h-white)'} />
        </button>
      }
      mainContent={
        <div className='mt-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
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
                        <FormItem className='flex w-auto items-center gap-4 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='ingreso' />
                          </FormControl>
                          <FormLabel className='font-normal text-h-success'>
                            Ingreso
                          </FormLabel>
                        </FormItem>

                        <FormItem className='flex w-auto items-center gap-4 space-y-0'>
                          <FormControl>
                            <RadioGroupItem value='gasto' />
                          </FormControl>
                          <FormLabel className='font-normal text-h-error'>
                            Gasto
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage  />
                  </FormItem>
                )}
              />

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
                              type='number'
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
                    <DatePickerWithPresets fieldProps={field} />

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
                render={({ field }) => (
                  <FormItem>
                    <Selector options={categoryOptions} fieldProps={field} />

                    <FormMessage className='ml-10' />
                  </FormItem>
                )}
              />

              <div className='flex w-full items-center justify-end gap-2'>
                <Button
                  onClick={() => {}}
                  type='button'
                  className='w-auto lg:w-auto bg-transparent text-hprimary'
                >
                  Guardar y crear nuevo
                </Button>
                <Button type='submit' className='w-auto lg:w-auto'>
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

export default NewMovementModal;
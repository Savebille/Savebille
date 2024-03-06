import React, { useState, ChangeEvent } from 'react';
import Text from '../../../components/Text';
import dayjs from 'dayjs';
import {
  BookmarkSimple,
  Calculator,
  CalendarBlank,
  File,
  Gift,
  Money,
  X,
} from '@phosphor-icons/react';
import Modal from '@/components/Modal';
import Selector from '@/components/Selector';
import { TrendUp } from '@phosphor-icons/react/dist/ssr';
import IMAGES from '@/shared/constants/images';

const Home: React.FC = () => {
  const cardsInfo = [
    {
      id: 1,
      title: 'Balance',
      amount: 6000,
      currency: 'COP',
      desc: '4 registros',
    },
    {
      id: 2,
      title: 'Ingresos',
      amount: 10000,
      currency: 'COP',
      desc: '1 registro',
    },
    {
      id: 3,
      title: 'Gastos',
      amount: 4000,
      currency: 'COP',
      desc: '3 registros',
    },
  ];

  const dateSelections = [
    {
      id: 1,
      title: 'Hoy',
      openCalendar: false,
    },
    {
      id: 2,
      title: 'Ayer',
      openCalendar: false,
    },
    {
      id: 3,
      title: 'Otra fecha',
      openCalendar: true,
    },
  ];

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

  const now = dayjs();

  // Card Header State

  const [currentCardInfo, setCurrentCardInfo] = useState<string | null>(null);

  const handleCardClick = (cardTitle: string) => {
    if (currentCardInfo === cardTitle) {
      setCurrentCardInfo(null);
    } else {
      setCurrentCardInfo(cardTitle);
    }
  };

  // Date Selected State

  const [currentDate, setCurrentDate] = useState<string | null>('Hoy');

  const handleDateClick = (buttonTitle: string) => {
    if (currentDate === buttonTitle) {
      setCurrentDate(null);
    } else {
      setCurrentDate(buttonTitle);
    }
  };

  // Input Income value
  const [inputValue, setInputValue] = useState<string>('');

  const formatNumber = (input: string): string => {
    input = input.replace(/[^0-9.]/g, '').replace(/^\.+/g, '');

    const parts = input.split('.');
    let integerPart = parts[0] || '';
    let decimalPart = parts[1] || '';

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    decimalPart = decimalPart.slice(0, 2);

    return integerPart + (decimalPart ? '.' + decimalPart : '');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumber(e.target.value);
    setInputValue(formattedValue);
  };

  return (
    <div className='w-full flex flex-col'>
      {/* Header content */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between'>
        <div className='flex flex-col'>
          <Text color='primary' weight='bold' size='h4'>
            Listado de gastos e ingresos
          </Text>
          <Text
            color='secondary'
            weight='regular'
            size='text-1'
            sx='mt-2'
          >{`Revisa tu actividad - ${now}`}</Text>
        </div>

        <Modal buttonText='Agregar'>
          {/* Header */}
          <div className='flex items-center justify-between w-full mb-10'>
            <Text size='h1' color='primary' weight='semibold'>
              Nuevo ingreso
            </Text>
          </div>

          {/* Form */}
          <form action='' className='flex flex-col'>
            {/* First field */}
            <fieldset className='flex w-full items-center justify-between mb-10'>
              <label htmlFor='amount' className='flex items-center'>
                <Calculator
                  size={24}
                  color='#8e98a7'
                  className='cursor-pointer'
                />
                <div className='flex items-center ml-6'>
                  <Text size='h3' color='success' sx='mr-2'>
                    $
                  </Text>
                  <input
                    className='text-[20px] leading-none text-h-success placeholder:text-h-success focus:outline-none'
                    type='text'
                    id='amount'
                    placeholder='0.00'
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
              </label>

              <div className='flex items-center'>
                <img
                  src={IMAGES.COLFLAG}
                  alt='bandera de Colombia'
                  width={24}
                  height={24}
                />
                <Text size='h3' color='secondary' weight='light' sx='ml-2'>
                  COP
                </Text>
              </div>
            </fieldset>

            {/* Second field */}
            <fieldset className='flex w-full  items-center justify-start mb-10'>
              <button type='button'>
                <CalendarBlank size={24} color='#8e98a7' />
              </button>

              {dateSelections.map((date) => (
                <button
                  key={date.id}
                  type='button'
                  onClick={() => handleDateClick(date.title)}
                  className={`ml-6 p-2 rounded-xl shadow transition duration-200 min-w-14 flex items-center justify-center ${
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
            </fieldset>

            {/* Third  field */}
            <fieldset className='flex w-full  items-center justify-start mb-10'>
              <label
                htmlFor='description'
                className='flex flex-row items-center'
              >
                <File size={24} color='#8e98a7' className='cursor-pointer' />
                <input
                  className='w ml-6 text-[14px] leading-none text-h-primary placeholder:text-h-secondary focus:outline-none'
                  id='description'
                  type='text'
                  placeholder='Descripción'
                />
              </label>
            </fieldset>

            {/* Fourth field */}
            <fieldset className='flex w-full items-center mb-10'>
              <label htmlFor='category' className='flex items-center w-full'>
                <BookmarkSimple size={24} color='#8e98a7' />

                <div className='flex flex-grow ml-6'>
                  <Selector options={categoryOptions} />
                </div>
              </label>
            </fieldset>
          </form>
        </Modal>
      </div>

      {/* Main content */}
      <div className='flex flex-col sm:flex-row items-start gap-6 mt-6 w-full'>
        {cardsInfo.map((card) => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card.title)}
            className={`flex flex-col bg-white ${
              currentCardInfo === card.title
                ? 'border border-h-info shadow-md'
                : 'border-none border-transparent shadow-sm'
            }  rounded-md p-4 w-full lg:max-w-64 transition ease-in-out hover:shadow-md hover:scale-105 duration-200 cursor-pointer`}
          >
            <div className='flex items-center justify-between mb-3'>
              <Text size='h5' color='secondary' weight='regular'>
                {card.title}
              </Text>
              <Text size='h5' color='secondary' weight='regular'>
                {card.currency}
              </Text>
            </div>
            <Text size='h5' color='primary' weight='bold' sx='mb-2'>
              ${card.amount}
            </Text>
            <Text size='text-1' color='info' weight='regular'>
              {card.desc}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);

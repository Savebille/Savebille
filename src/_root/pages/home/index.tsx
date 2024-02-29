import React, { useState, ChangeEvent } from 'react';
import Text from '../../../components/Text';
import dayjs from 'dayjs';
import { ArrowDown, Calculator, X } from '@phosphor-icons/react';
import Modal from '@/components/Modal';

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

  const now = dayjs();

  const [currentCardInfo, setCurrentCardInfo] = useState<string | null>(null);

  const handleCardClick = (cardTitle: string) => {
    if (currentCardInfo === cardTitle) {
      setCurrentCardInfo(null);
    } else {
      setCurrentCardInfo(cardTitle);
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
          <div className='flex items-center justify-between w-full'>
            <Text size='h3' color='primary' weight='medium'>
              New Income
            </Text>
            <button>
              <X size={20} />
            </button>
          </div>

          {/*Main Content */}

          <div className='flex flex-col w-full justify-center'>
            {/* First Field */}
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center'>
                <button>
                  <Calculator size={24} />
                </button>
                <Text size='h2' color='success' sx='ml-6 mr-4'>
                  $
                </Text>
                <input
                  className='text-[24px] leading-none text-h-success placeholder:text-h-success focus:outline-none'
                  type='text'
                  id='myInput'
                  placeholder='0.00'
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <button className='flex items-center gap-2 cursor-pointer'>
                  <Text size='h4' color='secondary'>
                    COP
                  </Text>
                  <ArrowDown color='#8e98a7' size={18} />
                </button>
              </div>
            </div>

            {/* Secondd Field */}
          </div>
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

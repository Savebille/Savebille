import React, { useState } from 'react';
import Text from '../../../components/Text';
import dayjs from 'dayjs';
import { Calculator, Plus } from '@phosphor-icons/react';
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
        {/* 
        <button
          onClick={() => {}}
          className='flex items-center px-3 py-2 bg-h-info rounded-md mt-4 sm:mt-0 transition ease-in-out hover:scale-105 duration-200'
        >
          <Plus size={16} color={'var(--h-white)'} />
          <Text color='white' size='text-1' weight='regular' sx='ml-2'>
            Agregar
          </Text>
        </button> */}
        
        <Modal>
          <div className='w-full h-full'>
            <div className='bg-h-white'>
              <Text size='h1' color='info' weight='bold' sx='p-4'>
                New income
              </Text>
                <div
                  className='flex h-7 m-4 items-center justify-start gap-2 border-b'
                >
                  <button className='flex justify-center items-center mb-2'>
                    <Calculator size={30} className='bg-white rounded-full'/>
                  </button>
                  <input
                    type='number'
                    placeholder='Income...'
                    className='bg-h-gray-input text-h-primary text-md mb-2 h-full w-full focus:outline-none appearance-none'
                  />
                </div>
            </div>
          </div>
        </Modal>
      </div>

      {/* Main content */}
      <div className='flex flex-col sm:flex-row items-start gap-6 mt-6 w-full'>
        {cardsInfo.map((card) => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card.title)}
            className={`flex flex-col bg-white ${currentCardInfo === card.title
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

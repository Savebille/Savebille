import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import Text from '../../../components/Text';
import NewMovementModal from './components/NewMovementModal';
import { getIconByCategory } from '@/shared/utils/general.utils';
import { CaretDown, Pencil, Trash } from '@phosphor-icons/react';
import MovementList from './components/MovementList';
import { getMovementByUserId } from '@/lib/appwrite/api';

const headersTable = [
  {
    id: 1,
    title: 'Registro',
  },
  {
    id: 2,
    title: 'Categoria',
  },
  {
    id: 3,
    title: 'Fecha de creación',
  },
  {
    id: 4,
    title: 'Monto',
  },
  {
    id: 5,
    title: 'Tipo',
  },
  {
    id: 6,
    title: 'Acciones',
  },
];

const dataTable = [
  {
    id: 1,
    title: 'ID-1',
    date: '2021-10-10',
    category: 'Carro',
    amount: 10000,
    status: 'Ingreso',
  },
  {
    id: 2,
    title: 'ID-2',
    date: '2021-10-10',
    category: 'Comida',
    amount: 2000,
    status: 'Gasto',
  },
  {
    id: 3,
    title: 'ID-3',
    date: '2021-10-10',
    category: 'Viaje',
    amount: 1000,
    status: 'Ingreso',
  },
  {
    id: 4,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Gasto',
  },
  {
    id: 5,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Ingreso',
  },
  {
    id: 6,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Gasto',
  },
  {
    id: 7,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Gasto',
  },
  {
    id: 8,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Gasto',
  },
  {
    id: 9,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Gasto',
  },
  {
    id: 10,
    title: 'ID-4',
    date: '2021-10-10',
    category: 'Casa',
    amount: 1000,
    status: 'Gasto',
  },
];

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

export interface Movements {
  $id: string;
  category: string;
  date: any;
  amount: number;
  type: string;
  description: string;
}

const Home: React.FC = () => {
  const [movements, setMovements] = useState<Movements[]>([]);

  const getUserMovements = async () => {
    try {
      const response: Movements[] = await getMovementByUserId();

      setMovements(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserMovements();
  }, []);

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
        <NewMovementModal fetchMovements={getUserMovements} />
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

      {/* Movement List */}
      <MovementList data={movements} />
    </div>
  );
};

export default React.memo(Home);

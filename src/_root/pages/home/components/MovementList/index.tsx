import React from 'react';
import Text from '@/components/Text';
import {
  extractCategoryName,
  extractColorName,
  extractIconName,
} from '@/shared/utils/general.utils';
import { Pencil, Trash } from '@phosphor-icons/react';
import { Movements } from '../..';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface MovementListProps {
  data: Movements[];
}

const headersTable = [
  {
    id: 1,
    title: 'Registro',
    width: 'w-[14.3%]',
  },
  {
    id: 2,
    title: 'Descripción',
    width: 'w-[14.3%]',
  },
  {
    id: 3,
    title: 'Categoria',
    width: 'w-[14.3%]',
  },
  {
    id: 4,
    title: 'Fecha',
    width: 'w-[14.3%]',
  },
  {
    id: 5,
    title: 'Monto',
    width: 'w-[14.3%]',
  },
  {
    id: 6,
    title: 'Tipo',
    width: 'w-[14.3%]',
  },
  {
    id: 7,
    title: 'Acciones',
    width: 'w-[14.3%]',
  },
];

const MovementList: React.FC<MovementListProps> = ({ data }) => {
  const truncateDescription = (description: string) => {
    if (description.length > 18) {
      return description.slice(0, 18) + '...';
    }
    return description;
  };

  return (
    <div className='flex flex-col bg-white rounded-md shadow-sm mt-6 p-4'>
      <div className='sticky top-0 z-10 bg-white'>
        <div className='flex items-center justify-between'>
          <Text size='h5' color='primary' weight='bold'>
            Todos los registros
          </Text>
        </div>

        <Accordion type='single' collapsible className='block lg:hidden h-auto'>
          {data.map((data) => (
            <AccordionItem
              key={data.$id}
              value={data.$id}
              className='justify-start w-full'
            >
              <AccordionTrigger>
                <div className='flex'>
                  <div
                    className={`${extractColorName(
                      data.category
                    )} w-8 h-8 flex items-center justify-center rounded-full mr-2`}
                  >
                    {extractIconName(data.category)}
                  </div>
                  <Text size='text-1' color='secondary' sx='ml-2'>
                    {data.description}
                  </Text>
                </div>
              </AccordionTrigger>

              <div className='ml-7'>
                <div className='flex justify-between items-center '>
                  <AccordionContent>
                    <Text size='text-1' color='primary' weight='regular'>
                      {Number(data.amount).toLocaleString('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </Text>
                  </AccordionContent>

                  <AccordionContent>
                    <div
                      className={`${
                        data.type === 'ingreso'
                          ? 'bg-h-green-light'
                          : 'bg-h-red-light'
                      } px-2.5 rounded-md py-1.5 `}
                    >
                      <Text
                        size='text-1'
                        color={data.type === 'ingreso' ? 'success' : 'error'}
                        weight='medium'
                        sx='w-[52.7px] flex items-center justify-center'
                      >
                        {data.type === 'ingreso' ? 'Ingreso' : 'Gasto'}
                      </Text>
                    </div>
                  </AccordionContent>
                </div>

                <div className='flex justify-between items-center '>
                  <AccordionContent>
                    <Text size='text-1' color='secondary' weight='light'>
                      {data.date.slice(0, 10)}
                    </Text>
                  </AccordionContent>

                  <AccordionContent>
                    <div className='flex w-[72.69px] justify-evenly'>
                      <button type='button' className=''>
                        <Pencil size={16} color={'var(--h-info)'} />
                      </button>
                      <button type='button'>
                        <Trash size={16} color={'var(--h-error)'} />
                      </button>
                    </div>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Header Tabla de Datos */}
        <div className='bg-h-blue-light rounded-md items-center justify-evenly mt-4 hidden lg:flex '>
          {headersTable.map((header) => (
            <div
              key={header.id}
              className={`flex items-center justify-center p-3 ${header.width} text-center`}
            >
              <Text size='text-1' color='primary' weight='medium'>
                {header.title}
              </Text>
            </div>
          ))}
        </div>
      </div>
      {/* Tabla de datos */}
      <div className='overflow-y-auto max-h-[450px] hidden lg:block'>
        {data.map((data) => (
          <div
            className='flex items-center justify-between p-3 border-b w-full'
            key={data.$id}
          >
            <div className='flex items-center justify-center w-[14.3%]'>
              <Text size='text-1' color='secondary' weight='light'>
                ID - {data.$id.slice(0, 8)}
              </Text>
            </div>

            <div className='flex items-center justify-start w-[14.3%]'>
              <Text size='text-1' color='secondary' weight='regular'>
                {truncateDescription(data.description)}
              </Text>
            </div>

            <div className='flex items-center justify-start w-[14.3%]'>
              <div
                className={`${extractColorName(
                  data.category
                )} w-8 h-8 flex items-center justify-center rounded-full mr-2`}
              >
                {extractIconName(data.category)}
              </div>

              <Text size='text-1' color='secondary' weight='regular'>
                {extractCategoryName(data.category)}
              </Text>
            </div>

            <div className='flex items-center justify-center w-[14.3%]'>
              <Text size='text-1' color='secondary' weight='light'>
                {data.date.slice(0, 10)}
              </Text>
            </div>

            <div className='flex items-center justify-center w-[14.3%]'>
              <Text size='text-1' color='primary' weight='regular'>
                {Number(data.amount).toLocaleString('es-CO', {
                  style: 'currency',
                  currency: 'COP',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>
            </div>

            <div className='flex items-center justify-center w-[14.3%] '>
              <div
                className={`${
                  data.type === 'ingreso'
                    ? 'bg-h-green-light'
                    : 'bg-h-red-light'
                } px-2.5 rounded-md py-1.5 `}
              >
                <Text
                  size='text-1'
                  color={data.type === 'ingreso' ? 'success' : 'error'}
                  weight='medium'
                  sx='w-[52.7px] flex items-center justify-center'
                >
                  {data.type === 'ingreso' ? 'Ingreso' : 'Gasto'}
                </Text>
              </div>
            </div>

            <div className='flex items-center justify-center cursor-pointer w-[14.3%]'>
              <button type='button' className='mr-3'>
                <Pencil size={16} color={'var(--h-info)'} />
              </button>
              <button type='button'>
                <Trash size={16} color={'var(--h-error)'} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovementList;

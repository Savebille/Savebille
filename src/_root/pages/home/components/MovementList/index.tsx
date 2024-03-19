import Text from '@/components/Text';
import { getIconByCategory } from '@/shared/utils/general.utils';
import { Pencil, Trash } from '@phosphor-icons/react';
import { Movements } from '../..';


interface MovementListProps {
  data: Movements[];
}

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

const MovementList: React.FC<MovementListProps> = ({ data }) => {
  return (
    <div className='flex flex-col bg-white rounded-md shadow-sm mt-6 p-4'>
      <div className='flex items-center justify-between'>
        <Text size='h5' color='primary' weight='bold'>
          Todos los registros
        </Text>
      </div>

      <div className='bg-[#F8F9FC] rounded-md flex items-center justify-between mt-4'>
        {headersTable.map((header) => (
          <div className='flex items-center justify-between p-3'>
            <Text size='text-1' color='primary' weight='medium'>
              {header.title}
            </Text>
          </div>
        ))}
      </div>
      <div>
        {data.map((data) => (
          <div className='flex items-center justify-between p-3 border-b'>
            <Text size='text-1' color='secondary' weight='light'>
              {data.$id.slice(0, 6)}
            </Text>
            <div className='flex items-center'>
              <div className='bg-h-blue-light w-7 h-7 flex items-center justify-center rounded-full mr-2'>
                {getIconByCategory(data.category)}
              </div>

              <Text size='text-1' color='primary' weight='regular'>
                {data.category}
              </Text>
            </div>
            <Text size='text-1' color='secondary' weight='light'>
              {data.date.slice(0, 10)}
            </Text>
            <Text size='text-1' color='primary' weight='regular'>
              {Number(data.amount).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </Text>
            {data.type === 'ingreso' ? (
              <div className='bg-[#F4F9F2] px-2 rounded-md py-1.5'>
                <Text size='text-1' color='success' weight='bold'>
                  Ingreso
                </Text>
              </div>
            ) : (
              <div className='bg-[#FFF2ED] px-2 rounded-md py-1.5'>
                <Text size='text-1' color='error' weight='bold'>
                  Gasto
                </Text>
              </div>
            )}
            <div className='flex items-center cursor-pointer'>
              <Pencil size={16} color={'var(--h-info)'} className='mr-3' />
              <Trash size={16} color={'var(--h-error)'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovementList;

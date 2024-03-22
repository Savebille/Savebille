import {
  CoatHanger,
  GasPump,
  Gift,
  HandCoins,
  House,
  Money,
  Pizza,
  TrendUp,
} from '@phosphor-icons/react';
import IMAGES from '../constants/images';

const getIconByCategory = (category: string) => {
  switch (category) {
    case 'Salario':
      return <Money size={24} color='#61B449' />;
    case 'Inversión':
      return <TrendUp size={24} color='#3498DB' />;
    case 'Regalo':
      return <Gift size={24} color='#2ECC71' />;

    case 'Prestamo':
      return <HandCoins size={24} color='#233145' />;
    case 'Arriendo':
      return <House size={24} color='#FF5252' />;
    case 'Comida':
      return <Pizza size={24} color='#E67E22' />;
    case 'Ropa':
      return <CoatHanger size={24} color='#8E44AD' />;
    case 'Gasolina':
      return <GasPump size={24} color='#16A085' />;

    case 'Nequi':
      return (
        <div>
          <img
            src={IMAGES.NEQUI_ICON}
            alt='nequiIcon'
            width={24}
            height={24}
            className='rounded-full'
          />
        </div>
      );
    case 'Daviplata':
      return (
        <div>
          <img
            src={IMAGES.DAVIPLATA_ICON}
            alt='daviplataIcon'
            width={21}
            height={21}
            className='rounded-full'
          />
        </div>
      );
    default:
      return <></>;
  }
};

export { getIconByCategory };

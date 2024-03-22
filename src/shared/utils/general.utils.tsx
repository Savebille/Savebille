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
import { customCategoryIcons } from '../constants/data';

const getIconByCategory = (category: string) => {
  switch (category) {
    case 'Salario':
      return <Money size={20} color='#61B449' />;
    case 'Inversión':
      return <TrendUp size={20} color='#3498DB' />;
    case 'Regalo':
      return <Gift size={20} color='#2ECC71' />;

    case 'Prestamo':
      return <HandCoins size={20} color='#233145' />;
    case 'Arriendo':
      return <House size={20} color='#FF5252' />;
    case 'Comida':
      return <Pizza size={20} color='#E67E22' />;
    case 'Ropa':
      return <CoatHanger size={20} color='#8E44AD' />;
    case 'Gasolina':
      return <GasPump size={20} color='#16A085' />;

    case 'Nequi':
      return (
        <div>
          <img
            src={IMAGES.NEQUI_ICON}
            alt='nequiIcon'
            width={20}
            height={20}
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
            width={20}
            height={20}
            className='rounded-full'
          />
        </div>
      );
    default:
      return <></>;
  }
};

const getColorByName = (name: string) => {
  switch (name) {
    case 'green':
      return 'bg-h-success';
    case 'blue':
      return 'bg-[#3498DB]';
    case 'red':
      return 'bg-h-error';
    case 'gray':
      return 'bg-h-gray';
    case 'orange':
      return 'bg-ct-orange';
    case 'purple':
      return 'bg-ct-purple';
    case 'yellow':
      return 'bg-ct-yellow';
    case 'lightGreen':
      return 'bg-ct-lightGreen';
    case 'darkGreen':
      return 'bg-ct-darkGreen';
    case 'primary':
      return 'bg-h-primary';
    default:
      return 'bg-h-blue-light';
  }
};

const getIconByName = (iconName: string) => {
  const foundIcon = customCategoryIcons.find((icon) => icon.name === iconName);

  return foundIcon?.icon;
};

export { getIconByCategory, getColorByName, getIconByName };

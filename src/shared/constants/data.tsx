import {
  Airplane,
  Baby,
  Barbell,
  Bone,
  BookOpenText,
  Cake,
  Camera,
  Car,
  Church,
  CoatHanger,
  Coffee,
  CurrencyBtc,
  CurrencyEth,
  DeviceMobile,
  DotsThreeCircle,
  DribbbleLogo,
  Drop,
  FilmStrip,
  GameController,
  GasPump,
  Gavel,
  Gift,
  Guitar,
  HandCoins,
  Handbag,
  Heartbeat,
  HighlighterCircle,
  House,
  IceCream,
  Lightbulb,
  Martini,
  Money,
  Package,
  PaintBrushBroad,
  PawPrint,
  PersonSimpleBike,
  Phone,
  PhoneCall,
  PiggyBank,
  Pill,
  Pizza,
  Plant,
  Receipt,
  SketchLogo,
  SpotifyLogo,
  Student,
  Tooth,
  TreePalm,
  TrendUp,
  WifiHigh,
} from '@phosphor-icons/react';
import IMAGES from './images';
import { ReactNode } from 'react';

export interface CategoryIconsProps {
  icon: ReactNode;
  name: string;
}

export interface CategoryColorsProps {
  id: number;
  color: string;
  isDefault: boolean;
}
export const defaultIncomeCategories = [
  {
    icon: <Money size={20} color='white' />,
    iconName: 'Money',
    name: 'Salario',
    color: 'bg-ct-darkGreen',
  },
  {
    icon: <TrendUp size={20} color='white' />,
    iconName: 'TrendUp',
    name: 'Inversión',
    color: 'bg-ct-blue',
  },
  {
    icon: <Gift size={20} color='white' />,
    iconName: 'Gift',
    name: 'Regalo',
    color: 'bg-ct-red',
  },
  {
    icon: <DeviceMobile size={20} color='white' />,
    iconName: 'DeviceMobile',
    name: 'Transferencia',
    color: 'bg-ct-purple',
  },
  {
    icon: (
      <img
        src={IMAGES.NEQUI_ICON}
        alt='nequiIcon'
        width={28}
        height={28}
        className='rounded-full'
      />
    ),
    iconName: 'nequiIcon',
    name: 'Nequi',
    color: 'bg-ct-lightGreen',
  },
  {
    icon: (
      <img
        src={IMAGES.DAVIPLATA_ICON}
        alt='daviplataIcon'
        width={28}
        height={28}
        className='rounded-full'
      />
    ),
    iconName: 'daviplataIcon',
    name: 'Daviplata',
    color: 'bg-ct-lightGreen',
  },
  {
    icon: <DotsThreeCircle size={20} color='white' />,
    iconName: 'DotsThreeCircle',
    name: 'Otros',
    color: 'bg-ct-orange',
  },
];

export const defaultExpenseCategories = [
  {
    icon: <HandCoins size={20} color='white' />,
    iconName: 'HandCoins',
    name: 'Prestamo',
    color: 'bg-ct-yellow',
  },
  {
    icon: <House size={20} color='white' />,
    iconName: 'House',
    name: 'Arriendo',
    color: 'bg-ct-crimsonRed',
  },
  {
    icon: <Pizza size={20} color='white' />,
    iconName: 'Pizza',
    name: 'Comida',
    color: 'bg-ct-deepCobaltBlue',
  },
  {
    icon: <CoatHanger size={20} color='white' />,
    iconName: 'CoatHanger',
    name: 'Ropa',
    color: 'bg-ct-paleLilac',
  },
  {
    icon: <GasPump size={20} color='white' />,
    iconName: 'GasPump',
    name: 'Gasolina',
    color: 'bg-ct-navyBlue',
  },
  {
    icon: (
      <img
        src={IMAGES.NEQUI_ICON}
        alt='nequiIcon'
        width={28}
        height={28}
        className='rounded-full'
      />
    ),
    iconName: 'nequiIcon',
    name: 'Nequi',
    color: 'bg-ct-crimsonRed',
  },
  {
    icon: (
      <img
        src={IMAGES.DAVIPLATA_ICON}
        alt='daviplataIcon'
        width={28}
        height={28}
        className='rounded-full'
      />
    ),
    iconName: 'daviplataIcon',
    name: 'Daviplata',
    color: 'bg-ct-crimsonRed',
  },
];

export const customCategoryIcons: CategoryIconsProps[] = [
  // Nature
  {
    icon: <TreePalm size={20} color='white' />,
    name: 'TreePalm',
  },
  {
    icon: <Airplane size={20} color='white' />,
    name: 'Airplane',
  },
  {
    icon: <Drop size={20} color='white' />,
    name: 'Drop',
  },
  {
    icon: <Plant size={20} color='white' />,
    name: 'Plant',
  },

  // Health
  {
    icon: <Heartbeat size={20} color='white' />,
    name: 'Heartbeat',
  },
  {
    icon: <Baby size={20} color='white' />,
    name: 'Baby',
  },
  {
    icon: <Bone size={20} color='white' />,
    name: 'Bone',
  },
  {
    icon: <Tooth size={20} color='white' />,
    name: 'Tooth',
  },
  {
    icon: <Pill size={20} color='white' />,
    name: 'Pill',
  },

  // Education
  {
    icon: <BookOpenText size={20} color='white' />,
    name: 'BookOpenText',
  },
  {
    icon: <Student size={20} color='white' />,
    name: 'Student',
  },

  // Technology
  {
    icon: <Lightbulb size={20} color='white' />,
    name: 'LightBulb',
  },
  {
    icon: <Phone size={20} color='white' />,
    name: 'Phone',
  },
  {
    icon: <WifiHigh size={20} color='white' />,
    name: 'WifiHigh',
  },

  //Fashion
  {
    icon: <Handbag size={20} color='white' />,
    name: 'Handbag',
  },
  {
    icon: <HighlighterCircle size={20} color='white' />,
    name: 'Highlighter',
  },

  //Transportation
  {
    icon: <Car size={20} color='white' />,
    name: 'Car',
  },
  {
    icon: <PersonSimpleBike size={20} color='white' />,
    name: 'PersonSimple Bike',
  },

  //Food
  {
    icon: <Cake size={20} color='white' />,
    name: 'Cake',
  },
  {
    icon: <IceCream size={20} color='white' />,
    name: 'IceCream',
  },
  {
    icon: <Coffee size={20} color='white' />,
    name: 'Coffee',
  },
  {
    icon: <Martini size={20} color='white' />,
    name: 'Martini',
  },

  //Art & Design
  {
    icon: <Camera size={20} color='white' />,
    name: 'Camera',
  },
  {
    icon: <SketchLogo size={20} color='white' />,
    name: 'SketchLogo',
  },
  {
    icon: <PaintBrushBroad size={20} color='white' />,
    name: 'PaintBrushBroad',
  },

  //Entertainment
  {
    icon: <GameController size={20} color='white' />,
    name: 'GameController',
  },
  {
    icon: <Guitar size={20} color='white' />,
    name: 'Guitar',
  },
  {
    icon: <DribbbleLogo size={20} color='white' />,
    name: 'DribbbleLogo',
  },
  {
    icon: <SpotifyLogo size={20} color='white' />,
    name: 'SpotifyLogo',
  },
  {
    icon: <FilmStrip size={20} color='white' />,
    name: 'FilmStrip',
  },

  //Business
  {
    icon: <Gavel size={20} color='white' />,
    name: 'Gavel',
  },
  {
    icon: <Receipt size={20} color='white' />,
    name: 'Receipt',
  },
  {
    icon: <Package size={20} color='white' />,
    name: 'Package',
  },

  //Animals
  {
    icon: <PawPrint size={20} color='white' />,
    name: 'PawPrint',
  },

  //Finance
  {
    icon: <PiggyBank size={20} color='white' />,
    name: 'PiggyBank',
  },
  {
    icon: <CurrencyBtc size={20} color='white' />,
    name: 'CurrencyBtc',
  },
  {
    icon: <CurrencyEth size={20} color='white' />,
    name: 'CurrencyEth',
  },

  //Miscellaneous

  {
    icon: <Church size={20} color='white' />,
    name: 'Church',
  },

  {
    icon: <Barbell size={20} color='white' />,
    name: 'Barbell',
  },

  {
    icon: <PhoneCall size={20} color='white' />,
    name: 'PhoneCall',
  },

  //Incomes
  {
    icon: <Money size={20} color='white' />,
    name: 'Money',
  },
  {
    icon: <TrendUp size={20} color='white' />,
    name: 'TrendUp',
  },
  {
    icon: <Gift size={20} color='white' />,
    name: 'Gift',
  },
  {
    icon: <DeviceMobile size={20} color='white' />,
    name: 'DeviceMobile',
  },
  {
    icon: (
      <img
        src={IMAGES.NEQUI_ICON}
        alt='nequiIcon'
        width={28}
        height={28}
        className='rounded-full'
      />
    ),
    name: 'nequiIcon',
  },
  {
    icon: (
      <img
        src={IMAGES.DAVIPLATA_ICON}
        alt='daviplataIcon'
        width={28}
        height={28}
        className='rounded-full'
      />
    ),
    name: 'daviplataIcon',
  },
  {
    icon: <DotsThreeCircle size={20} color='white' />,
    name: 'DotsThreeCircle',
  },

  //Expenses

  {
    icon: <HandCoins size={20} color='white' />,
    name: 'HandCoins',
  },
  {
    icon: <House size={20} color='white' />,
    name: 'House',
  },
  {
    icon: <Pizza size={20} color='white' />,
    name: 'Pizza',
  },
  {
    icon: <CoatHanger size={20} color='white' />,
    name: 'CoatHanger',
  },
  {
    icon: <GasPump size={20} color='white' />,
    name: 'GasPump',
  },
];

export const customCategoryColors: CategoryColorsProps[] = [
  {
    id: 1,
    color: 'bg-ct-pink-500',
    isDefault: true,
  },
  {
    id: 2,
    color: 'bg-ct-pink-a100',
    isDefault: true,
  },
  {
    id: 3,
    color: 'bg-ct-purple-500',
    isDefault: true,
  },
  {
    id: 4,
    color: 'bg-ct-purple-a100',
    isDefault: true,
  },
  {
    id: 5,
    color: 'bg-ct-deep-purple-500',
    isDefault: true,
  },
  {
    id: 6,
    color: 'bg-ct-deep-purple-a100',
    isDefault: false,
  },
  {
    id: 7,
    color: 'bg-ct-indigo-500',
    isDefault: false,
  },
  {
    id: 8,
    color: 'bg-ct-indigo-a100',
    isDefault: false,
  },
  {
    id: 9,
    color: 'bg-ct-blue-500',
    isDefault: false,
  },
  {
    id: 10,
    color: 'bg-ct-blue-a100',
    isDefault: false,
  },
  {
    id: 11,
    color: 'bg-ct-light-blue-500',
    isDefault: false,
  },
  {
    id: 12,
    color: 'bg-ct-light-blue-a100',
    isDefault: false,
  },
  {
    id: 13,
    color: 'bg-ct-cyan-500',
    isDefault: false,
  },
  {
    id: 14,
    color: 'bg-ct-cyan-a100',
    isDefault: false,
  },
  {
    id: 15,
    color: 'bg-ct-teal-500',
    isDefault: false,
  },
  {
    id: 16,
    color: 'bg-ct-teal-a100',
    isDefault: false,
  },
  {
    id: 17,
    color: 'bg-ct-green-500',
    isDefault: false,
  },
  {
    id: 18,
    color: 'bg-ct-green-a100',
    isDefault: false,
  },
  {
    id: 19,
    color: 'bg-ct-light-green-500',
    isDefault: false,
  },
  {
    id: 20,
    color: 'bg-ct-light-green-a100',
    isDefault: false,
  },
  {
    id: 21,
    color: 'bg-ct-lime-500',
    isDefault: false,
  },
  {
    id: 22,
    color: 'bg-ct-lime-a100',
    isDefault: false,
  },
  {
    id: 23,
    color: 'bg-ct-yellow-500',
    isDefault: false,
  },
  {
    id: 24,
    color: 'bg-ct-yellow-a100',
    isDefault: false,
  },
  {
    id: 25,
    color: 'bg-ct-amber-500',
    isDefault: false,
  },
  {
    id: 26,
    color: 'bg-ct-amber-a100',
    isDefault: false,
  },
  {
    id: 27,
    color: 'bg-ct-orange-500',
    isDefault: false,
  },
  {
    id: 28,
    color: 'bg-ct-orange-a100',
    isDefault: false,
  },
  {
    id: 29,
    color: 'bg-ct-deep-orange-500',
    isDefault: false,
  },
  {
    id: 30,
    color: 'bg-ct-deep-orange-a100',
    isDefault: false,
  },
  {
    id: 31,
    color: 'bg-ct-brown-500',
    isDefault: false,
  },
  {
    id: 32,
    color: 'bg-ct-brown-300',
    isDefault: false,
  },
  {
    id: 33,
    color: 'bg-ct-blue-grey-500',
    isDefault: false,
  },
];

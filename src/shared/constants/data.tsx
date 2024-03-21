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
  DeviceMobile,
  DotsThreeCircle,
  DribbbleLogo,
  Drop,
  GameController,
  GasPump,
  Gavel,
  Gift,
  Guitar,
  HandCoins,
  Handbag,
  Heartbeat,
  House,
  IceCream,
  Lightbulb,
  Martini,
  Money,
  Package,
  PaintBrushBroad,
  PawPrint,
  PersonSimpleBike,
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
    name: 'Salario',
    color: 'green',
  },
  {
    icon: <TrendUp size={20} color='white' />,
    name: 'Inversión',
    color: 'blue',
  },
  {
    icon: <Gift size={20} color='white' />,
    name: 'Regalo',
    color: 'red',
  },
  {
    icon: <DeviceMobile size={20} color='white' />,
    name: 'Transferencia',
    color: 'orange',
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
    name: 'Nequi',
    color: 'lightGreen',
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
    name: 'Daviplata',
    color: 'lightGreen',
  },
  {
    icon: <DotsThreeCircle size={20} color='white' />,
    name: 'Otros',
    color: 'gray',
  },
];

export const defaultExpenseCategories = [
  {
    icon: <HandCoins size={20} color='white' />,
    name: 'Prestamo',
    color: 'primary',
  },
  {
    icon: <House size={20} color='white' />,
    name: 'Arriendo',
    color: 'red',
  },
  {
    icon: <Pizza size={20} color='white' />,
    name: 'Comida',
    color: 'orange',
  },
  {
    icon: <CoatHanger size={20} color='white' />,
    name: 'Ropa',
    color: 'purple',
  },
  {
    icon: <GasPump size={20} color='white' />,
    name: 'Gasolina',
    color: 'darkGreen',
  },
];

export const customCategoryIcons: CategoryIconsProps[] = [
  {
    icon: <TreePalm size={20} color='white' />,
    name: 'Tree Palm',
  },
  {
    icon: <Heartbeat size={20} color='white' />,
    name: 'Heartbeat',
  },
  {
    icon: <BookOpenText size={20} color='white' />,
    name: 'Book Open Text',
  },
  {
    icon: <Baby size={20} color='white' />,
    name: 'Baby',
  },
  {
    icon: <Lightbulb size={20} color='white' />,
    name: 'Light Bulb',
  },
  {
    icon: <Handbag size={20} color='white' />,
    name: 'Handbag',
  },
  {
    icon: <PersonSimpleBike size={20} color='white' />,
    name: 'Person Simple Bike',
  },
  {
    icon: <Bone size={20} color='white' />,
    name: 'Bone',
  },
  {
    icon: <Car size={20} color='white' />,
    name: 'Car',
  },
  {
    icon: <Cake size={20} color='white' />,
    name: 'Cake',
  },
  {
    icon: <Camera size={20} color='white' />,
    name: 'Camera',
  },
  {
    icon: <IceCream size={20} color='white' />,
    name: 'Ice Cream',
  },
  {
    icon: <Airplane size={20} color='white' />,
    name: 'Airplane',
  },
  {
    icon: <Church size={20} color='white' />,
    name: 'Church',
  },
  {
    icon: <Coffee size={20} color='white' />,
    name: 'Coffee',
  },
  {
    icon: <SketchLogo size={20} color='white' />,
    name: 'Sketch Logo',
  },
  {
    icon: <Barbell size={20} color='white' />,
    name: 'Barbell',
  },
  {
    icon: <DribbbleLogo size={20} color='white' />,
    name: 'Dribbble Logo',
  },
  {
    icon: <PaintBrushBroad size={20} color='white' />,
    name: 'Paint Brush Broad',
  },
  {
    icon: <GameController size={20} color='white' />,
    name: 'Game Controller',
  },
  {
    icon: <Gavel size={20} color='white' />,
    name: 'Gavel',
  },
  {
    icon: <Guitar size={20} color='white' />,
    name: 'Guitar',
  },
  {
    icon: <Martini size={20} color='white' />,
    name: 'Martini',
  },
  {
    icon: <SpotifyLogo size={20} color='white' />,
    name: 'Spotify Logo',
  },
  {
    icon: <Tooth size={20} color='white' />,
    name: 'Tooth',
  },
  {
    icon: <WifiHigh size={20} color='white' />,
    name: 'Wifi High',
  },
  {
    icon: <Drop size={20} color='white' />,
    name: 'Drop',
  },
  {
    icon: <Package size={20} color='white' />,
    name: 'Package',
  },
  {
    icon: <PawPrint size={20} color='white' />,
    name: 'Paw Print',
  },
  {
    icon: <PiggyBank size={20} color='white' />,
    name: 'Piggy Bank',
  },
  {
    icon: <Receipt size={20} color='white' />,
    name: 'Receipt',
  },
  {
    icon: <Student size={20} color='white' />,
    name: 'Student',
  },
  {
    icon: <PhoneCall size={20} color='white' />,
    name: 'Phone Call',
  },
  {
    icon: <Plant size={20} color='white' />,
    name: 'Plant',
  },
  {
    icon: <Pill size={20} color='white' />,
    name: 'Pill',
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
